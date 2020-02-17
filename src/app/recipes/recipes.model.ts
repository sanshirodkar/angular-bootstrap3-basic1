export class Recipe{
  public name: string;
  public desc: string;
  public imagePath: string;

  constructor(name: string, desc: string, image: string){
    this.name = name;
    this.desc = desc;
    this.imagePath = image;
  }
}