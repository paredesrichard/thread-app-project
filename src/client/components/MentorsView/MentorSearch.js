import React, {Component} from 'react';
import queryString from 'querystring'

class MentorSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            isPageLoaded: false
        }
    }
    componentDidMount(){
        const query = this.props.location.search.substr(1);
        const searchData = queryString.parse(query);
        console.log(searchData);

        fetch(`/api/Mentors/search?name=${searchData.search_word}&location=${searchData.location}`).then(res=>res.json())
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

export default MentorSearch;