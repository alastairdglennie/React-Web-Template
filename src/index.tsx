import * as React from 'react';
import {render} from 'react-dom';
import App from './App';

// Since we are using HtmlWebpackPlugin WITHOUT a template,
// we should create our own root node in the body element
// before rendering into it
const RootElementId = 'root';
let root = document.createElement('div');
root.id = RootElementId;
root.setAttribute('height', '100%');
document.body.appendChild(root);
document.title = 'my website';

render(
    <App />,
    document.getElementById(RootElementId)
);