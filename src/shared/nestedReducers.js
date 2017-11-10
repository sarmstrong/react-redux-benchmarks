import { combineReducers } from 'redux';

import { UPDATE_SUB_LIST } from '../shared/actions';

const listItems = (state = [], { type, data }) => {
    switch (type) {
    case UPDATE_SUB_LIST:
        const { id, parentId, text } = data;
        return Object.assign({}, state, {
            [parentId]: {
                ...state[parentId],
                listItems: {
                    ...state[parentId].listItems,
                    [id]: {
                        ...state[parentId].listItems[id],
                        text
                    }
                }
            }
        });
    default :
        return state;
    }
};

export default combineReducers({
    listItems
});
