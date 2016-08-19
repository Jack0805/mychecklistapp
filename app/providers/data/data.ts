import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class Data {

  storage: Storage;

  constructor(){
    this.storage = new Storage(SqlStorage, {name:'checklist'});
  }

  getData(): Promise<any> {
    return this.storage.get('checklists');  
  }

  save(data): void {

    let saveData = [];

    //Remove observables
    data.forEach((checklist) => {
      saveData.push({
        title: checklist.title,
        items: checklist.items
      });
    });

    let newData = JSON.stringify(saveData);
    this.storage.set('checklists', newData);
  }
}