import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// api key - d956adda4e1c47f590bed808aa7c2b73
export default class NewsComponent extends Component {
  // have to use this in access into another block 
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general'
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  articles = []
  constructor(props) { // have to specipy props in perameters and super class constructor 
    super(props);
    console.log('constructor of newscomponent class')
    // to make the state
    this.state = {
      articles: this.articles,
      // loading: false,
      page: 1,
      totalResults: 0
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - News Dump`
  };

  async componentDidMount() {

    console.log('compound did mount');
    this.update();
  }



  update = async () => {
    // this.setState({
    //   // loading: true
    // })
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`

    let data = await fetch(url);  // waiting for finish this line 
    this.props.setProgress(20)
    let json_data = await data.json() // waiting for finish this line 
    this.props.setProgress(40)
    console.log(json_data);
    this.props.setProgress(60)
    this.setState({
      articles: json_data.articles,
      // loading: false
      totalResults: json_data.totalResults
    })

    this.props.setProgress(100)
    console.log(`into the cdm -->  current article length is :  ${this.state.articles.length}, current totalresult is ${this.state.totalResults}`)
  }


  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    })
    this.props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.props.setProgress(20)
    // let url = 'https://newsapi.org/v2/everything?q=technology&apiKey=d956adda4e1c47f590bed808aa7c2b73'
    let data = await fetch(url);  // waiting for finish this line 
    this.props.setProgress(40)
    let json_data = await data.json() // waiting for finish this line 
    this.props.setProgress(60)
    console.log(`this is json current json object :`);
    console.log(json_data);

    this.setState({
      articles: this.state.articles.concat(json_data.articles),
      // loading: false

    })
    this.props.setProgress(100)
    console.log(`into the fetch more page 2 init --> current article length is :  ${this.state.articles.length}, current totalresult is ${this.state.totalResults}`)
  };





  render() {
    console.log('this is render function ')
    return (
      <>
        {/* <div className='container-fluid'> */}
        <div className="container">
          <h2 className='text-center' style={{ marginTop: '20px' }}>News Dump -- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h2>
          {/* {this.state.loading && <Spinner />} */}

          {/* {!this.state.loading && this.state.articles.map((element) => { */}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length > this.state.totalResults ? false : true}
            loader={<Spinner />}
          >

            <div className="row my-3">
              {this.state.articles.map((element) => {
                document.querySelector('.infinite-scroll-component').style.overflow = 'hidden';
                return <div className="col-md-3 my-3" key={element.publishedAt}>
                  <Newsitem url_img={element.urlToImage ? element.urlToImage : 'https://cdn.benzinga.com/files/images/story/2022/09/08/shutterstock_1420837169.jpg?width=1200&height=800&fit=crop'} title={element.title} discription={element.description} news_url={element.url} sourceName={element.source.name} publishedAt={new Date(element.publishedAt).toGMTString()} author={element.author === null ? 'Unknown' : element.author} />
                </div>
              })}
            </div>
          </InfiniteScroll>

        </div>
        {/* </div> */}
        {/* <div className="container my-4 d-flex justify-content-evenly">
            <button type="button" disabled={this.state.page <= 1} id='prev-btn' onClick={this.handlePreviousClick} className="btn btn-dark">&#8672; Previous</button>
            <button type="button" disabled={this.state.page + 1 >= Math.ceil(this.state.totalResults / this.props.pageSize)} id='next-btn' onClick={this.handleNextClick} className="btn btn-dark">Next &#8674;</button>
          </div> */}
      </>
    )
  }
}
