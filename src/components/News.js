import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import $ from 'jquery';
// api key 843a28e0cadf4610b60e1a3abd02e496

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        console.log(this.state.page)
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=843a28e0cadf4610b60e1a3abd02e496&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });


    }
    // console.log(article);
    handlePrevClick = async () => {
        // console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=843a28e0cadf4610b60e1a3abd02e496&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);  
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })

        console.log("Previous");

    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=843a28e0cadf4610b60e1a3abd02e496&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);  
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
    }
        console.log("Next");
    }


    render() {
        return (
            <div className="container " >
                <h2>Top HeadLines</h2>

                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 60) : ""} description={element.description ? element.description.slice(0, 100) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}

                </div>
                <div className='container d-flex justify-content-between'>
                    <button  disabled={this.state.page<=1} type="button" className="btn btn-lg btn-light" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-lg btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>


            </div>
        )
    }
}

export default News