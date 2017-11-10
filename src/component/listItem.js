/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { List } from './list';

const { Component } = React;

export default class ListItem extends Component {
    render() {
        return (
            <li>
                {this.props.text}
                <List listItems={this.props.listItems} />
            </li>
        );
    }
}

