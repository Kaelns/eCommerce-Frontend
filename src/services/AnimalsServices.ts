import { IAnimalsObj } from '@/data/interface/interface';

export class AnimalsServices {
  static async getAll(): Promise<IAnimalsObj> {
    const response: Response = await fetch('animals.json');
    const animalsObj: IAnimalsObj = await response.json();
    return animalsObj;
  }
}
