const initState = {
  scroll: null,
  page: null,
  modal: false,
};

const appReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case 'OPENMODAL':
      return { ...state, modal: true, page: payload };
    case 'CLOSEMODAL':
      return { ...state, modal: false, page: null };
    default:
      return state;
  }
};

export default appReducer;
