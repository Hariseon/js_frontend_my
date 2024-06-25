import React from 'react';
import {useNavigate, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {todoAdd} from './actions';



class ToDoTaskAddInner extends React.Component {
  
  constructor(props) 
  {
    super(props);
    this.state={
      Alais: '',
      name:'',
      Photo: '',
	  Coll:''
    }
    this.onAlaisChange = this.onAlaisChange.bind(this);    
    this.onNameChange = this.onNameChange.bind(this);
    this.onPhotoChange = this.onPhotoChange.bind(this);
    this.onAddFormSubmit = this.onAddFormSubmit.bind(this);
    this.getBase64 = this.getBase64.bind(this);
  }
  
  
  
  onAlaisChange(e){
    e.preventDefault();
    
    this.setState({
      Alais: e.target.value,
	  Coll: "artist"
    });
  }
  
  onNameChange(e){
    e.preventDefault();
    
    this.setState({
      name: e.target.value
    });
  }
  
  getBase64(file) {
    var reader = new FileReader();
    reader.onloadend = () => {
      console.log('RESULT', reader.result)
      this.setState({Photo: reader.result})
    }
    reader.readAsDataURL(file);
  }
  
  onPhotoChange(e){
    e.preventDefault();
    
    this.getBase64(e.target.files[0]);
  }
  
  onAddFormSubmit(e)
  {
    e.preventDefault();

    fetch('artist', {
      method: 'POST', body: 
      JSON.stringify({
        Alais: this.state.Alais,
        name: this.state.name,
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
      this.props.dispatch(todoAdd(data._id, data.Alais, data.name, data.Photo));
      this.props.history('/');
    })
  }

    render() 
  {
    
    return(
      <div className = "Add">
        <button><NavLink to='/'>back To List</NavLink></button>
        <form onSubmit={this.onAddFormSubmit} >
          <input type="text" name="Alais" value={this.state.Alais} onChange = {this.onAlaisChange} placeholder='Alais'/>
          <input type="text" name="name" value={this.state.name} onChange = {this.onNameChange} placeholder='name'/>
          <button><label>Фото<input type="file" name="filedata" onChange = {this.onPhotoChange} /></label></button>
          <input type="submit" value="Add" />
        </form>
      </div>
    )  
    }
}

const ToDoTaskAdd = (props) =>{
  return (
    <ToDoTaskAddInner {...props} history={useNavigate()}/>
  )
}

export default connect()(ToDoTaskAdd);