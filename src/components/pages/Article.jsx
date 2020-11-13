import { useContext, useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

import Axios from 'axios';
import { apiUrl, apiKey } from '../../api';
import articleContext from '../../contexts/articleContext';

const Article = () => {
  const { articleCategory, articleUrl } = useContext(articleContext);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    Axios.get(
      `${apiUrl}&pageSize=10&category=${articleCategory}&apiKey=${apiKey}`
    ).then((responses) => {
      const post = responses.data.articles.filter((item) => {
        return item.url === articleUrl;
      });
      setArticle(post);
    });
  }, []);

  const articleCard = article.map((item) => {
    return (
      <>
        <Card>
          <CardImg top width="100%" src={item.urlToImage} alt={item.title} />
          <CardBody>
            <CardTitle tag="h5">{item.title}</CardTitle>
            <CardText>{item.content} </CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
      </>
    );
  });

  return <>{articleCard}</>;
};

export default Article;
