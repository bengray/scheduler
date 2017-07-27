import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore(
    {
        items: [
            {
                time: "9",
                displayName: "9:00",
                scheduled: "false",
                name: ""
            },
            {
                time: "10",
                displayName: "10:00",
                scheduled: "false",
                name: ""

            },
            {
                time: "11",
                displayName: "11:00",
                scheduled: "false",
                name: ""
            },
            {
                time: "12",
                displayName: "12:00",
                scheduled: "false",
                name: ""
            },
            {
                time: "1",
                displayName: "1:00",
                scheduled: "false",
                name: ""
            },
            {
                time: "2",
                displayName: "2:00",
                scheduled: "false",
                name: ""
            },
            {
                time: "3",
                displayName: "3:00",
                scheduled: "false",
                name: ""
            },
            {
                time: "4",
                displayName: "4:00",
                scheduled: "false",
                name: ""
            },
            {
                time: "5",
                displayName: "5:00",
                scheduled: "false",
                name: ""
            },
        ]
    }
); // Initial state

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
