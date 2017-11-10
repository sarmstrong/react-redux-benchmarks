export const UPDATE_SUB_LIST = 'UPDATE_SUB_LIST';

export const updateSubList = (id, parentId, text = 'My New Text') => ({
    type: UPDATE_SUB_LIST,
    data: {
        id,
        parentId,
        text
    }
});
