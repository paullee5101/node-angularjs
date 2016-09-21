import {Link} from 'react-router';
import React from 'react';

const PortalArticleComponent = (props) => {
    return (
        <div className="row" id="article-grids">
            <Link to="">
        		<div className="col col-xs-12 col-md-6 grid" style={{backgroundImage:"url(https://placeholdit.imgix.net/~text?txtsize=33&txt=975%C3%97250&w=975&h=250&bg=de4040&txtclr=ffffff)"}}>
        			
        		</div>
            </Link>
            <Link to="">
        		<div className="col col-xs-12 col-md-6 grid" style={{backgroundImage:"url(https://placeholdit.imgix.net/~text?txtsize=33&txt=975%C3%97250&w=975&h=250&bg=40dec3&txtclr=ffffff)"}}>
        
        		</div>
            </Link>
            <Link to="">
        		<div className="col col-xs-12 col-md-6 grid" style={{backgroundImage:"url(https://placeholdit.imgix.net/~text?txtsize=33&txt=975%C3%97250&w=975&h=250&bg=d740de&txtclr=ffffff)"}}>

        		</div>
            </Link>
            <Link to="">
        		<div className="col col-xs-12 col-md-6 grid" style={{backgroundImage:"url(https://placeholdit.imgix.net/~text?txtsize=33&txt=975%C3%97250&w=975&h=250&bg=ff4a79&txtclr=ffffff)"}}>
        			
        		</div>
            </Link>
    	</div>
    )
}

export default PortalArticleComponent;