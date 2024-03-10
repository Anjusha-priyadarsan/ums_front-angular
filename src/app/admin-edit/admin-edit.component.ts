import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  admin:any={}
  fileData:any=""
  @Output() onAdminChange=new EventEmitter()
  @Input() data:any
  

  constructor(private as:AdminService,private tost:ToastService){}
  profilePic:any="https://i.postimg.cc/nLfXKwqB/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail-removebg-pr.png"
  editClicked:boolean=false
  ngOnInit(): void {
    this.as.loginApi().subscribe((result:any)=>{
      this.admin=(result[0]);
      if(this.admin.profile){
        this.profilePic=this.admin.profile
      }
      
    })
    }
    editClick(){  
        this.editClicked=true

  }
  cancel(){
    this.editClicked=false

  }

  getFile(event:any){
    let file=event.target.files[0]

    // url conversion
    let fr= new FileReader()

    // convert
    fr.readAsDataURL(file)

    // store the coverted url
    fr.onload=(event:any)=>{
      console.log(event.target.result);

      // preview

      this.profilePic=event.target.result
      this.admin.profile=this.profilePic

      console.log(this.admin);
      
      
    }
  }


  editData(){
    this.as.updateAdmin(this.admin).subscribe((result:any)=>{
      // update local storage with new username

      console.log(result.img);
      

      var index=result.email.indexOf('@')
          localStorage.setItem("UserName",result.email.slice(0,index));


          this.onAdminChange.emit(result.email.slice(0,index))
      this.cancel()
      this.tost.showSuccess("profile updated")

    })
  }
}

 

