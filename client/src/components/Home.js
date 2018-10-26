import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import API from "../utils/API";

class Home extends Component {
    state = {
        searchTerm: "",
        startYear: "",
        endYear: "", 
        articles: []
    }

    searchArticles = (event) => {
        event.preventDefault();
        API.getArticles(this.state.searchTerm, this.state.startYear, this.state.endYear)
        .then(res => {
            if(res.data.status === "error") {
                throw new Error(res.data.message)
            }
            else{
                console.log(res.data.response.docs)
                this.setState({articles: res.data.response.docs})
            }
        })
    }

    saveArticle = (title, date, url) => {
        let article = {
            title,
            date, 
            url
        }
        console.log(article);
        axios.post('/api/article', article)
        .then(res => {
            console.log(res)
        })
    }

    handleInputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        this.setState({[name]: value})
    }
 
    render(){
        return(
            <div className = 'container'>
                <h1>This is the Home Page</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="search-topic">Search Topic</label>
                        <input type="text" className="form-control" name='searchTerm' id="search-topic" aria-describedby="emailHelp" onChange={this.handleInputChange} placeholder="Enter Topic" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startYear">Start Year</label>
                        <input type="text" className="form-control" name='startYear' id="startYear" onChange={this.handleInputChange} placeholder="YYYY"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="endYear">End Year</label>
                        <input type="text" className="form-control" name='endYear' id="endYear" onChange={this.handleInputChange} placeholder='YYYY'/>
                    </div>
                    <button type="submit" onClick={this.searchArticles} className="btn btn-primary">Submit</button>
                </form>
                <table className = 'table' style={this.state.articles.length > 0 ? {display: "block"} : {display: 'none'}}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Date</th>
                            <th scope="col">URL</th>
                            <th scope="col">Save</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.articles.map((article, i) => {
                        let date = article.pub_date.split("T");

                        return(
                        <tr key={i}>
                        <th scope="row">{i+1}</th>
                        <td>{article.headline.main}</td>
                        <td>{date[0]}</td>
                        <td><a href={article.web_url}>Link to Site</a></td>
                        <td><button className="btn, btn-primary" onClick={()=>this.saveArticle(article.headline.main, article.pub_date, article.web_url)}>Save</button></td>                        
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home;