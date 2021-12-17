export class User {
    name:string;
    age: number;
    phone: number;
    password: string;

    
    constructor(User?: any){
      this.name = User.name;
      this.age = User.price;
      this.phone = User.sector;
      this.password = User.password;
    }
}