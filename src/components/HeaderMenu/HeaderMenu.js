import "./HeaderMenu.scss";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchMenuitems, selectItemMenu } from "../../actions";

class HeaderMenu extends Component {
  componentDidMount() {
    this.props.fetchMenuitems();
    //  this.props.selectItemMenu();
  }

  renderList() {
    let currentItemMenu = "";

    return this.props.menuitems.map(menuitem => {
      // eslint-disable-next-line no-unused-expressions
      menuitem.id === this.props.menuselected
        ? (currentItemMenu = "blue basic")
        : (currentItemMenu = "");
      return (
        <Link
          to={menuitem.link}
          className={"ui button "+currentItemMenu}
          key={menuitem.id}
          onClick={() => this.props.selectItemMenu(menuitem.id)}
        >
          {menuitem.name}
        </Link>
      );
    });
  }

  render() {
    // eslint-disable-next-line max-len
    // console.log("render(menuitems)", this.props.menuitems,"selectItemMenu: ",this.props.menuselected);
    return (
      <div className="row">
        <div className="column HeaderMenu">
          <div className="ui basic buttons">{this.renderList()}</div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  // see to `src/reducers/index.js`
  return {
    menuitems: state.menuitems,
    menuselected: state.menuselected
  };
};

export default connect(mapStateToProps, {
  fetchMenuitems, // see to `src/actions/index.js`
  selectItemMenu
})(HeaderMenu);
