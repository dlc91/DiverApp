import {Component} from '@angular/core';
import{User} from '../models/user';

@Component({
selector:'user',
templateUrl:'../views/user.component.html'
	})

export class UserComponent
{
	public user:User;
	public users:Array<User>;

	constructor()
	{
		this.users = [
			new User('danivk','Daniel','Lopez','danilocastillo91@gmail.com','1234','ADMIN',new Date(),new Date())
		];

	}

	ngOnInit()
	{
		
	}

}