import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';


export default class News extends Component {

  static defaultProps = {
    category: 'general',
    categoryType: 'General'
  }
  static propTypes ={
    category: PropTypes.string,
    categoryType: PropTypes.string
  }

  articles = [];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }
  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=4a99967654cc4d03811590696277ebc7&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
    })
  }
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevious = async () => {
    await this.setState({page: this.state.page-1})
    this.updateNews()
  }


  handleNext = async () => {
    if (!(this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      await this.setState({ page: this.state.page + 1 });
      this.updateNews()
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h3 className="text-center">NewsMonkey- {this.props.categoryType} Top Headlines</h3>
        {this.state.loading && <Loading />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
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
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevious}> &larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNext}>Next &rarr; </button>
        </div>
      </div>
    );
  }
}
