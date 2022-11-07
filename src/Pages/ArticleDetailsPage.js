import { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { ArticleInfo } from "../Components/ArticleInfo"
import Header from "../Components/Header"

const ArticleDetailsPage = () => {

    const [article, setArticle] = useState([])
    const {articleId} = useParams()

    useEffect(() => {
      axios.get(`https://api.spaceflightnewsapi.net/v3/articles/${articleId}`)
        .then(response => {setArticle(response.data)})
        .catch(error => console.log(error))
    }, [articleId])
    
  return (
    <div>
      <Header />
      <ArticleInfo article = {article}/>
    </div>
  )
}
export default ArticleDetailsPage