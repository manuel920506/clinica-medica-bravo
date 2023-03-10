import React from 'react'; 
import './App.css';
import { film } from './films/films.model';
//import IndividualFilm from './films/individualFilm'; 
import spider_man_path from './photos/Spider_Man_Far_from_Home.jpg';
import moana_path from './photos/moana.jpg';
import avatar_path from './photos/avatar.jpg';
import soul_path from './photos/soul.jpg';

import ListFilms from './films/listFilms';
 
function App() {
  const filmOnTheBillboard : film[] = [
    {
      id: 1,
      title: 'Spider-Man: Far from Home',
      poster: spider_man_path
    },
    {
      id: 2,
      title: 'Moana',
      poster: moana_path
    },
    {
      id: 3,
      title: 'Avatar',
      poster: avatar_path
    }
  ]

  const UpcomingFilmReleases : film[] = [
    {
      id: 4,
      title: 'Soul',
      poster: soul_path
    }
  ]
 
  return (
    <> 
    <h3>Films On The Billboard</h3>
    <ListFilms films={filmOnTheBillboard} />

    <h3>Upcoming film releases</h3>
    <ListFilms films={UpcomingFilmReleases} />
    </>
  );
}

export default App;
