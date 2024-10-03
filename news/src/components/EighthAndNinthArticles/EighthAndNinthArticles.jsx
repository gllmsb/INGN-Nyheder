import React from 'react';
import styles from './EighthAndNinthArticles.module.scss';
import { useNavigate } from 'react-router-dom'; 

export const EighthAndNinthArticles = ({ article1, article2, includes }) => {
  const navigate = useNavigate(); 

  const getImageUrl = (imageId) => {
    const asset = includes?.Asset?.find((asset) => asset.sys.id === imageId);
    return asset ? `https:${asset.fields.file.url}` : null;
  };

  const getSlicedDescription = (content) => {
    if (content) {
      const plainText = content; 
      return plainText.length > 100 ? plainText.slice(0, 100) + '...' : plainText;
    }
    return 'No description available...';
  };

  const imageUrl1 = getImageUrl(article1.fields.image?.sys.id);
  const imageUrl2 = getImageUrl(article2.fields.image?.sys.id);
  const description1 = getSlicedDescription(article1.fields.content);
  const description2 = getSlicedDescription(article2.fields.content);

  const handleReadMore1 = () => {
    navigate(`/article/${article1.sys.id}`);
  };

  const handleReadMore2 = () => {
    navigate(`/article/${article2.sys.id}`); 
  };

  return (
    <div className={styles.articlesContainer}>
      <div className={styles.articleCard}>
        <h2>{article1.fields.headline}</h2>
        <div className={styles.metaInfo}>
          {new Date(article1.fields.dateAndTime).toLocaleDateString()} | {article1.fields.author}
        </div>
        <div className={styles.readMore} onClick={handleReadMore1}>Læs mere</div>
        {imageUrl1 && <img src={imageUrl1} alt={article1.fields.headline} />}
      </div>

      <div className={styles.articleCard}>
        <h2>{article2.fields.headline}</h2>
        <div className={styles.metaInfo}>
          {new Date(article2.fields.dateAndTime).toLocaleDateString()} | {article2.fields.author}
        </div>
        <div className={styles.readMore} onClick={handleReadMore2}>Læs mere</div>
        {imageUrl2 && <img src={imageUrl2} alt={article2.fields.headline} />}
      </div>
    </div>
  );
};
