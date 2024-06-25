import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import AllRecor from './AllRecor';
import {todoAddAll} from './actions';


class ToDoList extends React.Component {
    
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
			<div className="AllList">
				<button><NavLink to='/Artist'>Список Артистов</NavLink></button>
				<button><NavLink to='/Album'>Список Альбомов</NavLink></button>
				<ul class="team">
				{
					this.props.entity.map((entity) =>
					{
						return(
						<>
							<AllRecor entity={entity} key={entity._id} />
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

export default connect(mapStateProps)(ToDoList);
