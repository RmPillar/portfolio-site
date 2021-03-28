const initState = {
  scroll: null,
  menuOpen: false,
  modal: false,
  project: 0,
};

const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SETSCROLL':
      return { ...state, scroll: payload };
    case 'TOGGLEMENU':
      return { ...state, menuOpen: !state.menuOpen };
    case 'TOGGLEMODAL':
      return { ...state, modal: payload, menuOpen: false };
    case 'SETPROJECT':
      return { ...state, project: payload };
    default:
      return state;
  }
};

export default appReducer;
