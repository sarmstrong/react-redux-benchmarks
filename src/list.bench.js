
import flattenedStore from './flattened/app';
import contextProvider from './use-context-no-opt/app';
import contextProviderOptimized from './use-context-with-opt/app';
import { updateListItem } from './shared/flattenedActions';

suite('No Text Change', () => {
    benchmark('Flattened Pure Component - Update sub list', () => {
        flattenedStore.dispatch(updateListItem(4));
    });
    benchmark('Use Context - No Optimization - Update sub list', () => {
        contextProvider.updateItemsNoChange();
    });
    benchmark('Use Context - Optimized - Update sub list', () => {
        contextProviderOptimized.updateItemsNoChange();
    });
});

suite('With Change', () => {
    benchmark('Flattened Pure Component - Update sub list', () => {
        flattenedStore.dispatch(updateListItem(4, `Hello World ${Math.random()}`));
    });
    benchmark('Use Context - No Optimization - Update sub list', () => {
        contextProvider.updateItemsWithChange();
    });
    benchmark('Use Context - Optimized - Update sub list', () => {
        contextProviderOptimized.updateItemsWithChange();
    });
});
