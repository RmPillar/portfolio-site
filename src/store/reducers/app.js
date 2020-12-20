const initState = {
  scroll: null,
};

const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'SETSCROLL':
      return { ...state, scroll: payload };
    default:
      return state;
  }
};

export default appReducer;
