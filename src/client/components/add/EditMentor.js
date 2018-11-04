import React from 'react';
import MentorForm from './MentorForm'
class EditMentor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            message: 'Hang in there...',
            mentorData : {}
        }
    }
    componentDidMount(){
        //const url = '/api/mentors'
        const id=this.props.match.params.id
        //console.log('idddd---->' ,{id});
        fetch(`/api/mentors/${id}`)
        .then(res=>res.json())
        .then(data=>{
  //          console.log('success',response);
            this.setState({
                isLoading: false,
                mentorData : data
            });
        })
        .catch(error=>console.log('Error',error));
    }
    render(){
        //console.log(this.state.mentorData);    
        return(
            
            this.state.isLoading ? 
                <div>{this.state.message}</div>
                :
                <MentorForm {...this.props} mentorData={this.state.mentorData} id={this.props.match.params.id} isEditing={true} />
            
        )
    }
}
export default EditMentor;