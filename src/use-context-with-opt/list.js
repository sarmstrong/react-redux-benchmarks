import React from 'react';
import Item from './listItem';

const List = (props) => {
    const { listItemIds } = props;
    return (
        <ul>
            {listItemIds !== undefined && listItemIds
                .map(key => <Item key={key} id={key} />)}
        </ul>
    );
};

export default React.memo(List);
