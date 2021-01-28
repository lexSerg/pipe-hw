import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserPipe } from './pipes/user.pipe';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [UsersComponent, UserPipe],
  imports: [
    CommonModule, 
    HttpClientModule,  
  ],
  exports: [UsersComponent]
})
export class UserModule { }
