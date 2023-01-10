import React, { useState } from 'react';
import styled from 'styled-components';
import { Label } from '../common/PublicStyle';
import { CgClose } from 'react-icons/cg';

const StyledHashtagGroup = styled.div`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const StyledHashtagInputGroup = styled.ul`
  display: flex;
  width: 36rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid black;
`;

const StyledHashtagWrap = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
  margin: 0 0.4rem;
  background-color: #f9f9f9;
  width: 50%;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1rem;
`;

const StyledHashtagInput = styled.input`
  width: 86%;
  padding: 0.5rem;
  border: none;
  outline: none;
  &:active {
    border-color: #f8d3f5;
  }
`;

const StyledDeleteBtn = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  border: 1px solid black;
  font-size: 0.8rem;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  line-height: 0.9rem;
  background-color: white;
  border-radius: 50%;
  :hover {
    background-color: #e88e6b;
    cursor: pointer;
  }
  :active {
    background-color: #d76c6c;
  }
`;

const HashtagInput = () => {
  const [hashtag, setHashtag] = useState('');
  const [hashArr, setHashArr] = useState([]);

  const catchHashtag = event => {
    setHashtag('#' + event.target.value.replaceAll(' ', '_'));
  };

  const pressEnterKey = event => {
    if (event.keyCode === 13) {
      if (
        hashArr.length >= 3 ||
        hashArr.includes('#' + event.target.value.replaceAll(' ', '_'))
      ) {
        return;
      }
      if (hashtag.length <= 16) {
        setHashArr([...hashArr, hashtag]);
        event.target.value = '';
      }
    }
  };

  const deleteHashtag = event => {
    const arr = hashArr.filter(
      e => e !== event.target.parentElement.parentElement.innerText,
    );
    setHashArr(arr);
  };

  return (
    <StyledHashtagGroup>
      <Label htmlFor="productName">해시태그</Label>
      <StyledHashtagInputGroup>
        {hashArr.map(item => {
          return (
            <StyledHashtagWrap key={item}>
              {item}
              <StyledDeleteBtn>
                <CgClose onClick={deleteHashtag} width="1.5rem" />
              </StyledDeleteBtn>
            </StyledHashtagWrap>
          );
        })}

        <StyledHashtagInput
          type="text"
          placeholder="15자 이하로 입력해주세요! (최대 3개)"
          onChange={catchHashtag}
          onKeyDown={pressEnterKey}
        />
      </StyledHashtagInputGroup>
    </StyledHashtagGroup>
  );
};

export default HashtagInput;
