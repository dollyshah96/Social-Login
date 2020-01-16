import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GmailBtn1Component } from './gmail-btn1/gmail-btn1.component';
import { GmailBtn2Component } from './gmail-btn2/gmail-btn2.component';
import { GmailBtn3Component } from './gmail-btn3/gmail-btn3.component';

const routes: Routes = [
  { path: 'option1', component: GmailBtn2Component },
  { path: 'option2', component: GmailBtn1Component },
  { path: 'option3', component: GmailBtn3Component }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
