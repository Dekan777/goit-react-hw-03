import { BsFillPersonFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
export const ContactList = ({ value }) => {
  return (
    <div>
      {value.map(({ id, name, number }) => (
        <div key={id}>
          <p>
            <BsFillPersonFill />
            {name}
          </p>
          <p>
            <BsFillTelephoneFill />
            {number}
          </p>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};
