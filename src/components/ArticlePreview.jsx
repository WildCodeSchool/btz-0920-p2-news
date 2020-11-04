import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Col,
} from 'reactstrap';
import './Card.css';

// Cette fonction crée une Card pour un article
function ArticlePreview({ image, title, url, date, source, index }) {
  const articleDate = new Date(date);
  return (
    <Col lg={index % 3 === 0 ? 12 : 6}>
      <Card inverse>
        <CardImg width="100%" src={image} alt={title} />
        <CardImgOverlay>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardText>
            <small className="text-muted">
              De : {source} &nbsp;&nbsp;&nbsp; Publié le :
              {articleDate.toLocaleDateString()}
            </small>
          </CardText>
          <Button href={url}>go to article</Button>
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
  date: '',
  source: '',
};

// Declaration des propTypes
// Il faudra les passer en isRiquired et gérer les null
ArticlePreview.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
  index: PropTypes.number.isRequired,
};

export default ArticlePreview;
