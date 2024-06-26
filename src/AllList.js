import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import AllRecor from './AllRecor';
import {todoAddAll} from './actions';


class AllList extends React.Component {
    
	componentDidMount(){
		fetch('all').then(function(res){
			return res.json();
		}).then((data) =>
		{
			this.props.dispatch(todoAddAll(data));
		});
	}
	
	render() {	
		return (
			<div className="AllList" key="List">
				<button><NavLink to='/Artist'>Список Артистов</NavLink></button>
				<button><NavLink to='/Album'>Список Альбомов</NavLink></button>
				
				{
					this.props.entity.map((entity) =>
					{
						return(
							<div>
							<ul className="team" key={entity._id}>
							<AllRecor entity={entity} key={entity._id} />
							<br></br>
							</ul>
							</div>
						)	
					})
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

export default connect(mapStateProps)(AllList);
