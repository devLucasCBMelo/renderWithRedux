import { legacy_createStore as createStore, combineReducers } from 'redux';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import counterReducer from '../redux/reducer/counterReducer';
import { RootState } from '../App';

function renderWithRedux(
  component: JSX.Element,
  state: RootState | undefined = undefined,
  store = createStore(combineReducers({ counterReducer }), state)
) {
  const user = userEvent.setup();
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
    user,
  };
}

export default renderWithRedux;
