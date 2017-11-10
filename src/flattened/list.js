import React from 'react';
import { connect } from 'react-redux';
import ListItem from './listItem';

const { PureComponent } = React;

export class List extends PureComponent {
    render() {
        return (
            <ul>
                {this.props.listItems !== undefined && this.props.listItems
                    .map(key => <ListItem key={key} id={key} />)}
            </ul>
        );
    }
}


const mapStateToProps = state => ({
    listItems: state.listItemIds
});

export default connect(mapStateToProps)(List);
