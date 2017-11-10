import functionalStore from './functional/app';
import componentStore from './component/app';
import pureStore from './purecomponent/app';
import flattenedStore from './flattened/app';
import flattenedFunctionalStore from './flattened-functional/app';
import { updateSubList } from './shared/actions';
import { updateListItem } from './shared/flattenedActions';

suite('No Text Change', () => {
    benchmark('Functional - Update sub list', () => {
        functionalStore.dispatch(updateSubList(4, 1));
    });
    benchmark('Component - Update sub list', () => {
        componentStore.dispatch(updateSubList(4, 1));
    });
    benchmark('Pure Component - Update sub list', () => {
        pureStore.dispatch(updateSubList(4, 1));
    });
    benchmark('Flattened Functional Component - Update sub list', () => {
        flattenedFunctionalStore.dispatch(updateListItem(4));
    });
    benchmark('Flattened Pure Component - Update sub list', () => {
        flattenedStore.dispatch(updateListItem(4));
    });
});

suite('With Change', () => {
    benchmark('Functional - Update sub list', () => {
        functionalStore.dispatch(updateSubList(4, 1, `Hello World ${Math.random()}`));
    });
    benchmark('Component - Update sub list', () => {
        componentStore.dispatch(updateSubList(4, 1, `Hello World ${Math.random()}`));
    });
    benchmark('Pure Component - Update sub list', () => {
        pureStore.dispatch(updateSubList(4, 1, `Hello World ${Math.random()}`));
    });
    benchmark('Flattened Functional Component - Update sub list', () => {
        flattenedFunctionalStore.dispatch(updateListItem(4, `Hello World ${Math.random()}`));
    });
    benchmark('Flattened Pure Component - Update sub list', () => {
        flattenedStore.dispatch(updateListItem(4, `Hello World ${Math.random()}`));
    });
});
