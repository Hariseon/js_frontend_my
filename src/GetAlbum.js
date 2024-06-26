import React from 'react';
import {connect} from 'react-redux';


class SelectArtist extends React.Component {
	
	constructor(props) 
	{
		super(props);
		console.log(this.props.artist);
		console.log(this.props.entity.Artist);
	}
	
    render() 
	{
		if(this.props.entity.Artist === this.props.artist){
		return(
			<li className="member">
			<div className="thumb"><img alt="" src={this.props.entity.Photo}/></div>
			<div className="description">
				<h3>  {this.props.entity.name}, {this.props.entity.date} </h3>
				<p> <i> {this.props.entity.AboutAlbum} </i> </p>
			</div>
			</li> 
		)}		
    }
}

export default connect()(SelectArtist);
