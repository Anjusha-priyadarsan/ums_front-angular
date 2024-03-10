import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../userService/user.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id:any=""
  userData:any={}

  constructor(private ar:ActivatedRoute,private us:UserService,private rou:Router,private tost:ToastService){}


  ngOnInit(): void {
    // retrieve id from the url
    this.ar.params.subscribe((data:any)=>{
      this.id=data.id
      // call getuserdata methode and pass the id as parameter to display details ofn that particular id
      this.us.getUserData(this.id).subscribe((response:any)=>{

          this.userData=response
          console.log(this.userData);
          

      })
    })
  }

  updateData(){
    this.us.updateUser(this.id,this.userData).subscribe((response:any)=>{
      // console.log(response.name);

      // this.tost.showSuccess(" updated")
      this.tost.showSuccess(`${this.userData.name} Updated successfully`)


      

      this.rou.navigateByUrl("/users")

    })
  }

}
