import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
// import $ from 'jquery';
// api key 843a28e0cadf4610b60e1a3abd02e496

export class News extends Component {
    static defaultProps = {
        country: "in",
        pageSize: 12,
        category: "general"
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = "News24/7-" + this.capitalizeFirstLetter(this.props.category)
    }
    //bhai bahut try kiya nhi ho rha tha 
    // async updateNews() {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843a28e0cadf4610b60e1a3abd02e496&page=${this.state.page}&pageSize=${this.props.pageSize}`
    //     this.setState({loading: true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
    // }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843a28e0cadf4610b60e1a3abd02e496&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });


    }
    // handlePrevClick = async () => {
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843a28e0cadf4610b60e1a3abd02e496&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()

    //     this.setState({
    //         page: this.state.page - 1,
    //         articles: parsedData.articles,
    //         loading: false
    //     })
    //     // this.setState({page: this.state.page-1})
    //     // this.updateNews()


    // }
    // handleNextClick = async () => {
    //     if (!this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    //     }
    //     else{
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=843a28e0cadf4610b60e1a3abd02e496&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //         this.setState({loading: true})
    //         let data = await fetch(url);
    //         let parsedData = await data.json()  
    //         this.setState({
    //             page: this.state.page + 1,
    //             articles: parsedData.articles,
    //             loading: false

    //         })
    //         // this.setState({page: this.state.page+1})
    //         // this.updateNews()
    // }
    // }
    // scrolltop = () => {
    //     window.scrollTo({top:0});
    //   }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
    };


    render() {
        return (
            <>
                <h1 className="text-center my-3">Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h1>
                {this.state.loading && <h1 className="text-center"><Spinner /></h1>}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    // loader={<Spinner />}
                >
                    <div className="container">

                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                        {/* <div className='container d-flex justify-content-between'>
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-lg btn-light" onClick={() => { this.handlePrevClick(); this.scrolltop(); }}> &larr; Previous</button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-lg btn-dark" onClick={() => { this.handleNextClick(); this.scrolltop(); }}>Next &rarr;</button>
                        </div> */}
                    </div>
                </InfiniteScroll>

            </>
        )
    }
}

export default News