import React from 'react';
import ReactDOM from 'react-dom';
import ListWrapper from './listWrapper';
import { ListProvider } from './context';

const div = document.createElement('div');
document.getElementsByTagName('body')[0].append(div);

// eslint-disable-next-line react/no-render-return-value
const provider = ReactDOM.render(
    <ListProvider>
        <ListWrapper />
    </ListProvider>, div,
);

setInterval(() => {
    provider.updateItemsNoChange();
}, 500);

export default provider;

