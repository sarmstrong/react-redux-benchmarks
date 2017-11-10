import React from 'react';
import { List } from './list';

const ListItem = props => (
    <li>
        {props.text}
        <List listItems={props.listItems} />
    </li>
);

export default ListItem;
