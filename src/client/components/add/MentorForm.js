import React from 'react';

class MentorForm extends React.Component{
    constructor(props){
        super(props);
        if (this.props.isEditing) {
            this.state = {
                mentorData: this.props.mentorData
            }
        }else{
        this.state={ 
            mentorData :{
                        "first_name": "",
                        "last_name": "",
                        "email": "",
                        "gender": "",
                        "profile_picture": "",
                        "mentor_description": "",
                        "languages": "",
                        "availability": "",
                        "offering": "",
                        "area_location": "",
                        "preferred_meeting_place": "",
                        "affiliation": "",
                        "active":1
                    }
                    
                }
             }
    }
    updateFields=(e)=>{
        //alert(e.target.name);
        const{name,value} = e.target
    this.setState({
        mentorData : {
            ...this.state.mentorData,
            [name]:value,
        }
        
    })
    }
    submitForm=(e)=>{
        e.preventDefault();
        //alert('bla')
        //alert(JSON.stringify(this.state))
        console.log("MentorData from FORM", this.state.mentorData);
        var data = this.state.mentorData;
        let url = '', method = '';

        if (this.props.isEditing) {
            url = `/api/mentors/${this.props.match.params.id}`
            method = 'PUT';
        } else {
            url = `/api/mentors`
            method = 'POST';
        }

        fetch(url,{
            method:'post',//put
            body:JSON.stringify(this.state.mentorData),
            headers:{
            'Content-Type':'application/json '
            }
        }
        ).then(res=>res.text())
        .then(response => {
            console.log('Success:', response)

            //this.setState({displaySubmitForm:false});
        })
        
        .catch(error=>console.log('Error',error));
    }
    render(){
        console.log("From <editmentor------_>",this.state.mentorData);
        return(
            <div>
<form onSubmit= {this.submitForm}>
<div>
<h1> {`${this.props.isEditing ? "Edit" : "Add"} Mentor`}</h1>
<div>
<label htmlFor='txtName'>First Name</label>
<input type='text'id='first_Name'name='first_name' value={this.state.mentorData.first_name} onChange={this.updateFields} />
</div>
<div>
<label>Last Name</label>
<input id='Last_Name'name='last_name' value={this.state.mentorData.last_name} onChange={this.updateFields} />
</div>
<div>
<label>email</label>
<input id='email'name='email' value={this.state.mentorData.email} onChange={this.updateFields} />
</div>
<div>
<label>gender</label>
<input id='gender'name='gender' value={this.state.mentorData.gender} onChange={this.updateFields} />
</div>
<div>
<label>profile_picture</label>
<input id='profile_picture'name='profile_picture' value={this.state.mentorData.profile_picture} onChange={this.updateFields} />
</div>
<div>
<label>mentor_description</label>
<input id='mentor_description'name='mentor_description' value={this.state.mentorData.mentor_description} onChange={this.updateFields} />
</div>
<div>
<label>languages</label>
<input id='languages'name='languages' value={this.state.mentorData.languages} onChange={this.updateFields} />
</div>
<div>
<label>availability</label>
<input id='availability'name='availability' value={this.state.mentorData.availability} onChange={this.updateFields} />
</div>
<div>
<label>offering</label>
<input id='offering'name='offering' value={this.state.mentorData.offering} onChange={this.updateFields} />
</div>
<div>
<label>area_location</label>
<input id='area_location'name='area_location' value={this.state.mentorData.area_location} onChange={this.updateFields} />
</div>
<div>
<label>preferred_meeting_place</label>
<input id='preferred_meeting_place'name='preferred_meeting_place' value={this.state.mentorData.preferred_meeting_place} onChange={this.updateFields} />
</div>
<div>
<label>affiliation</label>
<input id='affiliation'name='affiliation' value={this.state.mentorData.affiliation} onChange={this.updateFields} />
</div>
</div>
<button className='btn btn-save' type = 'submit'>Save</button>
<button className="delete_btn" onClick={this.deleteMentor}> Delete</button>


</form>

</div>
        )
        
    }
}
export default MentorForm;