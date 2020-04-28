import React from 'react';
import './App.css';
import Bugs from './components/Bugs';
import configureStore from './store/configureStore';
import StoreContext from './contexts/storeContext';

const store = configureStore();

function App() {
  return (
    // The Provider component has a prop called value
    // where we specify the object that we want to provide to our component tree
    // with this every component below the provider component will get the store object
    // no matter how deep in the component tree the target component (in this case <Bugs/>) may be
    <StoreContext.Provider value={store}>
      <Bugs />
    </StoreContext.Provider>
  );
}

export default App;
