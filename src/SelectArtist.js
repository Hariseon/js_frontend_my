import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import {todoDelete} from './actions';


class SelectArtist extends React.Component {
	
	constructor(props) 
	{
		super(props);
	}
	
    render() 
	{
		
		return(
			<option value = {this.props.entity._id}>{this.props.entity.Alais}</option> 
		)	
    }
}

export default connect()(SelectArtist);
