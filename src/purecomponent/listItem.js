import React from 'react';
import { List } from './list';

const { PureComponent } = React;

export default class ListItem extends PureComponent {
    render() {
        return (
            <li>
                {this.props.text}
                <List listItems={this.props.listItems} />
            </li>
        );
    }
}

