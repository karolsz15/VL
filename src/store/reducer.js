const initialState = {
    listOfCharacters: {},
    testMessage: 'hello from Redux',
    error: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_ERROR':
        return {
          ...state,
          error: true
        };
      // no default
    }
    return state;
  };
  
  export default reducer;