export class Repos {
    constructor(
        public username:string,
        public html_url:string ,
        public description:string,
        public forks:number,
        public created_at:Date,
        public homepage: string,){
      }
}
