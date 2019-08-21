import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { cloneDeep } from 'lodash';
import app from '../shared/flattenedReducers';
import defaultState from '../shared/defaultFlattenedState';
import WrappedList from './list';
import { updateListItem } from '../shared/flattenedActions';

const store = createStore(app, cloneDeep(defaultState));

const div = document.createElement('div');
document.getElementsByTagName('body')[0].append(div);

ReactDOM.render(
    <Provider store={store}>
        <WrappedList />
    </Provider>, div,
);

setInterval(() => {
    store.dispatch(updateListItem(4));
}, 300);

export default store;
