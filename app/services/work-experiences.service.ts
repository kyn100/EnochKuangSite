import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class WorkExperiencesService {
  workExperiences: any[];

  constructor(private db: AngularFireDatabase) {     
  }

  getValue() : string{
    return 'something from saver...';
  }  

  getList(){
    return this.db.list('/WorkExperience');
  }

}
