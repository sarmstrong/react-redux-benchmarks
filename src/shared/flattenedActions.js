export const UPDATE_LIST_ITEM = 'UPDATE_LIST_ITEM';

export const updateListItem = (id, text = 'My New Text') => ({
    type: UPDATE_LIST_ITEM,
    data: {
        id,
        text
    }
});
