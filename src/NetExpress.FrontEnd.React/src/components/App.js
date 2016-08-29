import React from 'react';
import NavigationBar from './NavigationBar'
import AppMenu from './AppMenu'
import UIActions from '../actions/UIActions'

class App extends React.Component {

  /**
   * the app state
   * @type {{collapsed: boolean}}
   */
  state = {
    collapsed: false
  };

  /**
   * the component did mount
   */
  componentDidMount() {
    this.unsubscribe = UIActions.leftMenuCollapsed.listen((collapsed) => {
      this.setState({
        collapsed: collapsed
      })
    })
  }

  /**
   * component will unmount
   */
  componentWillUnmount() {
    this.unsubscribe()
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

export default App;
