const initState = {
  scroll: null,
  menuOpen: false,
};

const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SETSCROLL':
      return { ...state, scroll: payload };
    case 'TOGGLEMENU':
      return { ...state, menuOpen: !state.menuOpen };
    default:
      return state;
  }
};

export default appReducer;
