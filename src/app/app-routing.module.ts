import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListJsonPlaceholderComponent } from './components/pages/user-list-json-placeholder/user-list-json-placeholder.component';
import { UserListReqResComponent } from './components/pages/user-list-req-res/user-list-req-res.component';

const routes: Routes = [
  { path: 'jsonplaceholder', component: UserListJsonPlaceholderComponent },
  { path: 'reqres', component: UserListReqResComponent },
  { path: '', redirectTo: '/jsonplaceholder', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
