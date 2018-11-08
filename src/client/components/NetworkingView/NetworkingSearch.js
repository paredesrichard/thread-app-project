import React, {Component} from 'react';
import queryString from 'querystring'


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

        fetch(`/api/Networking/search?name=${searchData.name}&location=${searchData.location}`).then(res=>res.json())
        .then(response=>{
            this.setState({
                data: response,
                dataisLoaded : true
            })
        })
    }
    render(){
        if(this.state.dataisLoaded){
            // console.log(this.state.data);
            return(
            <div className="container">
                {this.state.data.map((data)=>
                    <NetworkCard networkData={data}/>
                )}
            </div>);
        }
        else{
            return("Data is Loading");
        }
    }
}
export default NetworkSearch;