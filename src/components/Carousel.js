import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

// dot size 및 색상 추후 변경예정

const StyledSlider = styled(Slider)`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  .slick-track {
    display: flex;
  }
  .slick-list {
    display: flex;
    width: 67.25rem;
    padding: 0px 0.1rem;
  }

  .slick-slide {
    display: flex;
    justify-content: center;
  }
  .slick-dots {
    margin-bottom: 3rem;
  }

  .sl .slick-dots {
    display: flex;
    width: 100px;
    margin: 0;
    padding: 0;
    left: 50%;
    bottom: 10px;
    transform: translate(-50%, -50%);
  }

  .slick-dots li {
    width: 6px;
    height: 6px;
    margin: 0 7px;
  }

  .slick-dots li button {
    width: 6px;
    height: 6px;
  }

  .slick-dots li button:before {
    width: 6px;
    height: 6px;
    color: black;
  }

  li {
    margin: 0;
    padding: 0;
  }
`;

const ImgContainer = styled.div`
  text-align: center;
  border: solid 1 black;
`;

const Image = styled.div`
  width: 60.25rem;
  height: 17.25rem;
  margin: 0 7.5rem;
  /* max-width: 100%;
  max-height: 100%; */
`;

function Carousel() {
  const background = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'red' },
    { id: 3, color: 'pink' },
    { id: 4, color: 'green' },
    { id: 5, color: 'yellow' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <StyledSlider {...settings}>
      {background.map(el => {
        return (
          <ImgContainer key={el.id}>
            <Image style={{ backgroundColor: `${el.color}` }}></Image>
          </ImgContainer>
        );
      })}
    </StyledSlider>
  );
}

export default Carousel;
