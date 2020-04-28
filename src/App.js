import React from 'react';
import './App.css';
import Bugs from './components/Bugs';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import BugsList from './components/BugsList';

const store = configureStore();

function App() {
  return (
    // The Provider component has a prop called value
    // where we specify the object that we want to provide to our component tree
    // with this every component below the provider component will get the store object
    // no matter how deep in the component tree the target component (in this case <Bugs/>) may be
    <Provider store={store}>
      <BugsList />
      <hr />
      <Bugs />
    </Provider>
  );
}

export default App;
