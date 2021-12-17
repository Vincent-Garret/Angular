export class Property {
    name:string;
    price: number;
    sector: string;
    roomNb: number;
    picture: string;
    description: string;
    keywords: string;
    
    constructor(Property?: any){
      this.name = Property.name;
      this.price = Property.price;
      this.sector = Property.sector;
      this.roomNb = Property.roomNb;
      this.picture = Property.picture;
      this.description = Property.description;
      this.keywords = Property.keywords
    }
}