export function login(email, password) {
    return {
        type: 'USER_LOGIN',
        email, 
        password
    }
}