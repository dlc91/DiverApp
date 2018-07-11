export class User{
	constructor(
        public username:string,
        public name:string,
		public lastname:string,
		public email:string,
        public password:string,
        public role:string,
        public birthdate:Date,
        public lastConnect:Date

	){}
}