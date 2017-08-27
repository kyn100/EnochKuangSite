import { Component, NgModule, OnInit } from '@angular/core';
import { AgmCoreModule} from '@agm/core';


@Component({
  selector: 'workLocationMap',
  templateUrl: './work-location-map.component.html',
  styleUrls: ['./work-location-map.component.css']
})
export class WorkLocationMapComponent implements OnInit {

	//title: string = 'My Working places';
	zoom: number = 5;
  lat: number = 36.2090;
	lng: number = -90.291305;

	//workLocationLatLng: any[] = [ { name: 'Merrill Lynch',  lat: 30.256862, lng: -81.549526 },  { name: 'Allstate',  lat: 30.254965, lng: -81.438774 }, { name: 'AmeriQuest', lat: 39.936632, lng: -75.031352 }];
	markers: any[] = [
	  {
		  lat: 30.256862,
		  lng: -81.549526,
		  label: 'Merrill Lynch',
		  draggable: false
	  },
	  {
		  lat: 30.254965,
		  lng: -81.438774,
		  label: 'Allstate',
		  draggable: false
	  },
	  {
		  lat: 39.936632,
		  lng: -75.031352,
		  label: 'AmeriQuest',
		  draggable: true
	  }
  ]


  constructor() { }

  ngOnInit() {
  }

}

interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}