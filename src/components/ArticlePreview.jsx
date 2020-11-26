import PropTypes from 'prop-types';
import { Card, CardImg, CardImgOverlay, CardTitle, Col } from 'reactstrap';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ArticlePreview.css';
import categorieContext from '../contexts/categorieContext';

// Cette fonction crée une Card pour un article
function ArticlePreview({ image, title, url, index, categoryParam }) {
  const { setArticleCategory } = useContext(categorieContext);
  const { setArticleUrl } = useContext(categorieContext);
  const articleLink = '/article';

  return (
    <Col lg={index % 3 === 0 ? 12 : 6}>
      <Card className="cardMain" inverse>
        <CardImg
          src={image}
          alt={title}
          onError={(e) => {
            e.target.src = 'https://i.imgur.com/G9czG28.png';
          }}
        />
        <CardImgOverlay>
          <CardTitle tag="h4" className="title">
            <Link
              to={articleLink}
              onClick={() => {
                setArticleCategory(categoryParam);
                setArticleUrl(url);
              }}
              className="linkColor"
            >
              {title}
            </Link>
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </Col>
  );
}

// Declaration des propTypes par défaut.
ArticlePreview.defaultProps = {
  url: '',
  title: '',
  image: '',
};

// Declaration des propTypes
// Il faudra les passer en isRiquired et gérer les null
ArticlePreview.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  categoryParam: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default ArticlePreview;
