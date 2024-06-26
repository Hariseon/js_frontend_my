import React from 'react';
import {Provider, connect} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import AllList from './AllList';
import ArtistList from './ArtistList';
import AlbumList from './AlbumList';
import ToDoTaskAdd from './ToDoTaskAdd';
import AlbumAdd from './AlbumAdd';
import Updater from './Updater';


class App extends React.Component {
	
	render() {
		return (
			<div className="App">
				<Provider store={this.props.store}>
					<Router>
						<Routes>
							<Route path="/" element={<AllList />} />
							<Route path="/Artist" element={<ArtistList />} />
							<Route path="/Album" element={<AlbumList />} />
							<Route path="/AddArtist" element={<ToDoTaskAdd />} />
							<Route path="/AddAlbum" element={<AlbumAdd />} />
							<Route path="/UpdateAlbum" element={<Updater />} />
						</Routes>
					</Router>
				</Provider>
			</div>
		);
    }
}

export default connect()(App);
