import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, Store as ReduxStore } from 'redux';
import reducers, { initialState } from './reducers';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

const dev: boolean = process.env.NODE_ENV !== 'production';

const { composeWithDevTools } = dev
  ? require('redux-devtools-extension')
  : require('redux-devtools-extension/logOnlyInProduction');

export type Store = ReduxStore<typeof initialState>;

const makeStore = (state = initialState): Store => {
  const middlewares = [thunkMiddleware];
  return createStore(
    reducers,
    state,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
