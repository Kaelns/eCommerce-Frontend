import { memo, useCallback } from 'react';
import styles from './ListOfAnimals.module.scss';
import { IAnimals, IAnimalsObj } from '@/data/interface/interface';
import { Button } from '@/components/ui/Button/Button';
import { List } from '@/components/ui/List/List';
import { ListItem } from '@/components/ui/ListItem/ListItem';

interface IListOfAnimalsProps {
  animalsObj: IAnimalsObj;
  onClickSelectAnimal: (animal: IAnimals['animal']) => void;
}

const ListOfAnimals = memo(({ animalsObj, onClickSelectAnimal }: IListOfAnimalsProps): JSX.Element => {
  const animalsKeys = Object.values(animalsObj);

  const renderItem = useCallback(
    (animalObj: IAnimals) => {
      const classNameIsSleeping = animalObj.isSleeping ? styles.sleeping : '';
      return (
        <ListItem key={animalObj.id} className={`${classNameIsSleeping} ${styles.list__item}`}>
          {animalObj.animal}
          <Button onClick={() => onClickSelectAnimal(animalObj.animal)}>Select animal</Button>
        </ListItem>
      );
    },
    [onClickSelectAnimal]
  );

  return <List items={animalsKeys} renderItem={renderItem} className={styles.list} />;
});

ListOfAnimals.displayName = 'ListOfAnimals';

export { ListOfAnimals };
