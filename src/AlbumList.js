import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import AlbumRecor from './AlbumRecor';
import {todoAddAll} from './actions';


class AlbumList extends React.Component {
    
	componentDidMount(){
		fetch('album').then(function(res){
			return res.json();
		}).then((data) =>
		{
			this.props.dispatch(todoAddAll(data));
		});
	}
	
	render() {
		return (
			<div className="AlbumList">
				<button><NavLink to='/AddAlbum'> Добавить Альбом </NavLink></button>
				<button><NavLink to='/Artist'> Список Артистов </NavLink></button>
				<button><NavLink to='/'> Общий список </NavLink></button>
				<ul className="team">
				{
					this.props.entity.map((entity) =>
					{
						return(
							<div key={entity._id}>
							<AlbumRecor entity={entity}  />
							<br></br>
							</div>
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

export default connect(mapStateProps)(AlbumList);
