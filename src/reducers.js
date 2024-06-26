import {combineReducers} from 'redux';

import {TODO_ADD, TODO_ALBUM_ADD, TODO_ADD_ALL, TODO_DELETE, TODO_UPDATE} from './actions';

function todo (state = [], action)
{
	switch(action.type)
	{
		case TODO_ADD: 
			return [
				...state, 
				{
					_id: action._id, 
					Alais: action.Alais, 
					name: action.name, 
					Photo: action.Photo,
					Coll: action.Coll
				}
			]
		case TODO_ALBUM_ADD: 
			return [
				...state, 
				{
					_id: action._id, 
					name: action.name, 
					date: action.date,
					Artist: action.Artist,					
					Photo: action.Photo,
					AboutAlbum: action.AboutAlbum,
					Coll: action.Coll
				}
			]
		case TODO_ADD_ALL:
			return[
				...action.todo_list
			]
		case TODO_DELETE:
			return state.filter(function(entit) 
			{
				return entit._id !== action._id;
			})
		case TODO_UPDATE:
			return state.map(function(entit){
				if (entit._id === action._id){
					return {...entit}
				}
				return entit
			})
		default:
			return state
	}
}

export default combineReducers({
	entity: todo
})