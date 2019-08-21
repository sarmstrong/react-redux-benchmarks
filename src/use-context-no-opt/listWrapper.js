import React, { useContext } from 'react';
import { ListContext } from './context';
import List from './list';

const ListItem = () => {
    const { listItemIds } = useContext(ListContext);
    return (<List listItemIds={listItemIds} />);
};

export default ListItem;
