import Article from './Article'
import classnames from "./index.module.scss";
import titles from "data/titles";
import loadingIcon from 'images/loading.svg'
import { useEffect, useState } from "react";
import formatTitle from "helpers/formatTitle";
import projects from 'data/projects.json'
import axios from "axios";
export default function Articles() {
  const [articles,setArticles] = useState(null);
  useEffect(() => {
    document.title = formatTitle("articles");
    axios.get('https://dev.to/api/articles?username=extrapoisonouscake').then(res => {
        const {data} = res;
        const readyArticles = data.map(({social_image,title,published_timestamp,description,path}) => ({path,thumbnail:social_image,title,description,published_at:published_timestamp}));
        setArticles(readyArticles);
    });
  });
  return (
    <div className="section">
      <h2>{titles["articles"]}</h2>
      <div className={classnames.articles}>
        {articles ? articles.map(article => <Article {...article}/>) : <img className={classnames.loadingIcon} src={loadingIcon} alt="Loading icon" />}
      </div>
    </div>
  );
}
