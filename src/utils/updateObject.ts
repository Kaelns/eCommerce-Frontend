function updateObject<T, P>(object: T, keyToUpdate: keyof T, value: P): T {
  return {
    ...object,
    [keyToUpdate]: value
  };
}

export { updateObject };

// function updateAnimals(animalsObj: IAnimalsObj, animalName: keyof IAnimalsObj): IAnimalsObj {
//   const updatedAnimal = {
//     ...animalsObj[animalName],
//     isSleeping: !animalsObj[animalName].isSleeping
//   };
//   return {
//     ...animalsObj,
//     [animalName]: updatedAnimal
//   };
// }
