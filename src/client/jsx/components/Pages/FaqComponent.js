import {Link} from 'react-router';
import React from 'react';

const FaqComponent = (props) => (
    <div className="container">
    	<h1>Frequently Asked</h1>
    	<div className="row">
    		<div className="col col-xs-12 col-md-5">
    			Still have a few things you'd like to clear up? We've put together the following simple answers to questions frequently thought, but rarely aske, about finding deals on insurance, home products and finances.
    		</div>
    		<div className="col col-xs-12 col-md-7">
    			<p><Link to="/#FAQ-1">FAQ Question 1</Link></p>
    			<p><Link to="/#FAQ-2">FAQ Question 2</Link></p>
				<p><Link to="/#FAQ-3">FAQ Question 3</Link></p>
    		</div>
    	</div>
    	<div className="row page-scroll faq-item" id="FAQ-1">
    		<div className="col col-xs-12 col-md-5">
    			<h3>FAQ Question 1</h3>
    		</div>
    		<div className="col col-xs-12 col-md-7">
    			We make money when we find our customers a new deal on their household finances. For example, each time someone buys a new gas or electricity tariff, having found their new supplier through us, we get paid. Simple.
    		</div>
    	</div>	
    	<div className="row page-scroll faq-item" id="FAQ-2">
    		<div className="col col-xs-12 col-md-5">
    			<h3>FAQ Question 2</h3>
    		</div>
    		<div className="col col-xs-12 col-md-7">
    			We make money when we find our customers a new deal on their household finances. For example, each time someone buys a new gas or electricity tariff, having found their new supplier through us, we get paid. Simple.
    		</div>
    	</div>	
    	<div className="row page-scroll faq-item" id="FAQ-3">
    		<div className="col col-xs-12 col-md-5">
    			<h3>FAQ Question 3</h3>
    		</div>
    		<div className="col col-xs-12 col-md-7">
    			We make money when we find our customers a new deal on their household finances. For example, each time someone buys a new gas or electricity tariff, having found their new supplier through us, we get paid. Simple.
    		</div>
    	</div>	
    </div>
)

export default FaqComponent;