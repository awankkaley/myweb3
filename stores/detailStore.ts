import { makeAutoObservable } from 'mobx';
import { Item } from 'types/storeTypes';

export default class DetailStore {
  item?: Item;


  constructor() {
    makeAutoObservable(this);
  }

  setItem= (value: Item) => {
    this.item = value;
  };

  
}
