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
			<div className="AlbumList" key={this.props.entity._id}>
				<button><NavLink to='/AddAlbum'> Добавить Альбом </NavLink></button>
				<button><NavLink to='/Artist'> Список Артистов </NavLink></button>
				<button><NavLink to='/'> Общий список </NavLink></button>
				<ul className="team" key={this.props.entity._id}>
				{
					this.props.entity.map((entity) =>
					{
						return(
						<>
							<AlbumRecor entity={entity} key={entity._id} />
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

export default connect(mapStateProps)(AlbumList);
