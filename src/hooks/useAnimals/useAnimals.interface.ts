import { IAnimalsObj } from '../../data/interface/interface';

export default interface IUseAnimals {
  animals: IAnimalsObj;
  setAnimals: React.Dispatch<React.SetStateAction<IAnimalsObj>>;
  error: string;
  isLoading: boolean;
}
