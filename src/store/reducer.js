const initialState = {
    charactersArray: [],
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
      case 'SET_DATA':
        return {
          ...state,
          charactersArray: action.data
        };
      // no default
    }
    return state;
  };
  
  export default reducer;