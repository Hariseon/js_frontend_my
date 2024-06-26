import React from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {todoDelete} from './actions';

function GetNavigate(path, toData){
	const navigate = useNavigate();
	return navigate(path, {state: toData.state});
}

class AlbumRecor extends React.Component {
	constructor(props) 
	{
		super(props);
		this.onDeleteClick = this.onDeleteClick.bind(this);
		this.handleClickUpdate = () => {
			const data = props; 
			GetNavigate('/UpdateAlbum', {state: data});
			};	
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
			<li className="member">
			<div className="thumb"><img alt="" src={this.props.entity.Photo}/></div>
			<div className="description">
				<h3>  {this.props.entity.name}, {this.props.entity.date} </h3>
				<p> <i> {this.props.entity.AboutAlbum} </i> 
				<button onClick={this.handleClickUpdate}>Update</button>
				<button onClick={this.onDeleteClick}>Delete</button></p>
			</div>
			</li>
		)	
    }
}


export default connect()(AlbumRecor);
