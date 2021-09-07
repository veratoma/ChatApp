const initialState = {
    showMyEmail: true,
    myEmail: '',
    showName: false,
    name: 'Default'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOWMY_EMAIL':
            return {
                ...state,
                showMyEmail: !state.showMyEmail
            }
        case 'CHANGE_NAME': 
            return {
              ...state,
              name: action.payload
            }
        default:
            return state
    }
}

