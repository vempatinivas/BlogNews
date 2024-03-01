import { Badge, Container, Row } from "react-bootstrap"
import { NewsItem } from "./NewsItem"
import { useEffect, useState } from "react"

export const NewsBoard = ({category}) => {
  const[articles, setArticles] = useState([]);

  useEffect(()=> {
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=cf628d5696c949d3ad3e45a64d7c55a0`;
    fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

  },[category]);

  return (
    <div>
        <h3 className="text-center my-3"> Latest <Badge bg="danger">Blog</Badge></h3>
        <h2 className="text-center my-3 text-capitalize text-primary">{category}</h2>
        <Container>
          <Row>
          {articles.map((news,index)=>{
          return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
        })} 
          </Row>
        </Container>
        
        {/* <NewsItem /> */}
        
    </div>
  )
}
