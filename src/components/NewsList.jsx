import React from 'react';
import axios from 'axios';
import Card from './Card';

// function NewsList({ articleList }) {
//   return (
//     <div>
//       {articleList.map((article) => (
//         <Card
//           title={article.title}
//           url={article.url}
//           description={article.description}
//           image={article.urlToImage}
//           key={article.title}
//         />
//       ))}
//     </div>
//   );
// };

class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      articlesArray: [],
    };
    // this.getArticle = this.getArticle.bind(this);
  }

  componentDidMount() {
    // Send the request
    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=78050e6ed06b44eabff4ee83ec5e7864'
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          articlesArray: data.articles,
        });
      });
  }

  render() {
    const { articlesArray } = this.state;
    return (
      <div>
        <h1>WildNews</h1>
        {articlesArray.map((article) => {
          return (
            <Card
              image={article.urlToImage}
              url={article.url}
              description={article.description}
              title={article.title}
            />
          );
        })}
      </div>
    );
  }
}

export default NewsList;
