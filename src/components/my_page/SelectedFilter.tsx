import React from 'react';
import styled from 'styled-components';

const SelectFilter = styled.select`
  width: 6rem;
  height: 2rem;
  position: relative;
  left: 7rem;
  bottom: 0.5rem;
`;

const selectMonth = [
  { id: 1, text: '1개월' },
  { id: 2, text: '3개월' },
  { id: 3, text: '6개월' },
];

const SelectedFilter = () => {
  return (
    <SelectFilter>
      {selectMonth.map(selected => (
        <option key={selected.id} className="default" value="">
          {selected.text}
        </option>
      ))}
    </SelectFilter>
  );
};

export default SelectedFilter;
