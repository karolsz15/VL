const initialState = {
    listOfCharacters: {},
    testMessage: 'hello from Redux'
  };
  
  const reducer = (state = initialState, action) => {
    // switch (action.type) {
    //   case 'INPUT_CHANGED':
    //     return {
    //       ...state,
    //       searchQuery: action.input,
    //       showListOfUsers: false,
    //     };
    //   // no default
    // }
    return state;
  };
  
  export default reducer;