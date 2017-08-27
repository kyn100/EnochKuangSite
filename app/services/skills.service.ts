import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SkillsService {

  skillSet: any[];
   
  constructor(private db: AngularFireDatabase) {     
  }

  getList() {  
    return this.db.list('/Skill');
  }
}
