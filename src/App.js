import React from 'react';
import {Provider, connect} from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import AllList from './AllList';
import ArtistList from './ArtistList';
import AlbumList from './AlbumList';
import ArtistAdd from './ArtistAdd';
import AlbumAdd from './AlbumAdd';
import AlbumUpdate from './AlbumUpdate';
import ArtistUpdate from './ArtistUpdate';
import ArtistDetails from './ArtistDetails';


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
							<Route path="/AddArtist" element={<ArtistAdd />} />
							<Route path="/AddAlbum" element={<AlbumAdd />} />
							<Route path="/AlbumUpdate" element={<AlbumUpdate />} />
							<Route path="/ArtistUpdate" element={<ArtistUpdate />} />
							<Route path="/ArtistDetails" element={<ArtistDetails />} />
						</Routes>
					</Router>
				</Provider>
			</div>
		);
    }
}

export default connect()(App);
