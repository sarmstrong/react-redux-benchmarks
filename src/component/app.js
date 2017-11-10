import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { cloneDeep } from 'lodash';
import app from '../shared/nestedReducers';
import defaultState from '../shared/defaultNestedState';
import WrappedList from './list';
import { updateSubList } from '../shared/actions';

const store = createStore(app, cloneDeep(defaultState));

const div = document.createElement('div');
document.getElementsByTagName('body')[0].append(div);

ReactDOM.render(
    <Provider store={store}>
        <WrappedList />
    </Provider>, div,
);

store.dispatch(updateSubList(4, 1));

export default store;
