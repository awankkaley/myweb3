import React from 'react';
import DetailStore from './detailStore';
import ModalStore from './modalStore';

export const stores = {
  detailStore: new DetailStore(),
  modalStore: new ModalStore(),
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
