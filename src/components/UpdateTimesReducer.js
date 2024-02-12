const UpdateTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE': {
            return state;
        }
        default:
            throw new Error('Unknown action type');
    }
}
export default UpdateTimesReducer;