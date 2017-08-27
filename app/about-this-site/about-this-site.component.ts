import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'aboutThisSite',
  templateUrl: './about-this-site.component.html',
  styleUrls: ['./about-this-site.component.css']
})
export class AboutThisSiteComponent implements OnInit {

  @Input() type: string = 'pie';
  @Input() data = {
    label: '(%)Time Spent for this site',
    datasets: [{
        data: [30, 30, 20, 10, 5, 5],
        backgroundColor: [     
          'rgba(153, 102, 255, 0.9)',
          'rgba(255, 159, 64, 0.9)',
          'rgba(255, 99, 132, 0.9)',
          'rgba(100, 102, 100, 0.9)',
          'rgba(200, 100, 64, 0.9)',
          'rgba(155, 199, 132, 0.9)'
        ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Angular 4',
        'Web design & CSS',
        'Chartjs',
        'Firebase',
        'testing',
        'Mobile'
    ]
}; 

  constructor() { }

  ngOnInit() {
  }

}
