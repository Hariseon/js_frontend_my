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
				<ul className="team">
				{
					this.props.entity.map((entity) =>
					{
						return(
							<div key={entity._id}>
							<AllRecor entity={entity}/>
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

export default connect(mapStateProps)(AllList);
