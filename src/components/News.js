import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import $ from 'jquery';
// api key 843a28e0cadf4610b60e1a3abd02e496

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles:[]
        }
    }
    async componentDidMount() {
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=843a28e0cadf4610b60e1a3abd02e496"
        let data= await fetch(url);
        let parsedData= await data.json();
        this.setState({articles: parsedData.articles});
        

    }
    // console.log(article);

    render() {
        return (
            <div className="container " >
                <h2>Top HeadLines</h2>
                
                <div className="row">
                {this.state.articles.map((element) =>{ return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem   title={element.title?element.title.slice(0,60):""} description={element.description?element.description.slice(0,100):""} ImageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>})}
                    
                </div>


            </div>
        )
    }
}

export default News