import React, { useContext, useMemo } from 'react';
import { ListContext } from './context';
import List from './list';

const ListItem = () => {
    const { listItemIds } = useContext(ListContext);
    return useMemo(() => (<List listItemIds={listItemIds} />), [listItemIds]);
};

export default React.memo(ListItem);
