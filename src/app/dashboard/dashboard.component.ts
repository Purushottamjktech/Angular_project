import { Component, OnInit } from '@angular/core';
import { TechServiceService } from '../appService/tech-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: any = [];


  constructor(private _msgService:TechServiceService) { }
  countApprove: number = 0;
  countPending: number = 0;
  countRejected: number = 0;

  ngOnInit(): void {
    this.items = this._msgService.items;
    this.items.forEach((element: any) => {
      if (element.status.includes("Approved")) this.countApprove += 1;
      if (element.status.includes("Pending")) this.countPending += 1;
      if (element.status.includes("Rejected")) this.countRejected += 1;

    });
  }

}
