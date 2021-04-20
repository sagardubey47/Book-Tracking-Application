import React,{useEffect, useState} from 'react' 
import "./style.css"
import BookContainer from "../BookContainer/BookContainer"
import { useDispatch, useSelector } from 'react-redux'
import { getPopularVolumes } from '../../redux/action/data.action';
import Loading from "../Loading/Loading"
import MenuIcon from '@material-ui/icons/Menu';
import defaultImg from "../../image/defaultImg.jpg";

function ModelView({setModelId, darkMode, model}) {

  const {volumeInfo} = model;

  const authors = volumeInfo ? volumeInfo.authors : ["Mr anonymous"];
  const canonicalVolumeLink = volumeInfo ? volumeInfo.canonicalVolumeLink : null;
  const categories = volumeInfo ? volumeInfo.categories : ["unknown"];
  const description = volumeInfo ? volumeInfo.description : "Not Available";
  const thumbnailLg = volumeInfo ? volumeInfo.imageLinks ? volumeInfo.imageLinks.large: defaultImg : defaultImg;  
  const previewLink = volumeInfo ? volumeInfo.previewLink : null;
  const publishedDate = volumeInfo ? volumeInfo.publishedDate : "2020";
  const publisher = volumeInfo ? volumeInfo.publisher : "Mr anonymous";
  const ratingsCount = volumeInfo ? volumeInfo.ratingsCount : 0;
  const title = volumeInfo ? volumeInfo.title : "unknown: mystry";

     return(<div 
              className="model-container"
              style={darkMode? {backgroundColor: "#444"} : {backgroundColor: "#bbb"}}
            >
              <div className="top-model">
                 <img src={thumbnailLg} alt="thumbnail" /> 
                 <div >
                     <h4 className="row-model"><span>Title:</span> {title}</h4>
                     <p className="row-model"><span>Author: </span> {authors[0]}</p>
                     <p className="row-model"><span>Published Date: </span> {publishedDate} </p>
                     <p className="row-model"><span>Categories: </span> {categories} </p>
                     <p className="row-model"><span>Publisher: </span> {publisher} </p>
                     <p className="row-model"><span>Ratings Count: </span> {ratingsCount} </p>
                     <button 
                       style={darkMode ? {backgroundColor: "#FD7272"} : {backgroundColor: "#3061d7"}}
                      >
                       <a href={previewLink} target="blank">Preview</a>
                     </button> 
                     <button
                       style={darkMode ? {backgroundColor: "#FD7272"} : {backgroundColor: "#3061d7"}}
                      >
                        <a href={canonicalVolumeLink} target="blank">Canonical View</a>
                     </button> 
                     <button 
                        style={darkMode ? {backgroundColor: "#FD7272"} : {backgroundColor: "#3061d7"}}
                        onClick={() => setModelId(null)}
                      > go back</button>
                 </div>
              </div>
              <div className="bottom-model">
                  <p ><span style={{fontWeight:"700"}}>Description: </span> {description} </p>
              </div> 
            </div>
          )
}


function MainBody({darkMode, gridView, setShowNav, setShowForm}) {
    
  const dispatch = useDispatch();

  //const [showModel, setShowModel] = useState(false);
  const [modelId, setModelId] = useState(null);


  useEffect(() => {
    dispatch(getPopularVolumes());
  }, [dispatch])

  const {volumes} = useSelector(state => state.homeVolumes);
  const {model} = useSelector(state => state.modelData);

  console.log(model);

  const handleShowNav = () => {
    setShowNav((prevState) => {
       return !prevState;
    })
  }

  const defaultShow = () => {
    setShowForm(false);
    setShowNav(false);
  }

  console.log(modelId); 
 
    return (
        <div className="mainbody-container" >
            <header>
                Book Library ...
                <span className="menu-icon" onClick={handleShowNav}><MenuIcon /></span>
            </header>
            {
              modelId ? <ModelView setModelId={setModelId} darkMode={darkMode} model={model}/> : (null)
            }
            
            <div className={gridView ? "book-grid": "book-list"}  onClick={defaultShow}>
               {   volumes !== undefined ?  (volumes.map((volume) => {
                            return <BookContainer 
                                        key={volume.id} 
                                        volume={volume} 
                                        darkMode={darkMode} 
                                        gridView={gridView} 
                                        setModelId={setModelId} 
                                    />
                        })) : (<Loading />)    
               }
            </div>
        </div>
    )
}

export default MainBody
