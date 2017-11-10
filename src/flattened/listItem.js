import React from 'react';
import { connect } from 'react-redux';
import { List } from './list';

const { PureComponent } = React;
class Item extends PureComponent {
    render() {
        return (
            <li>
                {this.props.text}
                <List listItems={this.props.listItems} />
            </li>
        );
    }
}

const mapStateToProps = (state, ownProps) => state.listItems[ownProps.id];

export default connect(mapStateToProps)(Item);
