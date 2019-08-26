const isAddingRedcer = (state = false, action) => {
    if (action.type === "TOGGLE_ISADING") return !state
    return state
}
export default isAddingRedcer;
