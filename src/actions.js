export const TODO_ADD = 'TODO_ADD';
export const TODO_ADD_ALL = 'TODO_ADD_ALL';
export const TODO_DELETE = 'TODO_DELETE';
export const TODO_UPDATE = 'TODO_UPDATE';
export const TODO_ALBUM_ADD = 'TODO_ALBUM_ADD';

export function todoAdd(_id, Alais, name, Photo, Coll){
	return {type:TODO_ADD, _id, Alais, name, Photo, Coll};
}

export function todoAlbumAdd(_id, name, date, Artist, Photo, AboutAlbum, Coll){
	return {type:TODO_ALBUM_ADD, _id, name, date, Artist, Photo, AboutAlbum, Coll};
}

export function todoAddAll(todo_list){
	return {type:TODO_ADD_ALL, todo_list};
}

export function todoDelete(_id){
	return {type:TODO_DELETE, _id};
}

export function todoUpdate(_id){
	return {type:TODO_UPDATE, _id};
}


