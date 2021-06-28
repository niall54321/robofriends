import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {

	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>setRobots(users));
	},[])
		
	const onSearchChange = (event) =>{
		setSearchField(event.target.value)
	}

	const filteredRobots= robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchField.toLowerCase())
	})

	if (!robots.length) {
		return <h1 className='tc f1'>Loading...</h1>
	} else {
		return (
			<div  className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<CardList robots={filteredRobots}/>
				</Scroll>
			</div>
		);			
	}
}

export default App