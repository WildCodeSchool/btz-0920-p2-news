import PropTypes from 'prop-types';
import { Card, CardImg, CardImgOverlay, CardTitle, Col } from 'reactstrap';
import './ArticlePreview.css';

// Cette fonction crée une Card pour un article
function ArticlePreview({ image, title, url, index }) {
  return (
    <Col lg={index % 3 === 0 ? 12 : 6}>
      <Card className="cardMain" inverse>
        <CardImg src={image} alt={title} />
        <CardImgOverlay>
          <CardTitle tag="h4" className="title">
            <a href={url}>{title}</a>
          </CardTitle>
        </CardImgOverlay>
      </Card>
      {/* <div className="card">
        <div className="header">
          <img className="image" src={image} alt={title} />
          <a className="title" href={url}>
            {title}
          </a>
          <span className="detail">
            De : {source} &nbsp;&nbsp;&nbsp; Publié le :
            {articleDate.toLocaleDateString()}
          </span>
        </div>
      </div> */}
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
  index: PropTypes.number.isRequired,
};

export default ArticlePreview;
