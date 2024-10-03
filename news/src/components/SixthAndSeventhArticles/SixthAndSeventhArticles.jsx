import React from 'react';
import styles from './SixthAndSeventhArticles.module.scss';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { useNavigate } from 'react-router-dom'; 

export const SixthAndSeventhArticles = ({ article, imageUrl, reverse }) => {
  const navigate = useNavigate(); 

  if (!article || !imageUrl) {
    console.log('Article or imageUrl is missing:', article, imageUrl);
    return null;
  }

  const content = article.fields.content; 
  const plainText = documentToPlainTextString(content); 
  const description = plainText.length > 100 ? plainText.slice(0, 100) + '...' : plainText;

  const handleReadMore = () => {
    navigate(`/article/${article.sys.id}`); 
  };

  return (
    <div className={`${styles.article} ${reverse ? styles.reverse : ''}`}>
      {imageUrl && <img src={imageUrl} alt={article.fields.headline} />}
      <div className={styles.articleContent}>
        <h2>{article.fields.headline}</h2>
        <p>{description}</p>
        <div className={styles.metaInfo}>
          {new Date(article.fields.dateAndTime).toLocaleDateString()} | {article.fields.author}
        </div>
        <div className={styles.readMore} onClick={handleReadMore}>
          Read more
        </div>
      </div>
    </div>
  );
};
