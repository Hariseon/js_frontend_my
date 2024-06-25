import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import { useParams } from "react-router-dom";

import ArtistRecor from './ArtistRecor';
import {todoAddAll} from './actions';


class ArtistList extends React.Component {
    
	constructor(props) 
	{
		super(props);
		this.onChildComponent = this.onChildComponent.bind(this);
	}
	onChildComponent()
	{
	ChildComponent = () => {
		const { id } = useParams();
		return (
		   <div>
			 ID: {id}
		   </div>
	)}
	}
	
	
	
	
	render() {
		return (
			<div className="ArtistList">
			{
				this.onChildComponent
			}
			</div>
		);
    }
}

function mapStateProps(state)
{
	return {
		entity: [...state.entity]
	}
}

function hhh(){
const ChildComponent = () => {
		const { id } = useParams();
		return (
		   <div>
			 ID: {id}
		   </div>
		 );
	}
}
export default connect(mapStateProps)(ArtistList);
