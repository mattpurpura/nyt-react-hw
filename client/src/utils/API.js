import axios from "axios";

export default {
    getArticles: function(searchTerm, beginDate, endDate){
        let beginString = "&begin_date=" + beginDate +"0101";
        let endString = "&end_date=" + endDate +"1231";
        return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=4e41f175bec44a67bbd3dc3f818e88ec${beginString}${endString}`)
    }
}

