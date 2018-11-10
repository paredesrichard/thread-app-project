import React from 'react';
import NetworkingForm from './NetworkingForm'
class EditNetworking extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            message: 'Hang in there...',
            networkingData : {}
        }
    }
    componentDidMount(){
        //const url = '/api/networking'
        const id=this.props.match.params.id
        //console.log('idddd---->' ,{id});
        fetch(`/api/networking/${id}`)
        .then(res=>res.json())
        .then(data=>{
  //          console.log('success',response);
            this.setState({
                isLoading: false,
                networkingData : data
            });
        })
        .catch(error=>console.log('Error',error));
    }
    render(){
        //console.log(this.state.networkingData);    
        return(
            
            this.state.isLoading ? 
                <div>{this.state.message}</div>
                :
                <NetworkingForm {...this.props} networkingData={this.state.networkingData} id={this.props.match.params.id} isEditing={true} />
            
        )
    }
}
export default EditNetworking;