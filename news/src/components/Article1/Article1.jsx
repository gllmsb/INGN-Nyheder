import React from 'react';
import styles from './Article1.module.scss';
import { useNavigate } from 'react-router-dom';

export const Article1 = ({ article, includes }) => {
    const navigate = useNavigate(); 

    const imageUrl = includes?.Asset?.find((asset) => asset.sys.id === article.fields.image?.sys.id)?.fields.file.url
        ? `https:${includes?.Asset?.find((asset) => asset.sys.id === article.fields.image?.sys.id)?.fields.file.url}`
        : null;

    const richTextContent = article.fields.content;
    const firstTextBlock = richTextContent?.content?.find(
        (block) => block.nodeType === 'text' || block.nodeType === 'paragraph'
    );
    const shortDescription = firstTextBlock?.content?.[0]?.value
        ? `${firstTextBlock.content[0].value.slice(0, 100)}…`
        : "No description available";

    const handleReadMore = () => {
        navigate(`/article/${article.sys.id}`);
    };

    return (
        <div className={styles.articleContainer}>
            <h2>{article.fields.headline || "No headline available"}</h2>
            <p className={styles.description}>{shortDescription}</p>
            <div className={styles.metaInfo}>
                {new Date(article.fields.dateAndTime).toLocaleDateString()} | {article.fields.author || "Unknown author"}
            </div>
            <div className={styles.readMore} onClick={handleReadMore}>
                Read more
            </div>
            {imageUrl && <img src={imageUrl} alt={article.fields.headline} />}
        </div>
    );
};