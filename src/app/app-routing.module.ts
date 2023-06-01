import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './component/edit/edit.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

const routes: Routes = [{
  path:'dashboard', component:DashboardComponent,

  children: [
    // {
    //   path:'dashboard', component:DashboardComponent
    // },
    {
      path:'edit/:id', component:EditComponent
    }

  ]
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
