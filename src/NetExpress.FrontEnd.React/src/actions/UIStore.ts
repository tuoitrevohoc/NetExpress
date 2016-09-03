
import {createStore, Action} from 'redux';

/**
 *
 * @type {{ToggleLeftMenu: string}}
 */
const Actions = {
  ToggleLeftMenu: "ToggleLeftMenu"
};

/**
 * side bar status
 */
export interface SideBarState {
  collapsed: boolean;
}

/**
 *
 * @param state
 * @param action
 */
function sideBarReducer(state: SideBarState = { collapsed: false }, action: Action): SideBarState {

  switch (action.type) {
    case Actions.ToggleLeftMenu:
      return {
        collapsed: !state.collapsed
      };

    default:
      return state;
  }

}

/**
 * the stores
 * @type {{sideBar: *, menu: *, actions: {ToggleLeftMenu: string}}}
 */
const UIStore = {
  sideBar: createStore(sideBarReducer),
  actions: Actions
};

export default UIStore;