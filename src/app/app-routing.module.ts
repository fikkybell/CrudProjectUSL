import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { TableComponent } from './table/table.component';
import { UserComponent } from './user/user.component';
import { ViewPageComponent } from './view-page/view-page.component';

const routes: Routes = [
  {path: '',
   component: UserComponent },
   {path: 'table',
   component: TableComponent },
   {path: 'viewpage/:id',
   component: ViewPageComponent },
   {path: 'detailpage/:id',
   component: DetailPageComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
