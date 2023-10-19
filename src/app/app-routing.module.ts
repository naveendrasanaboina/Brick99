import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
  {path:'index',component:IndexComponent},
  {path:'about',component:AboutComponent},
  {path:'user-panel',component:UserPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
