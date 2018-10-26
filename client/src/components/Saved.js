import React, { Component } from 'react';
import axios from 'axios';
import API from '../utils/API';

class Saved extends Component {

    state = {
        articles: []
    }

    componentDidMount(){
        this.getArticles();
    }

    getArticles = () => {
        axios.get('/api/article')
        .then(res => {
            this.setState({articles: res.data})
        })
    }

    deleteArticle = (id) => {
        axios.delete(`/api/article/${id}`)
        .then(res => {
            console.log(res);
            this.getArticles();
        })
    }

    render() {
        return (
            <div className="container">
                <h1>This page will display saved articles</h1>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">URL</th>
                        <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.articles.map((article, i) => {
                            let date = article.date.split("T");
                            return(
                            <tr key={i}>
                            <th scope="row">{i+1}</th>
                            <td>{article.title}</td>
                            <td>{date[0]}</td>
                            <td><a href={article.url}>Link to Site</a></td>
                            <td><button className="btn, btn-danger" onClick={()=>this.deleteArticle(article._id)}>Delete</button></td>
                            </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Saved;