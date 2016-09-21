import {Link} from 'react-router'
import React from 'react'
import moment from 'Moment'

const FooterComponent = (props) => (
    <footer className="footer">
    	<div className="row">
			<div className="container">
				<div id="footer-content">
					<div className="row">
						<div className="col col-sm-12 col-md-3">
							<h4>Legal</h4>
							<ul>
								<li><Link to="/">Terms and Conditions</Link></li>
								<li><Link to="/">Privacy Policy</Link></li>
							</ul>
						</div>
						<div className="col col-sm-12 col-md-3">
							<h4>About</h4>
							<ul>
								<li><Link to="/">Background</Link></li>
								<li><Link to="/">Contact Us</Link></li>
								<li><Link to="/">FAQ</Link></li>
							</ul>
						</div>
						<div className="col col-sm-12 col-md-6">
							<div className="col col-xs-6">
								<p>
									Seksyen 13, Unit 227, Block 4,<br/>
									Laman Seri Business Park, No. 7,<br/>
									Jalan Persiaran Sukan,<br/>
									Shah Alam, Selangor Darul Ehsan,<br/>
									40100, Malaysia
								</p>
							</div>
							<div className="col col-xs-6">
								<img src="/assets/images/LetsCompare_LOGO.png" className="logo"/>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<small className="col col-sm-12" id="copyright">
						Copyright &copy; {moment().format('YYYY')} LetsCompare.com.my
					</small>
				</div>
			</div>
		</div>
    </footer>
)

export default FooterComponent;