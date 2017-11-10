/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import ListItem from './listItem';

const { Component } = React;

export class List extends Component {
    render() {
        return (
            <ul>
                {this.props.listItems !== undefined && Object.keys(this.props.listItems)
                    .map(key => <ListItem key={key} {...this.props.listItems[key]} />)}
            </ul>
        );
    }
}


const mapStateToProps = state => ({
    listItems: state.listItems
});

export default connect(mapStateToProps)(List);
