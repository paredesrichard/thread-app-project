import React, {Component} from 'react';
import queryString from 'querystring'
import Card from './Card';
import SearchForm from '../SearchForm/SearchForm';


class NetworkSearch extends Component{
    constructor(props){
        super(props);
        this.state = { 
            data : {},
            isPageLoaded: false
        }
    }
    componentWillMount(){
        console.log('components');
        const query = this.props.location.search.substr(1);
        const searchData = queryString.parse(query);
        console.log(searchData);

        fetch(`/api/Networking/search?name=${searchData.search_word}&location=${searchData.location}`)
        .then(res=>res.json())
        .then(response=>{
            this.setState({
                data: response,
                dataisLoaded : true
            })
            
        })
    }
    render(){
        
        if(this.state.dataisLoaded){
            console.log(this.state.data);
            return(
            <div className="container">
            <SearchForm />
                {this.state.data.map((data)=>
                    <Card data={data}/>
                )}
            </div>);
        }
        else{
            return("Data is Loading");
        }
        
        
    }
}
export default NetworkSearch;