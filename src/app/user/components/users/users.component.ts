import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../../models';
import { UsersService } from '../services/users.service';
import { UserPipe } from '../../pipes/user.pipe'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$ : Observable<IUser[]> | undefined;
  constructor(private usersServise : UsersService) { }

  ngOnInit(): void {
    this.users$ = this.usersServise.getUsers();
  }
   
}
