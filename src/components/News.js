import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
// import $ from 'jquery';
// api key 843a28e0cadf4610b60e1a3abd02e496

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 12,
        category:"general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843a28e0cadf4610b60e1a3abd02e496&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});


    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843a28e0cadf4610b60e1a3abd02e496&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json()
          
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })


    }
    handleNextClick = async () => {
        if (!this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843a28e0cadf4610b60e1a3abd02e496&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true})
            let data = await fetch(url);
            let parsedData = await data.json()  
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
    }
    }
    scrolltop = () => {
        window.scrollTo({top:0});
      }


    render() {
        return (
            <div className="container " >
            <h1 className="text-center my-3">Top HeadLines</h1>
            {this.state.loading && <h1 className="text-center"><Spinner/></h1>}

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 100) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className='container d-flex justify-content-between'>
                    <button  disabled={this.state.page<=1} type="button" className="btn btn-lg btn-light" onClick={() => {this.handlePrevClick();this.scrolltop();}}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-lg btn-dark" onClick={() => {this.handleNextClick();this.scrolltop();}}>Next &rarr;</button>
                </div>


            </div>
        )
    }
}

export default News