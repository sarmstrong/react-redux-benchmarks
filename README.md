# React Benchmarking

The benchmarking in this demo is to test applications that have a tree like structure. We are using a very basic list structure for our testing:

- Item One
  - Sub Item of One
- Item Two
  - etc . . . .

The goal is to find the most optimal structure for performance. We are testing component structure first, contrasting Functional, standard React Components and PureComponents.

Next we are testing data structure. In the first three examples, the data is nested.
```javascript
{
    listItems: {
            1: {
                text: 'Item One',
                listItems: {
                    4: {
                        text: 'Item One - Sub Item One'
                    },
                    5: {
                        text: 'Item One - Sub Item Two'
                    },
                    6: {
                        text: 'Item One - Sub Item Three'
                    }
                }
            }
        }
}
```

In the last two examples, the data is flattened, and listItems is an Array. Each list item is a connected component and referenced by id in the listItems object.

```javascript
const mapStateToProps = (state, ownProps) => state.listItems[ownProps.id];

export default connect(mapStateToProps)(Item);
```


This is benchmarking two different scenarios.
1) How well an app updates when there is no change in data
2) How well an app updates when there is a change

We have set up five different apps with the following structure

- Functional: Nested data structure with functional components
- Component: Nested data structure with standard React component class
- Pure Component: Nested data structure with Pure Components
- Flattened Functional: Flattened data structure with connected functional components
- Flattened With Pure Components: Flattened data structure with connected pure components
