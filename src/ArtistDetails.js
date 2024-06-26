import React from 'react';
import {useNavigate, NavLink, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import { todoAddAll} from './actions';
import GetAlbum from './GetAlbum';


class ArtistDetailsInner extends React.Component {
  
	componentDidMount(){
		fetch('album').then(function(res){
			return res.json();
		}).then((data) =>
		{
			this.props.dispatch(todoAddAll(data));
		});
	}

    render() 
	{
		let artist = this.props.location.state.artist;
		return(
		<div className="ArtistList">
			<button><NavLink to='/'>Общий список</NavLink></button>
			<ul className="team" >
			<li className="member">
				<div className="thumb"><img alt="" src={artist.Photo}/></div>
				<div className="description">
					<h3>  {artist.Alais} </h3> 
					<p> <i> {artist.name} </i> </p>
				</div>
			</li>
			</ul>
			<ul className="team" >
				{
					this.props.entity.map((entity) =>
					{
						return(
							<div key={entity._id}>
							<GetAlbum entity={entity} artist={artist._id}/>
							</div>
						)	
					})
				}
			</ul>
			
			
			
		</div>
    )  
    }
}

const ArtistDetails = (props) =>{
  return (
    <ArtistDetailsInner {...props} location={useLocation()} history={useNavigate()}/>
  )
}

function mapStateProps(state)
{
	return {
		entity: [...state.entity]
	}
}

export default connect(mapStateProps)(ArtistDetails);