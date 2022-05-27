import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { TechServiceService } from 'src/app/appService/tech-service.service';
import { ActivatedRoute } from '@angular/router';
// import { stringify } from 'querystring';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  StatusResult: boolean = true;


  empModalDetails: any = [];
  items: any = [];

  status: boolean = false;



  constructor(public _msgService: TechServiceService, public httpInstance: HttpClient, private Aroute: ActivatedRoute) { }

  modeldata: any = '';
  nameSearch: any = '';
  brand: any

  // countApprove: number = 0;
  // countPending: number = 0;
  // countRejected: number = 0;



  ngOnInit(): void {
    this.items = this._msgService.items;
    // this.items.forEach((element: any) => {
    //   if (element.status.includes("Approved")) this.countApprove += 1;
    //   if (element.status.includes("Pending")) this.countPending += 1;
    //   if (element.status.includes("Rejected")) this.countRejected += 1;

    // });

    this.brand = this.Aroute.snapshot.params['id'];
    console.log(this.brand);



  };

  leavetype = '';
  leaveDays = 0;

  apijson: any = [];

  modelContent(item: any) {
    this.modeldata = item
    alert()
  }
  // console: any.log(removeDuplicates: any = [];items,(item: { name: any; }) => item.name));

  btnClick() {
    this._msgService.messageAlert();
  }
  x(id: number) {
    console.log(id)
    if (id === 0 || isNaN(id)) return;
    this.empModalDetails = this.items.find((e: { id: number; }) => e.id == id);
    console.log(this.empModalDetails);

  }

  gethandler() {
    this._msgService.fetchItems(this.leavetype, this.leaveDays);
    // console.log('clicked');   
  }

  getleaveLogs() {
    this._msgService.getItem();
  }

  onSaveEmployess() {
    this._msgService.saveProduct(this.items).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    )
  }

  onFetchEmployess() {
    this._msgService.fetchProducts().subscribe(
      (response) => {
        const p = JSON.stringify(response)

        console.log(p)
        this.items = JSON.parse(p)
      },
      (err) => console.log(err)
    )

  }

  onApprove(){
    this.status=true;
    console.log(this.status)
  }

  onReject(){
    this.status=false;
    console.log(this.status)

  }

}




