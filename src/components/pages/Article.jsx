import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardImg,
  Button,
} from 'reactstrap';
import Axios from 'axios';
import { apiUrl, apiKey } from '../../api';
import categorieContext from '../../contexts/categorieContext';

const Article = () => {
  const { articleCategory, articleUrl } = useContext(categorieContext);
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
  }, [articleCategory]);

  const articleCard = article.map((item) => {
    return (
      <>
        <Card>
          <CardImg
            top
            width="100%"
            src={item.urlToImage}
            key={item.title}
            alt={item.title}
            onError={(e) => {
              e.target.src = 'https://i.imgur.com/lN0xhY3.jpg';
            }}
          />
          <CardBody>
            <Button tag={Link} to="/" color="link">
              retourner aux articles
            </Button>
            <CardText>
              <small className="text-muted">{item.source.name}</small>
            </CardText>
            <CardTitle tag="h5">{item.title}</CardTitle>
            <CardText>
              {item.content}
              <p> </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                quo dolor magnam molestiae incidunt labore perspiciatis sequi,
                officia quis soluta repudiandae deleniti aut accusamus quae? Ex
                omnis totam asperiores animi blanditiis vero repellat nisi
                aliquam error aut sunt consequatur architecto voluptatibus nobis
                dolorum, enim quasi porro. Ex id debitis saepe nostrum dolor?
                Laboriosam aspernatur necessitatibus, expedita, corporis nostrum
                tempora asperiores numquam natus hic illo cumque impedit
                obcaecati incidunt nulla. Quos quo corporis alias doloremque
                dignissimos quis laborum quibusdam officiis minima.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                cupiditate ad aspernatur, veniam consequuntur dolor numquam
                inventore ex dolorem quod!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
                quo dolor magnam molestiae incidunt labore perspiciatis sequi,
                officia quis soluta repudiandae deleniti aut accusamus quae? Ex
                omnis totam asperiores animi blanditiis vero repellat nisi
                aliquam error aut sunt consequatur architecto voluptatibus nobis
                dolorum, enim quasi porro. Ex id debitis saepe nostrum dolor?
                Laboriosam aspernatur necessitatibus, expedita, corporis nostrum
                tempora asperiores numquam natus hic illo cumque impedit
                obcaecati incidunt nulla. Quos quo corporis alias doloremque
                dignissimos quis laborum quibusdam officiis minima.
              </p>
            </CardText>
          </CardBody>
        </Card>
      </>
    );
  });

  return <>{articleCard}</>;
};

export default Article;
