import React, { useContext, useMemo } from 'react';
import { ListContext } from './context';
import List from './list';

const ListItem = (props) => {
    const { listItems } = useContext(ListContext);
    const item = listItems[props.id];
    return useMemo(() => (<li>
        {item.text}
        <List listItemIds={item.listItems} />
    </li>), [item]);
};

export default React.memo(ListItem);

