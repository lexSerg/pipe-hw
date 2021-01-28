import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../models';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(users: IUser[], ...args: unknown[]): string{
    const res : string[] = users.map(value => {
      let {id, name, username, email, phone} = {...value}
      const iter = 
      `<div class="user-iter">
      <p>Id : ${id}</p>
      <p>Name : ${name}</p>
      <p>username : ${username}</p>
      <p>Email : ${email}</p>
      <p>Phone : ${phone}</p>
      </div>`
      return iter;
    })
    return res.join(' ');
  }


}
