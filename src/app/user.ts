export class User {
    constructor(
        public username:string,
        public login:string, 
        public html_url:string,
        public bio: string,
        public location:string, 
        public public_repos:number,
        public avatar_url:string,
        public created_at:Date){
   
     }  
}
