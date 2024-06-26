import React from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {todoDelete} from './actions';


class ArtistRecorInner extends React.Component {
	
	constructor(props) 
	{
		super(props);
		this.onDeleteClick = this.onDeleteClick.bind(this);
		this.handleClickUpdate = this.handleClickUpdate.bind(this);
		this.handleClickDetails = this.handleClickDetails.bind(this);
	}
	
	handleClickUpdate(e)
	{
		this.props.history('/ArtistUpdate', {state: {artist: this.props.entity}});
	}
	
	handleClickDetails(e)
	{
		this.props.history('/ArtistDetails', {state: {artist: this.props.entity}});
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
				<button onClick={this.handleClickUpdate}>Update</button>
				<button onClick={this.onDeleteClick}>Delete</button>
				<button onClick={this.handleClickDetails}>Details</button></p>
			</div>
			</li>
		)	
    }
}

const ArtistRecor = (props) =>{
	return (
		<ArtistRecorInner {...props} history={useNavigate()}/>
	)
}

export default connect()(ArtistRecor);
