import React from 'react';
import Item from './listItem';


export default (props) => {
    const { listItemIds } = props;
    return (
        <ul>
            {listItemIds !== undefined && listItemIds
                .map(key => <Item key={key} id={key} />)}
        </ul>
    );
};
