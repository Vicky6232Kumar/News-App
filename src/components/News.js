import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async () => {
    props.setProgress(25)
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    props.setProgress(50)
    let data = await fetch(url);
    props.setProgress(75)
    let parsedData = await data.json();
    props.setProgress(100)
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)

  }
  useEffect(() => {
    updateNews();

  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  return (
    <>
      <h3 className="text-center style={{margin-top:'4rem'}}">NewsMonkey- {props.categoryType} Top Headlines</h3>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={articles.length <= totalResults && <Loading />}

      >
        <div className="container">
          <div className="row">
            {articles.map((element, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    tittle={element.title}
                    description={element.description}
                    urlImage={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}

                  />
                </div>

              );
            })}
          </div>
        </div>
      </InfiniteScroll>

    </>
  );


}

News.defaultProps = {
  category: 'general',
  categoryType: 'General',
  pageSize: 15
}
News.propTypes = {
  category: PropTypes.string,
  categoryType: PropTypes.string,
  pageSize: PropTypes.number
}

export default News;
