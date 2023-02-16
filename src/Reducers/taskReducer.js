export default function taskReducer(state, action) {
    switch (action.type) {
        case 'removeCompletedTask': {
            return state.filter(i => i.text !== action.chosenTask);
        }
        case 'deleteItem': {
            return state.filter(i => i.id !== action.id);
        }
        case 'selectItem': {
            return action.item;
        }
        case 'addItem': {
            return [
                ...state,
                {
                    id: Date.now(),
                    text: action.text,
                    isSelected: false,
                }
            ]
        }
    }
}