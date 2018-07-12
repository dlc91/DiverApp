import {Component} from '@angular/core';
import{Dive} from '../models/dive';

@Component({
selector:'dive',
templateUrl:'../views/dive.component.html'
	})

export class DiverComponent
{
	public dive:Dive;
	public dives:Array<Dive>;
	public columns:string[];

	constructor()
	{
		this.dives = [
			new Dive()
		];

	}

	ngOnInit()
	{
		this.columns=["Country","City","Date"];
	}

}