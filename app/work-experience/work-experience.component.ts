import { Component, OnInit } from '@angular/core';
import { WorkExperiencesService } from "../services/work-experiences.service";


@Component({
  selector: 'workExperience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  myWorkingExperiences: any[];
  constructor(private workService : WorkExperiencesService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.workService.getList().subscribe(x => {
      this.myWorkingExperiences = x;
      console.log(x);
    });
  }

}
