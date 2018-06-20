# scoped-action-generator
A function to automatically create Redux scoped actions and creators

[![Maintainability](https://api.codeclimate.com/v1/badges/40c271cc6c2d37d8f72d/maintainability)](https://codeclimate.com/github/dariorinaldi/scoped-action-generator/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/40c271cc6c2d37d8f72d/test_coverage)](https://codeclimate.com/github/dariorinaldi/scoped-action-generator/test_coverage)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)

<!-- ## Installation

**npm:**
`npm i -s scoped-action-generator`

**yarn:**
`yarn add scoped-action-generator`

**unpkg:**
`https://unpkg.com/scoped-action-generator` -->

## Usage

```javascript
import generateActions from "generate-scoped-action";

const actions = await generateActions('src/features');

```

The function gets two arguments, a path where to search for features folders and an array of feature folder names.
In each of these subfolder it looks for an `actions.js` file.
This file must be formatted like a key-value list of actions, like this:

```javascript
const actions = {
    ACTION_1: 'ACTION_1',
    ACTION_2: 'ACTION_2',
    ACTION_3: 'ACTION_3',
    ACTION_4: 'ACTION_4',
    ...
};
```
**This function returns a Promise object.**

## What does it do?
1. Iterates through the feature folders using them as keys for the returned object and as scope for the types
2. Creates a SUCCESS and an ERROR actions for each original action.
3. Each action gets wrapped in a new object with 2 keys: 
    - type: the string type of the action, already scoped with the feature name
    - create: an action creator which returns a typical Redux action structure
    ```javascript
    {type: 'scope/action', payload: {}}
    ```



Let's see an example. 
Given a typical DUCK folder structure like the following:

```
src
- features
- - Feature1
- - - actions.js
- - Feature2
- - - actions.js
...
```
we can call the function like this:

```javascript
const actions = generateActions("./features", ["Feature1", "Feature2"]);
```
The result we'll obtain will be:

```javascript
const scopedActions = {
    FEATURE1: { 
        ACTION_1: { type: 'FEATURE1/ACTION_1', create: (payload) => ({type: 'FEATURE1/ACTION_1', payload })},
        ACTION_2: { type: 'FEATURE1/ACTION_2', create: (payload) => ({type: 'FEATURE1/ACTION_2', payload })},
    },
    FEATURE2: { 
        ACTION_3: { type: 'FEATURE2/ACTION_3', create: (payload) => ({type: 'FEATURE2/ACTION_3', payload })},
        ACTION_4: { type: 'FEATURE2/ACTION_4', create: (payload) => ({type: 'FEATURE2/ACTION_4', payload })},
    },
}

// USAGE:
scopedActions.FEATURE1.ACTION_1.type; // FEATURE1/ACTION_1
scopedActions.FEATURE1.ACTION_1.create(payload); // {type: 'FEATURE1/ACTION_1', payload }

```

