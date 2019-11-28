import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { FindaliftComponent } from './findalift/findalift.component';
import { ErikComponent } from './erik/erik.component';
import { LasseComponent } from './lasse/lasse.component';
import { RegistertripComponent } from './registertrip/registertrip.component';
import { AuthGuard } from './auth/auth.guard';
import { UseradminComponent } from './useradmin/useradmin.component';
import { Useradminguard } from './useradmin.guard';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent, children:[
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'contact', component: ContactComponent
    // {path: 'erik', component, ErikComponent},
    // {path: 'lasse', component, LasseComponent},
  },
  ]},

  
  {path: 'portal', component: PortalComponent, /*canActivate: [AuthGuard],*/children:[
    {path: 'findalift', component: FindaliftComponent},
    {path: 'registertrip', component: RegistertripComponent},
    {path: 'useradmin', component: UseradminComponent, /*canActivate: [Useradminguard]*/}
  ]},



  { path: '**', component: PageNotFoundComponent }
 ];
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
