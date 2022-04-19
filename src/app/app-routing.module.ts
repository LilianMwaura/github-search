import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryComponent } from './repository/repository.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    { path:'users', component: UsersComponent},
    { path: 'repository', component: RepositoryComponent},
    { path: '', redirectTo:"/github", pathMatch:"full"},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
