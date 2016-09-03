/**
 * Created by banhtieu on 8/29/2016.
 */
import * as React from "react";

/**
 * app menu component
 */
class AppMenu extends React.Component<{}, {}> {

  /**
   * render the app menu
   * @returns {XML}
   */
  render() {

    /**
     *
     */
    return (
      <div id="app-menu" className="ui vertical menu">
        <a className="item">
          <i className="block layout icon" />
          <span className="caption">Dashboard</span>
        </a>
        <a className="item">
          <i className="folder icon" />
          <span className="caption">Entity Definitions</span>
        </a>
        <a className="item">
          <i className="cubes icon" />
          <span className="caption">Modules</span>
        </a>
      </div>
    );
  }
}

export default AppMenu;