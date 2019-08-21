import React, { useContext } from 'react';
import { ListContext } from './context';
import List from './list';

const ListItem = (props) => {
    const { listItems } = useContext(ListContext);
    const item = listItems[props.id];
    return (<li>
        {item.text}
        <List listItemIds={item.listItems} />
    </li>);
};

export default ListItem;

