import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Loader from './Common/Loader';
import { Provider } from 'react-redux';
import { persistor, sagaMiddleware, store } from './Platform/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import rootSaga from './Platform/sagas';

// ReactDOM.render(<App />, document.getElementById('root'));
sagaMiddleware.run(rootSaga);

ReactDOM.render(<BrowserRouter>
    <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
