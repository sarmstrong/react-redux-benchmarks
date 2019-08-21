import React from 'react';
import { cloneDeep } from 'lodash';
import defaultState from '../shared/defaultFlattenedState';

export const ListContext = React.createContext(cloneDeep(defaultState));

export class ListProvider extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = defaultState;
    }
    updateItemsNoChange() {
        const { listItems } = this.state;
        this.setState({
            listItems: {
                ...listItems,
                4: {
                    ...listItems['4']
                }
            }
        });
    }
    updateItemsWithChange() {
        const { listItems } = this.state;

        this.setState({
            listItems: {
                ...listItems,
                4: {
                    ...listItems['4'],
                    text: `Hello World ${Math.random()}`
                }
            }
        });
    }
    render() {
        const { children } = this.props;
        return (
            <ListContext.Provider value={this.state}>
                {children}
            </ListContext.Provider>
        );
    }
}
