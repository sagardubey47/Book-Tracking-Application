import React,{useEffect} from 'react' 
import "./style.css"
import BookContainer from "../BookContainer/BookContainer"
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVolumes } from '../../redux/action/data.action';
import Loading from "../Loading/Loading"
import MenuOpenIcon from '@material-ui/icons/MenuOpen';


function MainBody({darkMode, gridView}) {
    
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVolumes());
  }, [dispatch])

  const {volumes} = useSelector(state => state.homeVolumes.volumes);

  console.log(volumes);
 
    return (
        <div className="mainbody-container">
            <header>
                Book Library ...
                <span className="menu-icon"><MenuOpenIcon /></span>
            </header>
            <div className={gridView ? "book-grid": "book-list"}>
               {   volumes !== undefined ?  (volumes.map((volume) => {
                            return <BookContainer key={volume.id} volume={volume} darkMode={darkMode} gridView={gridView} />
                        })) : (<Loading />)    
               }
            </div>
        </div>
    )
}

export default MainBody
