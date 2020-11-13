import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Col,
} from 'reactstrap';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './ArticlePreview.css';
import articleContext from '../contexts/articleContext';

// Cette fonction crée une Card pour un article
function ArticlePreview({ image, title, url, index, categoryParam }) {
  const { setArticleCategory } = useContext(articleContext);
  const { setArticleUrl } = useContext(articleContext);
  const articleLink = '/article';

  return (
    <Col lg={index % 3 === 0 ? 12 : 6}>
      <Card className="cardMain" inverse>
        <CardImg src={image} alt={title} />
        <CardImgOverlay>
          <CardTitle tag="h4" className="title">
            <a tag={Link} to={articleLink} className="linkColor">
              {title}
            </a>
            <Button
              onClick={() => {
                setArticleCategory(categoryParam);
                setArticleUrl(url);
              }}
              tag={Link}
              to={articleLink}
            >
              Button
            </Button>
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
