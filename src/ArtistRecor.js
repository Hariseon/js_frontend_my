import React from 'react';
import {connect} from 'react-redux';

import {todoDelete} from './actions';


class ArtistRecor extends React.Component {
	
	constructor(props) 
	{
		super(props);
		this.onDeleteClick = this.onDeleteClick.bind(this);
	}
	
	onDeleteClick(e)
	{
		e.preventDefault();
		fetch(`artist/${this.props.entity._id}`, {method:'DELETE'}).then((res) => {
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
			<li className="member">
			<div className="thumb"><img alt="" src={this.props.entity.Photo}/></div>
			<div className="description">
				<h3>  {this.props.entity.Alais} </h3> 
				<p> <i> {this.props.entity.name} </i> 
				<button>Update</button>
				<button onClick={this.onDeleteClick}>Delete</button></p>
			</div>
			</li>
		)	
    }
}

export default connect()(ArtistRecor);
