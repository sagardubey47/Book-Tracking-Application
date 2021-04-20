import React from 'react'
import "./style.css"
import defaultImg from "../../image/defaultImg.jpg";
import {useDispatch} from "react-redux"
import { getModel } from '../../redux/action/modelData.action';

function BookContainer({volume, darkMode, gridView, setModelId}) { 

    const { volumeInfo, searchInfo, id} = volume;
    const dispatch = useDispatch();
    
    // to handle fallbacks
    const thumbnail = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : defaultImg;
    const categories = volumeInfo.categories ? volumeInfo.categories : ["unknown"];
    const language = volumeInfo.language ? volumeInfo.language : "default:en";
    const publishedDate = volumeInfo.publishedDate ? volumeInfo.publishedDate : "2020";
    const title = volumeInfo.title ? volumeInfo.title : "unknown: mystry"
    const authors = volumeInfo.authors ? volumeInfo.authors : ["Mr anonymous"];
    const textSnippet = searchInfo ? searchInfo.textSnippet : ""

    const handleClick = () => {
         setModelId(id);
         dispatch(getModel(id))
    }
 
    return (
        <div 
             className={gridView ? "book-card": "book-card list"}
             style={darkMode ? {backgroundColor: "#FD7272"} : {backgroundColor: "#3071c7"}}
             onClick={handleClick}
        >
            <img height="200" width="170" src={thumbnail} alt="thumbnail" />
            <div className="bottom">
                {
                  gridView ?  
                  (<>
                     <h4 className="limit-text limit-title">{title}</h4>
                     <p className="limit-text limit-author">{authors[0]}</p>   
                  </>) : 
                  (<>
                     <h4 className="limit-text limit-title-list"><span>Title:</span> {title}</h4>
                     <p><span>Author: </span> {authors[0]}</p>
                     <p><span>Published Date: </span> {publishedDate} </p>
                     <p><span>Categories: </span> {categories} </p>
                     <p><span>Language: </span> {language} </p>
                     <p className="about"><span>About: </span> {textSnippet}</p>
                  </>) 
               }
            </div>
            
        </div>
    )
}

export default BookContainer
