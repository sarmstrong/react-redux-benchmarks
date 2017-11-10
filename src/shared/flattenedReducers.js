import { combineReducers } from 'redux';

import { UPDATE_LIST_ITEM } from '../shared/flattenedActions';

const listItems = (state = [], { type, data }) => {
    switch (type) {
    // eslint-disable-next-line no-case-declarations
    case UPDATE_LIST_ITEM:
        const { id, text } = data;
        return Object.assign({}, state, {
            [id]: {
                ...state[id],
                text
            }
        });
    default :
        return state;
    }
};

const listItemIds = (state = []) => state;

export default combineReducers({
    listItems,
    listItemIds
});
