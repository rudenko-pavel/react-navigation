import React, { Component } from 'react';
import './HeaderMenu.scss';
import { Link } from 'react-router-dom';
import { fetchMenuitems } from '../../actions';
import { connect } from 'react-redux';

class HeaderMenu extends Component{
    componentDidMount (){
		this.props.fetchMenuitems();
    };

    renderList(){
        return this.props.menuitems.map(menuitem =>{
            return (
                <Link to={menuitem.link} className = "ui button" key={menuitem.id}>
                    {menuitem.name}
                </Link>
            );
        });
    }

    render(){console.log ("render(menuitems)",this.props.menuitems);
        return( 
            <div className="row">
                <div className = "column HeaderMenu">
                    <div className="ui basic buttons">
                        {this.renderList()}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{ // see to `src/reducers/index.js`
    return { 
        menuitems: state.menuitems
    };
}

export default connect(mapStateToProps,{
    fetchMenuitems: fetchMenuitems 		// see to `src/actions/index.js`
})(HeaderMenu);