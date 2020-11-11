import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const MyCarousel = ({ articlesArray }) => {
  const [articles, setArticles] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    setArticles(
      [...articlesArray].reduce((acc, curr) => {
        return [
          ...acc,
          {
            title: curr.news[0].title,
            urlToImage: curr.news[0].urlToImage,
          },
        ];
      }, [])
    );
  }, [articlesArray]);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === articles.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? articles.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = articles.map((article) => {
    return (
      <CarouselItem
        className="custom-tag"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={article.title}
      >
        <img
          // Add style as CSS in JS by Raph
          style={{ width: '100%' }}
          src={article.urlToImage}
          alt={article.title}
        />
        <CarouselCaption captionText={article.title} />
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
          items={articles}
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

MyCarousel.propTypes = {
  articlesArray: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string,
      news: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          description: PropTypes.string,
          url: PropTypes.string,
          source: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
          }),
        })
      ),
    })
  ).isRequired,
};

export default MyCarousel;
