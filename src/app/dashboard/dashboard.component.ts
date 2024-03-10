import { Component,OnInit  } from '@angular/core';
import { UserService } from '../users/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selected: Date | null= new Date()
  menuSlide:boolean=true
  employeCount:any=0
  AdminUserName:any=""
  date:any=new Date()

  constructor(private us:UserService,private rout:Router){

  }
  ngOnInit(): void {
    this.us.getUser().subscribe((result:any)=>{

      this.employeCount=result.length

    })
    this.AdminUserName=localStorage.getItem("UserName")
    console.log(this.AdminUserName);
    
  }
 

  menuClick(){
    this.menuSlide=!this.menuSlide
  }
  logout(){
    localStorage.removeItem("UserName")
    this.rout.navigateByUrl("")
  }

  updatedAdmin(event:any){

    this.AdminUserName=event

  }

}


