import React from 'react';
import styles from './ArticlesGrid.module.scss';
import { useNavigate } from 'react-router-dom';

const getImageUrl = (imageId, includes) => {
    const asset = includes?.Asset?.find((asset) => asset.sys.id === imageId);
    return asset ? `https:${asset.fields.file.url}` : null;
};

export const ArticlesGrid = ({ articles, includes }) => {
  const navigate = useNavigate(); 

  return (
    <div className={styles.articlesGrid}>
      {articles.map((article) => {
        const imageUrl = getImageUrl(article.fields.image?.sys.id, includes);

        const handleReadMore = () => {
          navigate(`/article/${article.sys.id}`); 
        };

        return (
          <div key={article.sys.id} className={styles.articleCard}>
            <h2>{article.fields.headline}</h2>
            <div className={styles.metaInfo}>
              {new Date(article.fields.dateAndTime).toLocaleDateString()} | {article.fields.author}
            </div>
            <div className={styles.readMore} onClick={handleReadMore}>
              Read more
            </div>
            {imageUrl && <img src={imageUrl} alt={article.fields.headline} />}
          </div>
        );
      })}
    </div>
  );
};
