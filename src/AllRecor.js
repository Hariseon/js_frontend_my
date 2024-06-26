import React from 'react';
import {connect} from 'react-redux';

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
		fetch(`${this.props.entity.Coll}/${this.props.entity._id}`, {method:'DELETE'}).then((res) => {
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
			<li class="member" key="this.props.entity._id">
			<div class="thumb"><img alt="" src={this.props.entity.Photo} /></div>
			<div class="description">
				<h3>{this.props.entity.name}</h3><p></p> 
				<button onClick={this.onDeleteClick}>Delete</button>
			</div>
			</li>
			
		)	
    }
}

export default connect()(ToDoTask);
