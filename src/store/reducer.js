const initialState = {
  charactersArray: [],
  error: false,
  buttonClickedCounter: 1,
  isLoading: false
};
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ERROR':
      return {
        ...state,
        error: true
      };
    case 'SET_DATA':
      const newCharactersArray = [...state.charactersArray, ...action.data]
      return {
        ...state,
        charactersArray: newCharactersArray,
        isLoading: false
      };
      case 'SET_COUNTER':
        const newCounter = state.buttonClickedCounter + 1;
        return {
          ...state,
          buttonClickedCounter: newCounter,
          isLoading: true
        };
    // no default
  }
  return state;
};
  
export default reducer;