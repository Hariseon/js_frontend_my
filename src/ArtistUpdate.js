import React from 'react';
import {useNavigate, NavLink, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import {todoUpdate} from './actions';


class ArtistUpdateInner extends React.Component {
  
  constructor(props) 
  {
    super(props);
    this.state={
      id: props.location.state.artist._id,
	  Alais: props.location.state.artist.Alais,
	  name: props.location.state.artist.name,
      Photo: props.location.state.artist.Photo,
	  Coll:props.location.state.artist.Coll
    }   
    this.onNameChange = this.onNameChange.bind(this);
	this.onAlaisChange = this.onAlaisChange.bind(this);
    this.onPhotoChange = this.onPhotoChange.bind(this);
    this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
    this.getPhotoBase64 = this.getPhotoBase64.bind(this);
  }
	
  onAlaisChange(e){
    e.preventDefault();
	
    this.setState({
      name: e.target.value,
	  Coll: "album"
    });
  }
  
  onNameChange(e){
    e.preventDefault();
    
    this.setState({
      date: e.target.value
    });
  }
  
  getPhotoBase64(file) {
    var reader = new FileReader();
    reader.onloadend = () => {
      console.log('RESULT', reader.result)
      this.setState({Photo: reader.result})
    }
    reader.readAsDataURL(file);
  }
  
  onPhotoChange(e){
    e.preventDefault();
    
    this.getPhotoBase64(e.target.files[0]);
  }
  
  
  onAddFormSubmit(e)
  {
    e.preventDefault();
	
    fetch(`artist/${this.state.id}`, {
      method: 'PATCH', body: 
      JSON.stringify({
        Alais: this.state.Alais,
		name: this.state.name,
		Artist: this.state.Artist,
        Photo: this.state.Photo,
		Coll: this.state.Coll
      }),
      headers: {
        'Content-Type': 'application/json' 
      }
      }).then((res) => {
      return res.json();  
    }).then((data) =>
    {
      this.props.dispatch(todoUpdate(data._id, data.Alais, data.name, data.Photo, data.Coll));
      this.props.history('/');
    })
  }

    render() 
	{
    return(
      <div className = "Update">
        <button><NavLink to='/'>back To List</NavLink></button>
		<li className="member">
		<div className="description">
		<form onSubmit={this.onAddFormSubmit} >
          <input type="text" name="Alais" value={this.state.Alais} onChange = {this.onAlaisChange} placeholder='Alais'/>
          <input type="text" name="name" value={this.state.name} onChange = {this.onNameChange} placeholder='name'/>
          <label>Фото<input type="file" name="filedata" onChange = {this.onPhotoChange} /></label>
          <input type="submit" value="Update" />
        </form>
		</div>
		</li>
      </div>
    )  
    }
}

const ArtistUpdate = (props) =>{
  return (
    <ArtistUpdateInner {...props} location={useLocation()} history={useNavigate()}/>
  )
}

function mapStateProps(state)
{
	return {
		entity: [...state.entity]
	}
}

export default connect(mapStateProps)(ArtistUpdate);