import { useState, useCallback, useMemo } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { FormAddAnimal } from '@/components/FormAddAnimal/FormAddAnimal';
import { ListOfAnimals } from '@/components/ListOfAnimals/ListOfAnimals';
import { Modal } from '@/components/ui/Modal/Modal';
import { Button } from '@/components/ui/Button/Button';
import { IAnimals } from '@/data/interface/interface';
import { useAnimals } from '@/hooks/useAnimals/useAnimals';
import { updateObject } from '@/utils/updateObject';
import { Loader } from '@/components/ui/Loader/Loader';
import { ROUTES } from '@/data/enum/routes.enum';

export function Main(): JSX.Element {
  const { animals, setAnimals, isLoading } = useAnimals();
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [isModal, setIsModal] = useState(false);

  const { animal: animalPage } = useParams();
  const navigate = useNavigate();

  const animalsLength = useMemo(() => Object.keys(animals).length, [animals]);

  const setNewAnimal = useCallback(
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

  const handleDescription = useCallback((): void => {
    setIsShow((isShowState) => !isShowState);
  }, []);

  const handleSelectedAnimal = useCallback((animal: IAnimals['animal']): void => {
    setSelectedAnimal(animal);
  }, []);

  const handleModal = useCallback((): void => {
    setIsModal((prev) => !prev);
  }, []);

  const handleErrorNavigate = (): void => {
    navigate(ROUTES.ERROR);
  };

  const handleChangeBtn = useCallback((): void => {
    if (selectedAnimal) {
      const animalToUpdate = animals[selectedAnimal];
      const updatedAnimal = updateObject(animalToUpdate, 'isSleeping', !animalToUpdate.isSleeping);
      setAnimals(updateObject(animals, selectedAnimal, updatedAnimal));
    }
  }, [animals, selectedAnimal, setAnimals]);

  return (
    <>
      <h1>Hello React</h1>
      <h2>
        Counter: <b>{animalsLength}</b>
      </h2>
      <FormAddAnimal handleOnSubmit={setNewAnimal} />
      {isLoading ? <Loader /> : <ListOfAnimals animalsObj={animals} onClickSelectAnimal={handleSelectedAnimal} />}
      <Button onClick={handleChangeBtn}>Change Elem</Button>
      <Button onClick={handleDescription}>{isShow ? 'Hide Description' : 'Show Description'}</Button>
      {isShow && <p>Description</p>}
      <Button onClick={handleModal}>Show Modal</Button>
      <Button onClick={handleErrorNavigate}>Go to non existent page</Button>
      <Modal show={isModal} toggleShow={handleModal}>
        <h2>{animalPage}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores necessitatibus esse magnam quasi, hic
          voluptatum sequi similique, odio veritatis corrupti quaerat ullam. Quos alias minus asperiores. At est
          veritatis id.
        </p>
      </Modal>
    </>
  );
}
