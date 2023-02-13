import React, { useState } from 'react';
import styled from 'styled-components';
import { Label, StyledDeleteBtn } from '../common/PublicStyle';
import { CgClose } from 'react-icons/cg';
import { useRecoilState } from 'recoil';
import { hashArrState } from '../../atoms/atoms';

interface StyledHashtagInputType {
  backColor?: string;
  textAlign?: string;
  borderRadius?: string;
  textColor?: string;
}

const StyledHashtagGroup = styled.div`
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
`;

const StyledHashtagInputGroup = styled.ul`
  display: flex;
  width: 35.5rem;
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

const StyledHashtagInput = styled.input<StyledHashtagInputType>`
  width: 86%;
  padding: 0.5rem;
  border: none;
  outline: none;
  background-color: ${props => props.backColor};
  text-align: ${props => props.textAlign};
  border-radius: ${props => props.borderRadius};
  &:active {
    border-color: #f8d3f5;
  }
  &::placeholder {
    color: ${props => props.textColor};
  }
`;

const HashtagInput = () => {
  const [hashtag, setHashtag] = useState<string>('');
  const [hashArr, setHashArr] = useRecoilState<string[]>(hashArrState);

  const catchHashtag = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHashtag('#' + event.target.value.replace(/ /gi, '_'));
  };

  const pressEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      if (
        hashArr.length >= 3 ||
        hashArr.includes('#' + event.currentTarget.value.replace(/ /gi, '_')) ||
        hashtag.length > 16
      ) {
        return;
      } else {
        setHashArr([...hashArr, hashtag]);
        event.currentTarget.value = '';
      }
    }
  };

  const deleteHashtag = (event: React.MouseEvent<HTMLElement>) => {
    const arr = hashArr.filter(
      element => element !== event.currentTarget.innerText,
    );
    setHashArr(arr);
  };

  return (
    <StyledHashtagGroup>
      <Label htmlFor="productName">해시태그</Label>
      <StyledHashtagInputGroup>
        {hashArr.map(item => {
          return (
            <StyledHashtagWrap key={item} onClick={deleteHashtag}>
              {item}
              <StyledDeleteBtn top="-6px" right="-8px">
                <CgClose width="1.5rem" />
              </StyledDeleteBtn>
            </StyledHashtagWrap>
          );
        })}

        {hashArr.length < 3 ? (
          <StyledHashtagInput
            type="text"
            placeholder="15자 이하로 입력해주세요! (최대 3개)"
            onChange={catchHashtag}
            onKeyDown={pressEnterKey}
          />
        ) : (
          <StyledHashtagInput
            disabled
            backColor="tomato"
            textColor="white"
            textAlign="center"
            borderRadius="5px"
            type="text"
            placeholder="3개를 다 채우셨어요!"
            onChange={catchHashtag}
            onKeyDown={pressEnterKey}
          />
        )}
      </StyledHashtagInputGroup>
    </StyledHashtagGroup>
  );
};

export default HashtagInput;

// props로 해결
