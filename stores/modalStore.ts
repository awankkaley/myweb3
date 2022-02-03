import { makeAutoObservable } from 'mobx';

export default class ModalStore {
  open?: boolean;


  constructor() {
    makeAutoObservable(this);
  }

  setOpen= (value: boolean) => {
    this.open = value;
  };

  
}
