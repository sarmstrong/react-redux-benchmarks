import React from 'react';
import { connect } from 'react-redux';
import ListItem from './listItem';

export const List = props => (
    <ul>
        {props.listItems !== undefined && Object.keys(props.listItems)
            .map(key => <ListItem key={key} {...props.listItems[key]} />)}
    </ul>
);

const mapStateToProps = state => ({
    listItems: state.listItems
});

export default connect(mapStateToProps)(List);
