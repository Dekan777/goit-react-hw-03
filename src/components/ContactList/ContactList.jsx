import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import css from './ContactList.module.css';
export const ContactList = ({ value }) => {
  return (
    <div>
      {value.map(({ id, name, number }) => (
        <div key={id}>
          <div>
            <p>
              <BsFillPersonFill className={css.myIcon} size="20" />
              {name}
            </p>
            <p>
              <BsFillTelephoneFill className={css.myIcon} size="16" />
              {number}
            </p>
          </div>

          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};
