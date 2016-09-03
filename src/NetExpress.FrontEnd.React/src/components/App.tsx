import * as React from 'react';
import NavigationBar from './NavigationBar'
import AppMenu from './AppMenu'
import UIStore from '../actions/UIStore'
import {Unsubscribe} from "redux";
import {SideBarState} from "../actions/UIStore";

/**
 * the app container
 */
export default class App extends React.Component<{}, SideBarState> {

  /**
   * the default state
   * @type {any}
   */
  state = UIStore.sideBar.getState();

  /**
   * the subscription
   */
  unsubscribe: Unsubscribe;

  /**
   * the component did mount
   */
  componentDidMount() {

    this.unsubscribe = UIStore.sideBar.subscribe(
       () => this.setState(UIStore.sideBar.getState())
    )
  }

  /**
   * component will unmount
   */
  componentWillUnmount() {
    this.unsubscribe();
  }

  /**
   * render the components
   * @returns {XML}
   */
  render() {
    return (
      <div className={this.state.collapsed ? "collapsed" : ""}>
        <NavigationBar/>
        <div className="app-container">
          <AppMenu />
          <div className="app-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
