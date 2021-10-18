import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectCreateComponent } from './components/project/project-create/project-create.component';
import { ProjectEditComponent } from './components/project/project-edit/project-edit.component';
import { ProjectViewComponent } from './components/project/project-view/project-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectViewComponent },
  { path: 'project-create', component: ProjectCreateComponent },
  { path: 'project-edit/:id', component: ProjectEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
