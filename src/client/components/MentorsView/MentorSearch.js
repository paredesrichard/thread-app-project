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
    componentWillMount() {
        console.log('component');
        const query = this
            .props
            .location
            .search
            .substr(1);
        console.log(query);
        const searchData = queryString.parse(query);
        console.log(searchData);

        fetch(`/api/Mentors/search?name=${searchData.name}&location=${searchData.location}`)
            .then(res => res.json())
            .then(response => {
                this.setState({data: response, dataisLoaded: true})
            })

    }

    render(){
        if(this.state.dataisLoaded){
            // console.log(this.state.data);
            return(
            <div className="container">
            <div className="card-columns">
                {this.state.data.map((data)=>
              <div key={data.id} className="card">
              <img className="card-img-top mentor-image" src={data.profile_picture} alt={data.first_name + " "+ data.last_name} />
              <div className="card-body">
                <h5 className="card-title">{data.first_name + " "+ data.last_name}</h5>
                <p className="card-text"><strong>Services</strong><br />
                  <span>{data.offering}</span> <br />
                  <strong>Availability</strong><br />
                  <span>{data.availability}</span> <br />
                </p>
                <a href="#" className="btn btn-danger">Read more..</a>
                <Link to={`/Mentors/edit/${data.id}`} target="_blank" className="btn btn-outline-danger btn-sm pull-right"> Edit</Link>                
              </div>
              </div>
                )}
                </div>
            
            </div>);
        }
        else{
            return("page is Loading");
        }
    }
}

export default MentorSearch;