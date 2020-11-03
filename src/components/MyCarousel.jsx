import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const MyCarousel = ({ articlesArray }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === articlesArray.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? articlesArray.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = articlesArray.map((articles) => {
    return (
      <CarouselItem
        className="custom-tag"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={articles.title}
      >
        <img
          // Add style as CSS in JS by Raph
          style={{ width: '100%' }}
          src={articles.urlToImage}
          alt={articles.title}
        />
        <CarouselCaption
          // captionText={articles.title}
          captionHeader={articles.title}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      {/* CSS in JS by Raph */}
      <style>
        {`.custom-tag {
          height: 400px;
          text-shadow: 1px 1px 3px #545454;
        }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={articlesArray}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

MyCarousel.defaultProps = {
  articlesArray: '',
};

MyCarousel.propTypes = {
  articlesArray: PropTypes.string,
};

export default MyCarousel;
