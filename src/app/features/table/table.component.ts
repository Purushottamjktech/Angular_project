import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  StatusResult:boolean = true;

 items = [{

    name:'Purushottam Kumar',

    jobtitle:'Full Stack Developer',

    city:'Patna',

    connection:'very strong',

    status:'Approved'

  },

  {

  name:'Sunny',

  jobtitle:'Tech Lead',

  city:'Banglore',

  connection:'Good',

  status:'Pending'

  },



  {

    name:'thomas',

    jobtitle:'Designer',

    city:'sydney',

    connection:'Good',

    status:'Pending'

  },

  
  {

    name:'Jonny',

    jobtitle:' backend Developer',

    city:'sydney',

    connection:'average',

    status:'Approved'

  },

  {

    name:'vikash',

    jobtitle:'HR',

    city:'Pune',

    connection:' weak',

    status:'Pending'

  }];

  constructor() { }

  ngOnInit(): void {
  }

}
