import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import MainContainer from '../../components/common/MainContainer';
import SideBar from '../../components/SideBar';
import profile from '../../assets/logo/android-icon-144x144.png';
import { useForm } from 'react-hook-form';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import { useRecoilState } from 'recoil';
import { profileImage } from '../../atoms/atoms';
import ProfileModal from '../../components/ProfileModal';
import { getAuth, updateProfile } from 'firebase/auth';
import NavBar, { sessionUserData } from '../../components/common/NavBar';

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

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
  justify-content: center;
  align-items: center;
  width: 70rem;
  margin-top: 8rem;
  border: 1px solid black;
`;

const ProfileContainer = styled.section`
  display: flex;
  z-index: 1;
  margin-left: 10rem;
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
  margin-left: 5rem;
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
  left: 33rem;
  bottom: 3.6rem;
  &:hover {
    opacity: 0.7;
  }
`;

const StyleContainer = styled.div`
  input {
    margin-left: 8rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  font-weight: bold;
  color: red;
  margin: -2rem 0 1rem 10rem;
`;

const SuccessMessage = styled.p`
  font-weight: bold;
  color: green;
`;

const NickNameInput = styled.div`
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 2rem;
  font-weight: bold;
`;

interface NickNameProps {
  nickName: string;
}

const Profile = () => {
  const [isOpen, setIsOpen] = useRecoilState(profileImage);
  const userObj = sessionUserData();
  const [nickName, setNickName] = useState(userObj.displayName);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    setValue,
  } = useForm<NickNameProps>({ mode: 'onChange' }); // mode: 'onChange' => 사용자에게 실시간으로 피드백 제공

  const onValid = async ({ nickName }: NickNameProps) => {
    const auth = getAuth();
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: nickName,
      });
      setNickName(nickName);
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setNickName(value);
    setValue('nickName', value);
  };

  const handleIconClick = () => {
    setIsOpen(current => !current);
  };

  return (
    <PageWrap>
      <NavBar />
      <SwapContainer>
        <SideBar />
        <MainContainer>
          <ProfileContainer>
            <img className="profileImage" src={profile} alt="미쭈" />
            {isOpen ? (
              <AiOutlinePlusCircle className="plus" onClick={handleIconClick} />
            ) : (
              <ProfileModal closeEvent={handleIconClick} />
            )}
            <Info>
              <NickNameInput onChange={onChange}>{nickName}</NickNameInput>
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
                    maxLength: 5,
                    pattern: /([0-9a-zA-Z가-힣\x20])/i, //초성 미포함
                  })}
                />
                {errors.nickName?.type === 'pattern' ? (
                  <ErrorMessage>초성은 불가능합니다.</ErrorMessage>
                ) : null}

                <Button type="submit">수정</Button>
                {errors ? (
                  <ErrorMessage>
                    {errors.nickName?.type === 'minLength' ? (
                      <span>최소 2글자 이상 입력해야 합니다.</span>
                    ) : (
                      errors.nickName?.type === 'maxLength' && (
                        <span>닉네임은 최대 5글자입니다.</span>
                      )
                    )}
                  </ErrorMessage>
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
    </PageWrap>
  );
};

export default Profile;
