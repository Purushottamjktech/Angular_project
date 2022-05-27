import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class TechServiceService {
  url = 'https://angularproject-45ba6-default-rtdb.asia-southeast1.firebasedatabase.app/Pheonix.json';
  constructor(private httpinstance:HttpClient) { }

  saveProduct(items:any[]){
    // return this.httpinstance.post(this.url, items)
    return this.httpinstance.put(this.url, items)

  }

  fetchProducts(){
    return this.httpinstance.get(this.url)
  }

  messageAlert(){
    alert("Hi, i am working to develop an Angular Application");
  }

  fetchItems(leavetype:string,leaveDays:number){
    this.httpinstance.post('https://angularproject-45ba6-default-rtdb.asia-southeast1.firebasedatabase.app/leaveSaction.json', {
      name:this.items[0].name,
      type:leavetype,
      days:leaveDays,

    }).subscribe(x =>{

    });
  }

  getItem(){
    this.httpinstance.get('https://angularproject-45ba6-default-rtdb.asia-southeast1.firebasedatabase.app/leaveSaction.json')
    .pipe(map((data:any) =>{
      const leaveLogs =[];
      for(const key in data){
      if(data.hasOwnProperty(key)){
        leaveLogs.push(data[key])
      //  console.log(k)
      //  console.log("sunny")

      }
      }
    }))
    .subscribe(
      p =>{
        console.log(p);
      }
    )
  }

  items = [{
    
    id: 1,  
    name:'purushottam kumar',

    jobtitle:' senior Full Stack Developer',

    city:'berlin',

    connection:'very strong',

    status:'Approved'

  },

  {
    id: 2,  

  name:'pratap',

  jobtitle:'Tech Lead',

  city:'jaipur',

  connection:'Good',

  status:'Pending'

  },



  {
    id: 3,  

    name:' Thomas',

    jobtitle:'Designer',

    city:'lucknow',

    connection:'Good',

    status:'Pending'

  },

  
  {

    id: 4,  

    name:'transformer',

    jobtitle:' backend Developer',

    city:'pune',

    connection:'average',

    status:'Approved'

  },
  {
    id: 5,  

    name:'naveen',

    jobtitle:'project lead',

    city:'Decepticorn',

    connection:'strong',

    status:'Approved'

  },

  

  {
    id:6,
    name:'Sunny',

    jobtitle:'proffesor',

    city:'tokyo',

    connection:'Very Strong',

    status:'Approved'

  }];
  

}
