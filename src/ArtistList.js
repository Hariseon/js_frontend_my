import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import ArtistRecor from './ArtistRecor';
import {todoAddAll} from './actions';


class ArtistList extends React.Component {
    
		componentDidMount(){
		fetch('artist').then(function(res){
			return res.json();
		}).then((data) =>
		{
			this.props.dispatch(todoAddAll(data));
		});
	}
	
	
	render() {
		return (
			<div className="ArtistList" key={this.props.entity._id}>
				<button><NavLink to='/AddArtist'> Добавить Артиста </NavLink></button>
				<button><NavLink to='/Album'> Список Альбомов </NavLink></button>
				<button><NavLink to='/'>Общий список</NavLink></button>
				<ul class="team" key={this.props.entity._id}>
				{
					this.props.entity.map((entity) =>
					{
						return(
							<>
							<ArtistRecor entity={entity} key={entity._id} />
							<br></br>
							</>
						)	
					})
				}
				</ul>
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

export default connect(mapStateProps)(ArtistList);
