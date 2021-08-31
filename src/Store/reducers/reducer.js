const initialState = {
    showMyEmail: true,
    myEmail: ''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_SHOWMY_EMAIL':
            return {
                ...state,
                showMyEmail: !state.showMyEmail
            }
        default:
            return state
    }
}

