import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path:"home" ,component:HomeComponent},

  {
    path: 'Note',
    children: [
      {path:"project" ,component:ProjectComponent},
        
      {path:"task" ,component:TaskComponent},

        {path:"task/:id" ,component:TaskComponent},

      

      

    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
