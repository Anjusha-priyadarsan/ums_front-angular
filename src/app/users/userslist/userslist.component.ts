import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService/user.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {

  userList:any=[]
  userName:string=""
  filterData:any=""
  sortData:string=""
  p: number = 1;


  constructor(private us:UserService){}


  ngOnInit():void{
   this.getUser()
   
  }

  changeSortData(){
    this.sortData="sort"

  }
  changeFilterData(data:any){
    this.filterData=data

  }

  getUser(){
    this.us.getUser().subscribe((users:any)=>{

      this.userList=users
      

    })
  }

  removeUser(id:any){
      this.us.deleteUser(id).subscribe((result:any)=>{
        alert('user removed')
        this.getUser()
      })
  }

  convertPdf(){
    let pdf=new jsPDF()
      // seting heading for table
      let head=[["User Id", "Name","Email","Status"]]
      // setting body [{},{},...] convert to [[],[],...]
      let body:any=[]
      this.userList.forEach((i:any)=>{
        body.push([i.id,i.name,i.email,i.status==1?'Active':'Inactive'])
      })
      pdf.setFontSize(16)
      // heading and position of heaing respective of xand y axis
      pdf.text("User Directory",10,10)

      // table generate

      autoTable(pdf,{head,body})

      // open in new window

      pdf.output('dataurlnewwindow')

      // auto download

      pdf.save('UsersData.pdf')
    
  }


}
