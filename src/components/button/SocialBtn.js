import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const SocialButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13rem;
  height: 2.6rem;
  margin: 0.8rem 0;
  padding: 0 1rem;
  background-color: ${props => props.background};
  color: ${props => props.color};
  font-size: 1rem;
  border: none;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
  outline: none;
  cursor: pointer;
`;

const SocialBtn = ({ background, color, icon, name }) => {
  const currentURL = window.location.href.split('/');
  const pathName = currentURL[currentURL.length - 1];
  return (
    <SocialButton background={background} color={color}>
      {icon}
      <span>
        {pathName} with {name}
      </span>
    </SocialButton>
  );
};

SocialBtn.propTypes = {
  background: propTypes.string,
  color: propTypes.string,
  icon: propTypes.any,
  name: propTypes.string,
};

export default SocialBtn;
