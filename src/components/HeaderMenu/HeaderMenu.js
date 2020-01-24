import React, { Component } from 'react';
import './HeaderMenu.scss';
import { Link } from 'react-router-dom';

class HeaderMenu extends Component{
    render(){
        return( 
            <div className="row">
                <div className = "column HeaderMenu">
                    <div className="ui buttons">
                        <Link to="/" className = "ui button">One</Link>
                        <Link to="/second" className = "ui button">Two</Link>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderMenu;