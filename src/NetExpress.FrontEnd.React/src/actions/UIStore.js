
import { createStore } from 'redux';
/**
 *
 * @param state
 * @param action
 */
function sideBarReducer(state = { collapsed: false }, action) {

  switch (action.type) {
    case "ToggleLeftMenu":
      return {
        collapsed: !state.collapsed
      };

    default:
      return state;
  }

}

const DefaultMenuItems = [];

/**
 * create menu items
 * @param state
 * @param action
 */
function menuReducer(state = { items: DefaultMenuItems}, action) {

}

/**
 * all UIStore
 * @type {{sideBar: *, menu: *}}
 */
const UIStore = {
  sideBar: createStore(sideBarReducer),
  menu: createStore(menuReducer)
};

export default UIStore;