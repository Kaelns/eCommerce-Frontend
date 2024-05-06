import { useCallback, useEffect, useState } from 'react';
import styles from './App.module.scss';
import { ListOfAnimals } from './components/ListOfAnimals/ListOfAnimals';
import { useAnimals } from './hooks/useAnimals/useAnimals';
import { Form } from './components/Form/Form';
import { Button } from './components/ui/Button/Button';
import { updateObject } from '@/utils/updateObject';
import { IAnimals } from '@/data/interface/interface';
import { Modal } from '@/components/Modal/Modal';

export function App(): JSX.Element {
  const { animals, setAnimals } = useAnimals();
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [isModal, setIsModal] = useState(false);

  const showDescription = useCallback((): void => {
    setIsShow((isShowState) => !isShowState);
  }, []);

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

  useEffect(() => {
    console.log('function recreated');
  }, [handleSelectedAnimal]);

  return (
    <div className={styles.App}>
      <main className={styles['App-header']}>
        <h1>Hello React</h1>
        <h2>
          Counter: <b>{Object.keys(animals).length}</b>
        </h2>
        <Form />
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
    </div>
  );
}
