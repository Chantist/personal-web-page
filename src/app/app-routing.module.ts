import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ HomeComponent} from './home/home.component'
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '**', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },

];

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],

  
})
export class AppRoutingModule { }
