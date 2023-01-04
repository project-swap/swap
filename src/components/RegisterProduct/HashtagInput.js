import React from 'react';
import styled from 'styled-components';
import { Label } from '../common/PublicStyle';

const StyledHashtagGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40rem;
  height: 4rem;
`;

const StyledHashtagWrap = styled.div``;

const StyledHashtagInput = styled.input`
  width: 34.5rem;
  border: 1px solid black;
  padding: 0.5rem;
  border-radius: 0.8rem;
  &:active {
    border-color: #f8d3f5;
  }
`;

const HashtagInput = () => {
  // const [hashtag, setHashtag] = useState('');
  // const [hashArr, setHashArr] = useState([]);

  const onChange = event => {
    console.log(event.target.value);
  };

  return (
    <StyledHashtagGroup>
      <Label htmlFor="productName">해시태그</Label>
      <StyledHashtagWrap />
      <StyledHashtagInput
        type="text"
        placeholder="해시태그"
        onChange={onChange}
      />
    </StyledHashtagGroup>
  );
};

export default HashtagInput;
