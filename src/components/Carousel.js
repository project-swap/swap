import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const ImgContainer = styled.div`
  width: 60.25rem;
  height: 17.25rem;
  border: solid 1 black;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
`;

function Carousel() {
  const background = [
    { id: 1, color: 'blue' },
    { id: 2, color: 'red' },
    { id: 3, color: 'pink' },
    { id: 4, color: 'green' },
    { id: 5, color: 'yello' },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {background.map(el => {
          return (
            <ImgContainer key={el.id}>
              <Image style={{ backgroundColor: `${el.color}` }}></Image>
            </ImgContainer>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
