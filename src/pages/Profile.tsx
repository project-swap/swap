import React from 'react';
import styled from 'styled-components';
import MainContainer from '../components/common/MainContainer';
import SideBar from '../components/SideBar';
import profile from '../assets/logo/android-icon-144x144.png';
import { useForm } from 'react-hook-form';

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
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;
    margin-top: 1rem;
  }
`;

const InputContainer = styled.section`
  input {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    margin-bottom: 1rem;
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
  top: 1rem;
  font-weight: 600;
`;

const Button = styled.button`
  width: 4rem;
  background-color: black;
  color: white;
  border-radius: 1rem;
  height: 2rem;
  z-index: 1;
  cursor: pointer;
  position: absolute;
  right: 26rem;
  top: 19rem;
  &:hover {
    opacity: 0.7;
  }
`;

const StyleContainer = styled.div`
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.p`
  font-weight: bold;
  color: red;
`;

interface NickNameProps {
  nickName: string;
}

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    resetField,
  } = useForm<NickNameProps>({ mode: 'onChange' }); //mode: 'onChange' => 사용자에게 실시간으로 피드백 제공

  const onValid = (nickName: NickNameProps) => {
    alert(JSON.stringify(nickName));
    resetField('nickName');
  };

  return (
    <SwapContainer>
      <SideBar />
      <MainContainer>
        <ProfileContainer>
          <img src={profile} alt="미쭈" />
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
                <p>성공적으로 수정했습니다!</p>
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
