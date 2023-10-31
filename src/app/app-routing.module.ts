import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'user-panel',component:UserPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
