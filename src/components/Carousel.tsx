import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import banner_01 from '../assets/banner/banner_01.jpg';
import banner_02 from '../assets/banner/banner_02.jpg';
import banner_03 from '../assets/banner/banner_03.jpg';

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
  img {
    width: inherit;
    height: inherit;
  }
`;

const Carousel = () => {
  const background = [
    { id: 'swap 시작하기', img: banner_01 },
    { id: 'swap 교환/나눔', img: banner_02 },
    { id: 'swap 커뮤니티', img: banner_03 },
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
            <Image>
              <img src={el.img} alt={el.id} />
            </Image>
          </ImgContainer>
        );
      })}
    </StyledSlider>
  );
};

export default React.memo(Carousel);
