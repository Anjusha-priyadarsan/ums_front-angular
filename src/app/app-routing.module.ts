import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [{ path: 'users',canActivate:[authGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
{path:"",component:LoginComponent},
{path:"dashboard",canActivate:[authGuard],component:DashboardComponent},{path:"**",redirectTo:""}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
