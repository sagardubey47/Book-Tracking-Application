import React from 'react'
import "./style.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
//import ToggleOffIcon from '@material-ui/icons/ToggleOff';
//import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import AppsIcon from '@material-ui/icons/Apps';
import ViewListIcon from '@material-ui/icons/ViewList';

function Navbar({darkMode, setDarkMode, gridView, setGridView}) {

    const handleMode = () => {
        setDarkMode((prevMode) => {
            return !prevMode;
        })
    }

    const handleView = () => {
       setGridView((prevView) => {
         return !prevView;
       })
    }

    return ( 
        <div className="navbar-container">
            <div className="library">
               <h3>Library</h3>
               <div className="my-books row">
                  <PlayCircleOutlineIcon /> <span>My Books</span>
               </div>
               <div className="new-book row">
                  <AddCircleOutlineIcon size={23}/> <span>Add New Book</span>
               </div>
            </div>
            <div className="settigs">
                <h3>Settings</h3>  
                <div className="mode row" onClick={handleMode}> 
                <InvertColorsIcon /> <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
                </div>
                <div className="row" onClick={handleView}>
                    <AppsIcon /> <ViewListIcon /> <span>{gridView ? "List View":"Grid View"}</span> 
                </div>
            </div>
        </div>
    )
}

export default Navbar
