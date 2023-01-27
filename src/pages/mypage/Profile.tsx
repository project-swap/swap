import React from 'react';
import styled from 'styled-components';
import MainContainer from '../../components/common/MainContainer';
import SideBar from '../../components/SideBar';
import profile from '../../assets/logo/android-icon-144x144.png';
import { useForm } from 'react-hook-form';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { useRecoilState } from 'recoil';
import { profileImage } from '../../atoms/atoms';
import ModalClose from '../../components/ProfileModal';

const Info = styled.section`
  margin-top: 2rem;
  margin-left: 1rem;
  flex-direction: column;
  line-height: 1.5rem;
  h2 {
    font-weight: 600;
  }
`;

const Location = styled.div`
  display: flex;
  margin: 1.5rem 1rem;
  justify-content: space-between;
  h4 {
    font-weight: 600;
    &:hover {
      cursor: pointer;
      opacity: 0.5;
    }
  }
`;

const SwapContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: -40rem auto;
`;

const ProfileContainer = styled.section`
  display: flex;
  z-index: 1;
  margin-left: 1rem;
  .profileImage {
    width: 8rem;
    height: 8rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    z-index: -1;
  }
  > input {
    display: none;
  }
  .plus {
    position: relative;
    top: 7rem;
    right: 2rem;
    width: 2rem;
    height: 2rem;
    color: #5b5656;
    background-color: white;
    border-radius: 1rem;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const InputContainer = styled.section`
  position: relative;
  top: 2rem;
  input {
    display: flex;
    justify-content: center;
    margin: 1rem auto;
    height: 3rem;
    width: 30rem;
  }
`;

const Line = styled.div`
  border: 1px solid black;
  width: 45rem;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  margin-left: 9.5rem;
  position: relative;
  top: -0.5rem;
  font-weight: 600;
`;

const Button = styled.button`
  width: 4rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
  height: 2rem;
  cursor: pointer;
  position: relative;
  left: 35.5rem;
  bottom: 3.6rem;
  &:hover {
    opacity: 0.7;
  }
`;

const StyleContainer = styled.div``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  font-weight: bold;
  color: red;
`;

const SuccessMessage = styled.p`
  font-weight: bold;
  color: green;
`;

interface NickNameProps {
  nickName: string;
}

const Profile = () => {
  const [isOpen, setIsOpen] = useRecoilState(profileImage);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    resetField,
  } = useForm<NickNameProps>({ mode: 'onChange' }); // mode: 'onChange' => 사용자에게 실시간으로 피드백 제공

  const onValid = (nickName: NickNameProps) => {
    alert(JSON.stringify(nickName));
    resetField('nickName');
  };

  const handleIconClick = () => {
    setIsOpen(current => !current);
  };

  return (
    <SwapContainer>
      <SideBar />
      <MainContainer>
        <ProfileContainer>
          <img className="profileImage" src={profile} alt="미쭈" />
          {isOpen ? (
            <AiOutlinePlusCircle className="plus" onClick={handleIconClick} />
          ) : (
            <ModalClose width={30} height={24} onClick={handleIconClick}>
              <label htmlFor="file-input"></label>
            </ModalClose>
          )}
          <Info>
            <h2>박미쭈</h2>
            <h4>팔로잉 59 팔로워 48</h4>
          </Info>
        </ProfileContainer>
        <Location>
          <h4>위치설정</h4>
          <h4>더보기</h4>
        </Location>
        <Line />
        <InputContainer>
          <Form onSubmit={handleSubmit(onValid)}>
            <Label htmlFor="nickname">닉네임</Label>
            <StyleContainer>
              <input
                type="text"
                {...register('nickName', {
                  required: true,
                  minLength: 2,
                  maxLength: 15,
                  pattern: /([^가-힣\x20])/i, //초성 미포함
                })}
              />
              <Button type="submit">수정</Button>
              {errors ? (
                <ErrorMessage>{errors.nickName?.message}</ErrorMessage>
              ) : isSubmitted ? (
                <SuccessMessage>성공적으로 수정했습니다!</SuccessMessage>
              ) : null}
            </StyleContainer>
            <Label htmlFor="email">이메일</Label>
            <StyleContainer>
              <input type="email" defaultValue="noreply@naver.com" disabled />
            </StyleContainer>
            <Label htmlFor="password">비밀번호</Label>
            <StyleContainer>
              <input type="password" defaultValue="xsdasdasdaew" disabled />
            </StyleContainer>
            <Label htmlFor="social">소셜</Label>
            <StyleContainer>
              <input type="text" defaultValue="구글 가입 회원" disabled />
            </StyleContainer>
          </Form>
        </InputContainer>
      </MainContainer>
    </SwapContainer>
  );
};

export default Profile;
