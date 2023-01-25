import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

// dot size 및 색상 추후 변경예정

const StyledSlider = styled(Slider)`
  display: flex !important;
  justify-content: center;
  width: 100%;
  .slick-list {
    display: flex;
    width: 60rem;
  }
  .slick-track {
    display: flex;
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

  li {
    margin: 0;
    padding: 0;
  }

  .slick-prev {
    display: none;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Image = styled.div`
  width: 60.25rem;
  height: 22rem;
  /* max-width: 100%;
  max-height: 100%; */
`;

const Text = styled.p`
  position: absolute;
  top: 1.2rem;
  left: 2rem;
  font-size: 5rem;
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
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <StyledSlider {...settings}>
      {background.map(el => {
        return (
          <ImgContainer key={el.id}>
            <Image style={{ backgroundColor: `${el.color}` }} />
            <Text>{el.color}</Text>
          </ImgContainer>
        );
      })}
    </StyledSlider>
  );
}

export default React.memo(Carousel);
