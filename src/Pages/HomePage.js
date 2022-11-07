import axios from "axios"
import {useEffect, useState} from 'react'
import { ArticleInfo } from "../Components/ArticleInfo"

const HomePage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    async function fetchArticle() {
      try {
        const response = await axios.get(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );

        setArticles([...response.data]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchArticle();
  }, []);
    
  return (
    <>
      {articles
        .slice(0)
        .reverse()
        .map((currentArticle, index) => {
          return (
            <>
              <ArticleInfo
                imageUrl={currentArticle.imageUrl}
                title={currentArticle.title}
                publishedAt={currentArticle.publishedAt}
                summary={currentArticle.summary}
                url={currentArticle.url}
                id={currentArticle.id}
                index={index}
              />
            </>
          );
        })}
    </>
  )
}

export default HomePage;
