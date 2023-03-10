import { film } from "./films.model";
import IndividualFilm from "./individualFilm";
import css from './listFilms.module.css'

export default function ListFilms(props: listFilmsProps){
    return(
        <div className={css.div}>
            {props.films.map(film => <IndividualFilm film={film}  
                                                     key = {film.id}   />)}
        </div>
    )
}
interface listFilmsProps{
    films : film[]
}