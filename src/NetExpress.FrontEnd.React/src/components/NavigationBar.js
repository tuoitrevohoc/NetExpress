import React from "react";
import UIStore from "../actions/UIStore"

/**
 * the navigation bar
 */
class NavigationBar extends React.Component {

  /**
   * toggle menu clicked
   */
  toggleMenuClicked() {

    UIStore.sideBar.dispatch({
      type: "ToggleLeftMenu"
    })
  }

  /**
   * render the navigation bar
   * @returns {XML}
   */
  render() {
    return (
      <div className="ui top fixed menu">
        <a className="brand item">
          <i className="home icon" />
        </a>
        <a className="item" onClick={e => this.toggleMenuClicked()}>
            <i className="content icon" />
        </a>
        <div className="item">
            <div id="search-box" className="ui icon input">
                <i className="search icon" />
                <input type="text" placeholder="Search..." />
            </div>
        </div>
      </div>
    )
  }
}

export default NavigationBar;