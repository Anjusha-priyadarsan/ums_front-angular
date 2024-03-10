import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GuardService } from '../services/guard.service';
import { ToastService } from '../services/toast.service';

export const authGuard: CanActivateFn = (route, state) => {

// inject guard service

const authStatus=inject(GuardService)

// inject router

const rout=inject(Router)

const tost=inject(ToastService)

if(authStatus.isLoggedIn()){
  return true
}
else{
  tost.showWarning("please login")
  rout.navigateByUrl("")
  return false
}

};
