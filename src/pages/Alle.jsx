import React, { useState, useEffect } from 'react';
import styles from './Alle.module.scss';
import { Article1 } from '../components/Article1/Article1';
import { ArticlesGrid } from '../components/ArticlesGrid/ArticlesGrid';
import { SixthAndSeventhArticles } from '../components/SixthAndSeventhArticles/SixthAndSeventhArticles';
import { EighthAndNinthArticles } from '../components/EighthAndNinthArticles/EighthAndNinthArticles';

const spaceId = 'flg8gitdieko';
const accessToken = 'dCaJbHxLjlKL0r1Hzx6z9zSMr7zKzjF5tgXYkyfuEjc';
const environment = 'master';
const contentType = 'article';

const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries?access_token=${accessToken}&content_type=${contentType}&include=1`;

const getImageUrl = (imageId, includes) => {
  const asset = includes?.Asset?.find((asset) => asset.sys.id === imageId);
  return asset ? `https:${asset.fields.file.url}` : null;
};

export const Alle = () => {
  const [articles, setArticles] = useState([]);
  const [includes, setIncludes] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.items);
        setIncludes(data.includes); 
      })
      .catch((error) => {
        console.error('Error fetching Contentful data:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  const article1 = articles[0]; 
  const remainingArticles = articles.slice(1, 5); 

  return (
    <div className={styles.allePage}>
      {article1 && <Article1 article={article1} includes={includes} />}

      {remainingArticles.length > 0 && (
        <ArticlesGrid articles={remainingArticles} includes={includes} />
      )}

      <SixthAndSeventhArticles 
        article={articles[5]} 
        imageUrl={getImageUrl(articles[5]?.fields.image?.sys.id, includes)} 
      />
      <SixthAndSeventhArticles 
        article={articles[6]} 
        imageUrl={getImageUrl(articles[6]?.fields.image?.sys.id, includes)} 
        reverse 
      />

      {articles.length >= 9 && (
        <EighthAndNinthArticles
          article1={articles[7]}  
          article2={articles[8]}  
          includes={includes}
        />
      )}
    </div>
  );
};