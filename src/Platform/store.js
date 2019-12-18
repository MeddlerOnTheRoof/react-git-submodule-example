import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import SessionStorage from 'redux-persist/lib/storage/session';

import platformReducer from './reducer';
import gadgetReducer from '../Gadgets/reducer';
import widgetReducer from '../Widgets/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
    gadget: gadgetReducer,
    platform: platformReducer,
    widget: widgetReducer
});

const rootReducer = (state, action) => {
    // todo: any high level app wide actions

    return allReducers(state, action);
};

const persistedReducer = persistReducer({
    key: 'root',
    storage: SessionStorage
    // no black or whitelist right now, just let them all through
}, rootReducer);

export const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware
];

const enhancers = middlewares.map(m => (applyMiddleware(m)));

export const store = createStore(persistedReducer, composeEnhancers(...enhancers));

export const persistor = persistStore(store);

export default store;


