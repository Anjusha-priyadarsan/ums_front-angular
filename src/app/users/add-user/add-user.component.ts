import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../userService/user.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserFormModel=this.fb.group({

    email:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
    name:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
    status:['',[Validators.required]]

  })
  

  constructor(private fb:FormBuilder,private us:UserService,private tost:ToastService){}


  ngOnInit():void{}

  addUser(){
    var path=this.addUserFormModel.value
    var email=path.email
    var name=path.name
    var status=path.status
    // console.log(email);
    //   console.log(name);
    //   console.log(status);
   if(this.addUserFormModel.valid){


    
    // console.log(email);
    //   console.log(name);
    //   console.log(status);
    this.us.addUser({id:"",name:name,email:email,status:status}).subscribe((data:any)=>{
      console.log(data);
      this.tost.showSuccess(`${data.name} added successfully`)
      // reset the values in the form after user added suucessfully
      this.addUserFormModel.reset()

      
    })

   }
   else{
    alert('inavalid form')
   }
     
   
    
  }


}
