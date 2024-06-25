import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {todoDelete} from './actions';


class ToDoTask extends React.Component {
	
	constructor(props) 
	{
		super(props);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	
	onDeleteClick(e)
	{
		e.preventDefault();
		fetch(`album/${this.props.entity._id}`, {method:'DELETE'}).then((res) => {
			if (res.status === 200) {
				console.log('Delete');
				this.props.dispatch(todoDelete(this.props.entity._id));
			}
			else {
				console.log('Not Delete');
			}
		}).then((data) =>
		{
			this.setState({
				entity: data
			});
		});
	}
	
    render() 
	{
		
		return(
			<li class="member">
			<div class="thumb"><img alt="" src={this.props.entity.Photo}/></div>
			<div class="description">
				<h3>  {this.props.entity.name}, {this.props.entity.date} </h3>
				<p> <i> {this.props.entity.AboutAlbum} </i> 
				<button><NavLink to={{pathname:`/UpdateAlbum/${this.props.entity._id}`, aboutProps:{selectedidds:this.props.entity._id}}}>Preview Question</NavLink></button>
				<button onClick={this.onDeleteClick}>Delete</button></p>
			</div>
			</li>
		)	
    }
}


export default connect()(ToDoTask);
