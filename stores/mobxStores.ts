import React from 'react';
import DetailStore from './detailStore';

export const stores = {
  detailStore: new DetailStore(),
};

export const storesContext = React.createContext({
  ...stores,
});

export const StoreProvider = storesContext.Provider;

export const useStores = () => {
  const store = React.useContext(storesContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
};
