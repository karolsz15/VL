const initialState = {
  charactersArray: [],
  error: false,
  buttonClickedCounter: 1
};
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: true
      };
    case 'SET_DATA':
      let newCharactersArray = [...state.charactersArray, ...action.data]
      return {
        ...state,
        charactersArray: newCharactersArray
      };
      case 'SET_COUNTER':
        let newCounter = state.buttonClickedCounter + 1;
        return {
          ...state,
          buttonClickedCounter: newCounter
        };
    // no default
  }
  return state;
};
  
export default reducer;