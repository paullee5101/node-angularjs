'use strict'

import express from 'express'
import db from '../../../database'
import _ from 'lodash'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cuid from 'cuid'
import moment from 'moment'
import randomString from 'randomstring'

class Auth {
    
    constructor()
    {
        
    }
    
    userSignIn(req, res) {
        let email = _.escape(req.body.email)
        let secret = req.body.secret
        
        if(email == "" || secret == "") {
            return res.json({
                status: false,
                message: 'Invalid credentials'
            })
        }
        
        db.query(
            "SELECT u.*, f.filename AS profile_picture FROM users u "+
            "LEFT JOIN files f ON u.user_id = f.parent_id "+
            "WHERE u.email =?", [ email ], function(err, result) {
                if(err) {
                    return res.status(500).json(err);
                }

                if(!result[0]) {
                    res.json({
                        status: false,
                        message: 'Authentication failed, user not found..'
                    })
                } else {
                    let userInfo = {
                        user_id: result[0].user_id,
                        owner: result[0].owner,
                        created: result[0].created,
                        active: result[0].active,
                        company_id: result[0].company_id,
                        email: result[0].email,
                        secret: result[0].secret,
                        full_name :result[0].full_name,
                        gender: result[0].gender,
                        dob: result[0].dob,
                        profile_picture: result[0].profile_picture
                    }
                    if(bcrypt.compareSync(secret, userInfo.secret) == false) {
                        res.json({
                            status: false,
                            message: 'Authentication failed, password is incorrect..'
                        })
                    } else {
                        let refreshToken = randomString.generate(15),
                        token = generateToken(userInfo, 'letscompare')
                        // Storing access token
                        db.query('UPDATE users SET refresh_token = ? WHERE user_id = ? ' , [ refreshToken, userInfo.user_id ], function(err, result) {
                            if(err) {
                                return res.status(500).json(err);
                            }
                            res.json({
                                status: true,
                                message: 'Authentication successful, enjoy your token!',
                                token: token,
                                role_id: userInfo.role_id,
                                refresh_token: refreshToken,
                                user_info: userInfo
                            })
                        })
                    }
                }
            })
    }
    
    userSignUp(req, res, next) { 
        db.query('SELECT 1 FROM users WHERE email = ?', [ _.escape(req.body.email) ], function(err, result) {
            if(err) {
                return res.status(500).json(err);
            }
            if(result.length != 0) {
                res.json({
                    status:false,
                    message: 'Account already exist'
                })
            } else {
                let sql = {
                    user_id: cuid(),
                    created: moment().format('YYYY/MM/DD HH:MM:ss'),
                    active: 'y',
                    role_id: _.escape(req.body.role_id),
                    company_id: _.escape(req.body.company_id),
                    email: _.escape(req.body.email),
                    secret: bcrypt.hashSync(req.body.secret, 10),
                    full_name: _.escape(req.body.full_name),
                    gender: _.escape(req.body.gender),
                    dob: moment(_.escape(req.body.dob)).format('YYYY/MM/DD')
                }
                db.query('INSERT INTO users SET ?', sql, function (err, result){
                    if(err) {
                        return res.status(500).json(err);
                    }
                    next();
                });
            }   
        })
    }
    
    revokeAuthentication (req, res) {
        jwt.verify(req.body.token, 'letscompare', function(err, decoded) {
            if(err) {
                return res.status(403).send({ 
                    status: false, 
                    message: 'Token malformed!' 
                }); 
            }

            let userId       = decoded.user_id,
                token        = req.body.token,
                refreshToken = req.body.refresh_token

            db.query('SELECT * FROM users WHERE user_id = ? AND refresh_token = ? ', [ userId, refreshToken ], function(err, result){
                if(err) {
                    return res.status(500).json(err);
                }
                
                if(result[0]) {
                    let userInfo = {
                        user_id: result[0].user_id,
                        full_name :result[0].full_name,
                        role_id: result[0].role_id
                    }
                    
                    if(refreshToken) {
                        if(result[0].refresh_token == refreshToken) {
                            jwt.verify(token, 'letscompare', function(err, decoded) {
                                if (err) {
                                    let token = generateToken(userInfo, 'letscompare'),
                                    newRefreshToken = randomString.generate(15)
                                        
                                    // Refresh update access token
                                    db.query('UPDATE users SET refresh_token = ?, access_token = ? WHERE user_id = ? ' , [ newRefreshToken, token, userInfo.user_id ], function(err, result) {
                                        if(err) {
                                            return res.status(500).json(err);
                                        }
                                        console.log(result)
                                        res.json({
                                            status: true,
                                            message: 'Refresh token successful, enjoy your token!',
                                            token: token, 
                                            refresh_token: newRefreshToken,
                                            role: userInfo.role
                                            
                                        })
                                    })
                                } else {
                                    res.json({
                                        status: true,
                                        message: 'Token is valid',
                                        role: userInfo.role,
                                        user_info: userInfo
                                        
                                    })  
                                }
                            })
                            
                        } else {
                            return res.status(403).send({ 
                                status: false, 
                                message: 'Token is invalid!' 
                            }); 
                        }
                    } else {
                        return res.status(200).send({ 
                            status: false, 
                            message: 'Request not valid!' 
                        }); 
                    }
                } else {
                    return res.status(403).send({ 
                        status: false, 
                        message: 'User not found!' 
                    }); 
                }
            })
        });
    }
    
    validateApiRequest(req, res, next) {
        /**
         * Definition of public routes
         */
        let path = [
            'signin',
            'signup',
            'revoke',
            'contents'
        ]
        let pathStr = req.path.split('/')[2];
        if(_.includes(path, pathStr)) {
            return next();
        } else {
            let token   = req.headers['x-access-token']
            if(token) {
                jwt.verify(token, 'letscompare', function(err, decoded) {      
                    if (err) {
                        return res.json({ 
                            status: false, 
                            message: 'Failed to authenticate token.' 
                        });    
                    } else {
                        next();
                    }
                });
            } else {
                return res.status(403).send({ 
                    status: false, 
                    message: 'Request not authorized!' 
                });         
            }   
        }
    }
    
}

function generateToken (user, refreshToken) {
    var token = jwt.sign(user, refreshToken, {
      expiresIn: '24h' // expires in 24 hours
    });
    return token
}


export default Auth;