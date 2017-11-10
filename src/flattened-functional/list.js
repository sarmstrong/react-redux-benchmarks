import React from 'react';
import { connect } from 'react-redux';
import ListItem from './listItem';

export const List = props => (
    <ul>
        {props.listItems !== undefined && props.listItems
            .map(key => <ListItem key={key} id={key} />)}
    </ul>

);


const mapStateToProps = state => ({
    listItems: state.listItemIds
});

export default connect(mapStateToProps)(List);
