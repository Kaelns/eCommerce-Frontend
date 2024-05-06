import React, { memo, useState } from 'react';

const Form = memo((): JSX.Element => {
  const [value, setValue] = useState('');

  function handleSubmit(event: React.FormEvent): void {
    event.preventDefault();
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>): void {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleInput} />
      <div>{value}</div>
    </form>
  );
});

Form.displayName = 'Form';

export { Form };
