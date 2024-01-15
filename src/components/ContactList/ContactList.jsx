import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs';
import css from './ContactList.module.css';
import { useId } from 'react';

export const ContactList = ({ value, onDelete }) => {
  const nameFieldId = useId();

  const handleDeleteClick = name => {
    // console.log('id:', name);
    onDelete(name);
  };

  return (
    <div>
      {value.map(({ name, number }, id) => (
        <div key={id}>
          <p>
            <BsFillPersonFill className={css.myIcon} size="20" />
            {name}
          </p>
          <p>
            <BsFillTelephoneFill className={css.myIcon} size="16" />
            {number}
          </p>
          <button onClick={() => handleDeleteClick(name)} id={nameFieldId}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
