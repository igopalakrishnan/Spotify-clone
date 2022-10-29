export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQBwAcvtbRREEsBuRorFOXkC20SYvyjzxhv6qxj6V1I0tJGT-bae9RHGjoEBHJDlnLcBAI3xMtAmgC2XkjHfVXKyCRJLVoXUTd9722se2bvKS9gXyJoGFvXNpYt1UR4J1Q_2h6BLRtTnlEwYdd-svdUSGZZ2akp3Dp-JBon9bQwP_8E124VC0BlJg9FmnWxEw69oZSpLRG00e2h2',
};

const reducer = (state, action) => {

    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default:
            return state;
    }
}

export default reducer;