import Loading from "../utils/charging";
import { film } from "./films.model";
import IndividualFilm from "./individualFilm";
import css from './listFilms.module.css'

export default function ListFilms(props: listFilmsProps){
if(!props.films){
    return <Loading />
}else if(props.films.length === 0){
    return <>No films to show</>
}else{
    return(
        <div className={css.div}>
            {props.films.map(film => <IndividualFilm film={film}  
                                                     key = {film.id}   />)}
        </div>
    )
}
 
}
interface listFilmsProps{
    films?: film[]
}