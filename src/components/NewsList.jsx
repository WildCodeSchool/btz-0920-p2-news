import React from 'react';
import axios from 'axios';
import Card from './Card';
import './MainHome.css';

// Ce composant crée une liste de News provenant de l'API
class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      // Il recoit en state initial un tableau vide pendant la phase de construction
      articlesArray: [],
    };
  }

  // Cette fonction se lance APRES le premier render
  // Une fois le composant construit, componentDidMount est lancé et fait une requête à l'API
  // Les datas sont extraites de la réponse de l'API
  // Data contient un TABLEAU d'articles. On fait un setSate pour remplacer notre tableau vide
  // par ce nouveau tableau issu de la requete
  componentDidMount() {
    // Send the request
    axios
      .get(
        'http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=78050e6ed06b44eabff4ee83ec5e7864'
      )
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        // eslint-disable-next-line no-console
        console.log({ data });
        this.setState({
          articlesArray: data.articles,
        });
      });
  }

  // Render a pour rôle de créer les Cards sur chaque article du tableau d'article articleArray
  // Le premier render s'effectue à vide car dans le state initial, articleArray est vide
  // Une fois que componentDidMount aura récupéré les articles de l'API et MIS A JOUR le state
  // alors un nouveau render s'exécute et les News s'affichent
  render() {
    const { articlesArray } = this.state;
    return (
      <div className="newslist">
        {articlesArray.map((article) => {
          return (
            <Card
              image={article.urlToImage}
              title={article.title}
              url={article.url}
              date={article.publishedAt}
              source={article.source.name}
              description={article.description}
              key={article.title}
            />
          );
        })}
      </div>
    );
  }
}

export default NewsList;
