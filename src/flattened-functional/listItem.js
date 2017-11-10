import React from 'react';
import { connect } from 'react-redux';
import { List } from './list';

const Item = props => (
    <li>
        {props.text}
        <List listItems={props.listItems} />
    </li>
);


const mapStateToProps = (state, ownProps) => state.listItems[ownProps.id];

export default connect(mapStateToProps)(Item);
