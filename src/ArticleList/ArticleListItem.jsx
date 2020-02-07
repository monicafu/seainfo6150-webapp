import React from 'react';
import SlugButton from './SlugButton';
import styles from "./ArticleListItem.module.css";


const ArticleListItem = ({article}) => {
  
  return (
    <div>
      <article>
        <header>
          <h1 className={styles.header}>{article.title}</h1>
        </header>
      <section>
        <p>{article.shortText}</p>
        <time className={styles.dateTime} dateTime={article.pubYear}>{article.pubDate}</time>
        <SlugButton buttonText={article.author} slug={article.slug}/>
      </section>
      </article>
    </div>
  );
}

export default ArticleListItem;