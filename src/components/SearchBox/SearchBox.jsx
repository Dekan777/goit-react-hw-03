import { useId } from 'react';

export const SearchBox = ({ value, change }) => {
  const id = useId();

  return (
    <div>
      <input type="text" id={id} value={value} onChange={change} />
    </div>
  );
};
