import React, { memo, useState } from 'react';
import styles from './FormAddAnimal.module.scss';
import { Button } from '@/components/ui/Button/Button';

interface IProps extends React.FormHTMLAttributes<HTMLFormElement> {
  handleOnSubmit: (animalName: string) => void;
}

const FormAddAnimal = memo(({ handleOnSubmit }: IProps): JSX.Element => {
  const [value, setValue] = useState('');

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
    handleOnSubmit(value);
    console.log(value);
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h4>Add a new animal</h4>
      <input type="text" value={value} onChange={handleInput} />
      <Button isSubmit>Submit</Button>
    </form>
  );
});

FormAddAnimal.displayName = 'Form';

export { FormAddAnimal };
