import { Component, OnInit, Input } from '@angular/core';
import { SkillsService } from "../services/skills.service";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input() type: string = 'bar';
  @Input() data: any;

  // chart: any;
 
  // data:any;
  // data = {
  //   labels: ["January", "February", "March", "April", "May", "June", "July"],
  //   datasets: [
  //     {
  //       label: "My Skills",
  //       data: [15, 15, 10, 8, 7, 16, 4],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.9)',
  //         'rgba(54, 162, 235, 0.9)',
  //         'rgba(255, 206, 86, 0.9)',
  //         'rgba(75, 192, 192, 0.9)',
  //         'rgba(153, 102, 255, 0.9)',
  //         'rgba(255, 159, 64, 0.9)',
  //         'rgba(255, 99, 132, 0.9)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //         'rgba(255,99,132,1)'
  //     ],
  //       borderWidth: 1
  //     }
  //   ]
  // };
  
  //skills: any[];
  constructor(private skillService : SkillsService) { 
    this.getList();
    console.log(this.data);
  }

  getList() {
    let newResult = new Object(); 
    return this.skillService.getList().subscribe(x => { 
      let label = new Array();
      let totYear = new Array();
      for (let y of x){
        let totalYear = new Date().getFullYear() - y.Year;
        totYear.push(totalYear);
        y['TotalYear'] = totalYear;  
        label.push(y.Lang);     
      }  
      
      newResult['labels'] = label;
      let backgroundColor = new Array();
      let borderColor = new Array();

      let allColor = ['#1abc9c','#f39c12','#27ae60','#3498db', '#8e44ad', '#2c3e50', '#f1c40f', '#2ecc71', '#7f8c8d', '#d35400', '#1abc9c', '#34495e','#1abc9c','#f39c12','#27ae60','#3498db', '#8e44ad', '#2c3e50', '#f1c40f', '#2ecc71', '#7f8c8d', '#d35400', '#1abc9c', '#34495e'];
      let i = -1;
      for (let item of label){
        // let redColor = Math.ceil(this.getRandomNumber(255,1));
        // let yellowColor = Math.ceil(this.getRandomNumber(255,1));
        // let blueColor = Math.ceil(this.getRandomNumber(255,1));
        i++;
        let c = allColor[i];   
        backgroundColor.push(c);
        borderColor.push(c);
      }
  
      let ds = new Array();
      ds.push({ label: '#Number of Years', data: totYear, backgroundColor:backgroundColor, borderColor:borderColor, borderWidth: 1 });
      newResult['datasets'] = ds;     
      console.log(newResult);  
      this.data = newResult; 
    });  
  }

  @Input() options = {
    responsive: true,
    maintainAspectRatio: false
  };

  ngOnInit() {    
    //this.getList();
  };

  getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  };
}