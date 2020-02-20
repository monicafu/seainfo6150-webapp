import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem";
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <ul className={styles.container}>
      {props.articles.map(article => (
        <ArticleListItem key={article.slug} article={article}/>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
