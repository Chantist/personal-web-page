import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ HomeComponent} from './home/home.component'
import { ProjectsComponent } from './projects/projects.component';
import { MatListModule, MatGridListModule} from '@angular/material';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent
  ],
  imports: [
    MatListModule,
    MatGridListModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],

  
})
export class AppRoutingModule { }
