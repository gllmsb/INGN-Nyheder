import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './ArticleDetail.module.scss';

const spaceId = 'flg8gitdieko';
const accessToken = 'dCaJbHxLjlKL0r1Hzx6z9zSMr7zKzjF5tgXYkyfuEjc';
const environment = 'master';

const getImageUrl = (imageId, includes) => {
  const asset = includes?.Asset?.find((asset) => asset.sys.id === imageId);
  return asset ? `https:${asset.fields.file.url}` : null;
};

const fetchImageAsset = (imageId, setImageUrl) => {
  const assetUrl = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/assets/${imageId}?access_token=${accessToken}`;
  fetch(assetUrl)
    .then((response) => response.json())
    .then((data) => {
      // console.log('Fetched Asset:', data);
      setImageUrl(`https:${data.fields.file.url}`);
    })
    .catch((error) => {
      console.error('Error fetching asset:', error);
    });
};

export const ArticleDetail = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [includes, setIncludes] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [error, setError] = useState(null);

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environment}/entries/${articleId}?access_token=${accessToken}&include=1`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('Contentful Data:', data);
        setArticle(data.fields);
        setIncludes(data.includes);

        const imageId = data.fields.image?.sys.id;
        const imageFromIncludes = getImageUrl(imageId, data.includes);
        if (imageFromIncludes) {
          setImageUrl(imageFromIncludes);
        } else if (imageId) {
          fetchImageAsset(imageId, setImageUrl); 
        }
      })
      .catch((error) => {
        console.error('Error fetching article data:', error);
        setError(error.message);
      });
  }, [articleId]);

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.articleDetail}>
      <h1>{article.headline || 'No headline available'}</h1>
      <div className={styles.metaInfo}>
        {new Date(article.dateAndTime).toLocaleDateString()} | {article.author || 'Unknown author'}
      </div>

      {imageUrl && (
        <img src={imageUrl} alt={article.headline} className={styles.articleImage} />
      )}

      <div className={styles.articleContent}>
        {documentToReactComponents(article.content)}
      </div>
    </div>
  );
};