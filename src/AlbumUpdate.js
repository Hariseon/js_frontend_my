import React from 'react';
import {useNavigate, NavLink, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import {todoUpdate, todoAddAll} from './actions';
import SelectArtist from './SelectArtist';


class AlbumUpdateInner extends React.Component {
  
  constructor(props) 
  {
    super(props);
    this.state={
      id: props.location.state.album._id,
	  name: props.location.state.album.name,
      Photo: props.location.state.album.Photo,
	  date: props.location.state.album.date,
	  Artist: props.location.state.album.Artist,
	  AboutAlbum: props.location.state.album.AboutAlbum,
	  Coll:props.location.state.album.Coll
    }   
    this.onNameChange = this.onNameChange.bind(this);
	this.onDateChange = this.onDateChange.bind(this);
	this.onArtistChange = this.onArtistChange.bind(this);
    this.onPhotoChange = this.onPhotoChange.bind(this);
	this.onAboutAlbumChange = this.onAboutAlbumChange.bind(this);
    this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
    this.getPhotoBase64 = this.getPhotoBase64.bind(this);
	this.getAboutAlbum = this.getAboutAlbum.bind(this);
  }
	
	componentDidMount(){
		fetch('/artist').then(function(res){
			return res.json();
		}).then((data) =>
		{
			this.props.dispatch(todoAddAll(data));
		});
	}
	
  onNameChange(e){
    e.preventDefault();
	
    this.setState({
      name: e.target.value,
	  Coll: "album"
    });
  }
  
  onDateChange(e){
    e.preventDefault();
    
    this.setState({
      date: e.target.value
    });
  }
  
  onArtistChange(e){
    e.preventDefault();
    
    this.setState({
      Artist: e.target.value
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
  
  getAboutAlbum(file) {
    var reader = new FileReader();
    reader.onloadend = () => {
      console.log('RESULT', reader.result)
      this.setState({AboutAlbum: reader.result})
    }
    reader.readAsText(file);
  }
  
  onPhotoChange(e){
    e.preventDefault();
    
    this.getPhotoBase64(e.target.files[0]);
  }
  
  onAboutAlbumChange(e){
    e.preventDefault();
    
    this.getAboutAlbum(e.target.files[0]);
  }
  
  onAddFormSubmit(e)
  {
    e.preventDefault();
	
    fetch(`album/${this.state.id}`, {
      method: 'PATCH', body: 
      JSON.stringify({
        name: this.state.name,
		date: this.state.date,
		Artist: this.state.Artist,
        Photo: this.state.Photo,
		AboutAlbum: this.state.AboutAlbum,
		Coll: this.state.Coll
      }),
      headers: {
        'Content-Type': 'application/json' 
      }
      }).then((res) => {
      return res.json();  
    }).then((data) =>
    {
      this.props.dispatch(todoUpdate(data._id, data.name, data.date, data.Photo, data.date, data.AboutAlbum, data.Coll));
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
			<input type="text" name="name" value={this.state.name} onChange = {this.onNameChange} placeholder='Название'/>
			<input type="text" name="date" value={this.state.date} onChange = {this.onDateChange} placeholder='Дата выхода'/>
			<label> Выберите автора альбома из списка артистов:
				<select name="Artist" id="ArtSel" onChange = {this.onArtistChange} key={this.props.entity._id}>
					<option ></option>
					{
					this.props.entity.map((entity) =>
					{
						return(
							<SelectArtist entity={entity} key={entity._id} />
						)	
					})
				}
				</select>
				</label>
				<br></br>
			<label>Фото<input type="file" name="filedata" onChange = {this.onPhotoChange} /></label>
			<label>Об альбоме<input type="file" name="filedat" onChange = {this.onAboutAlbumChange} /></label>
			<input type="submit" value="Update" />
        </form>
		</div>
		</li>
      </div>
    )  
    }
}

const AlbumUpdate = (props) =>{
  return (
    <AlbumUpdateInner {...props} location={useLocation()} history={useNavigate()}/>
  )
}

function mapStateProps(state)
{
	return {
		entity: [...state.entity]
	}
}

export default connect(mapStateProps)(AlbumUpdate);