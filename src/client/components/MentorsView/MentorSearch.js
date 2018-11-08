import React, {Component} from 'react';
import queryString from 'querystring'

class MentorSearch extends Component{
    constructor(props){
        super(props);
        this.state = { 
            data : {},
            isPageLoaded: false
        }
    }
    componentWillMount(){
        console.log('component');
        const query = this.props.location.search.substr(1);
        console.log(query);
        const searchData = queryString.parse(query);
        console.log(searchData);
       
        

        fetch(`/api/Mentors/search?name=${searchData.name}&location=${searchData.location}`).then(res=>res.json())
        .then(response=>{
            this.setState({
                data: response,
                dataisLoaded : true
            })
        })
       
    }
    
    
    render(){
        if(this.state.isPageLoaded){
            return("Page is Loaded")
        }
        else{   
        return("Page is Loading wait ....");
    }
    }
}

export default MentorSearch;