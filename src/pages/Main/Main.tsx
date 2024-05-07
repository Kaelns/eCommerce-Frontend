import { useState, useCallback, useEffect, useMemo } from 'react';
import { FormAddAnimal } from '@/components/FormAddAnimal/FormAddAnimal';
import { ListOfAnimals } from '@/components/ListOfAnimals/ListOfAnimals';
import { Modal } from '@/components/ui/Modal/Modal';
import { Button } from '@/components/ui/Button/Button';
import { IAnimals } from '@/data/interface/interface';
import { useAnimals } from '@/hooks/useAnimals/useAnimals';
import { updateObject } from '@/utils/updateObject';
import styles from './Main.module.scss';

// interface IProps {}

export function Main(/* props: IProps */): JSX.Element {
  const { animals, setAnimals } = useAnimals();
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [isModal, setIsModal] = useState(false);

  const animalsLength = useMemo(() => Object.keys(animals).length, [animals]);

  const showDescription = useCallback((): void => {
    setIsShow((isShowState) => !isShowState);
  }, []);

  const changeAnimals = useCallback(
    (animalName: string) => {
      const newId = Object.keys(animals).length + 1;
      const animalObj: IAnimals = {
        id: newId,
        animal: animalName,
        isSleeping: false
      };
      setAnimals(updateObject(animals, animalName, animalObj));
    },
    [animals, setAnimals]
  );

  const handleSelectedAnimal = useCallback((animal: IAnimals['animal']): void => {
    setSelectedAnimal(animal);
  }, []);

  const handleModal = useCallback((): void => {
    setIsModal((prev) => !prev);
  }, []);

  const handleChangeBtn = useCallback((): void => {
    if (selectedAnimal) {
      const animalToUpdate = animals[selectedAnimal];
      const updatedAnimal = updateObject(animalToUpdate, 'isSleeping', !animalToUpdate.isSleeping);
      setAnimals(updateObject(animals, selectedAnimal, updatedAnimal));
    }
  }, [animals, selectedAnimal, setAnimals]);

  return (
    <main className={styles.main}>
      <h1>Hello React</h1>
      <h2>
        Counter: <b>{animalsLength}</b>
      </h2>
      <FormAddAnimal handleOnSubmit={changeAnimals} />
      <ListOfAnimals animalsObj={animals} onClickSelectAnimal={handleSelectedAnimal} />
      <Button onClick={handleChangeBtn}>Change Elem</Button>
      <Button onClick={showDescription}>{isShow ? 'Hide Description' : 'Show Description'}</Button>
      {isShow && <p>Description</p>}
      <Button onClick={handleModal}>Show Modal</Button>
      <Modal show={isModal} onClick={handleModal}>
        <h2>Welcome to modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus esse magnam quasi, hic
          voluptatum sequi similique, odio veritatis corrupti quaerat ullam. Quos alias minus asperiores. At est
          veritatis id.
        </p>
      </Modal>
    </main>
  );
}
