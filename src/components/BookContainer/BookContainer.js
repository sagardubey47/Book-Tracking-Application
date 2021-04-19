import React from 'react'
import "./style.css"
import defaultImg from "../../image/defaultImg.jpg";

function BookContainer({volume, darkMode, gridView}) { 
        // could be accessed
        // accessInfo,
        // etag,
        // id,
        // saleInfo,
        // searchInfo,
        // {
        //    categories,
        //    language,
        //    publishedDate,
        //    title,
        //    authors,
        // }
    // console.log(volume);

    const { volumeInfo, searchInfo } = volume;
    
    const thumbnail = volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail : defaultImg;
    const categories = volumeInfo.categories ? volumeInfo.categories : ["unknown"];
    const language = volumeInfo.language ? volumeInfo.language : "default:en";
    const publishedDate = volumeInfo.publishedDate ? volumeInfo.publishedDate : "2020";
    const title = volumeInfo.title ? volumeInfo.title : "unknown: mystry"
    const authors = volumeInfo.authors ? volumeInfo.authors : ["Mr anonymous"];
    const textSnippet = searchInfo ? searchInfo.textSnippet : ""
 
    return (
        <div className={gridView ? "book-card": "book-card list"}
             style={darkMode ? {backgroundColor: "#FD7272"} : {backgroundColor: "#3071c7"}}>
            <img height="200" width="170" src={thumbnail} alt="thumbnail" />
            <div className="bottom">
                {
                  gridView ? 
                  (<>
                     <h4 className="limit-text limit-title">{title}</h4>
                     <p className="limit-text limit-author">{authors[0]}</p>   
                  </>) : 
                  (<>
                     <h4 className="limit-text limit-title-list">{`Title: ${title}`}</h4>
                     <p>{`Author: ${authors[0]}`}</p>
                     <p>{`Published Date: ${publishedDate}`} </p>
                     <p>{`Categories: ${categories}`} </p>
                     <p>{`Language: ${language}`} </p>
                     <p className="about">{`About: ${textSnippet}`}</p>
                  </>) 
               }
            </div>
            
        </div>
    )
}

export default BookContainer
