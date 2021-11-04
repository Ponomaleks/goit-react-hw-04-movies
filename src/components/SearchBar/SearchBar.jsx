import { useState } from 'react';
// import s from './SearchBar.module.css';

export default function Input({ onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim('') !== '') {
      onSubmit(value);
    } else return;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        label="Enter movie name"
        onChange={e => {
          setValue(e.target.value);
        }}
      ></input>
      <button>Search</button>
    </form>
  );
}
