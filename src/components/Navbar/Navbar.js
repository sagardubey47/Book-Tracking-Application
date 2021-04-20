import React,{useState} from 'react'
import "./style.css"
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import ViewListIcon from '@material-ui/icons/ViewList'; 
import {useDispatch, useSelector } from "react-redux";
import { searchVolumes } from '../../redux/action/data.action';


function SearchForm({darkMode, showForm, setShowForm}) {
    
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        let inputValue = e.target.value;
        setValue(inputValue);
    }

    const handleSubmit = (e) => {
         e.preventDefault();
        dispatch(searchVolumes(value));
        setValue("");
    }

    return (
      <form className={showForm ? "search-form show": "search-form"} onSubmit={handleSubmit}>
          <input 
          placeholder="search your fav book.."
          value={value}  
          onChange={handleChange}  
          />
          <button 
          className={darkMode ? "dark-button": "light-button"}
          onClick={() => setShowForm(false)}
          >Go</button>
      </form>
    )
}

function Navbar({darkMode, setDarkMode, gridView, setGridView, showNav, showForm, setShowForm}) {
    
    
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
        <>
            <SearchForm darkMode={darkMode} showForm={showForm} setShowForm={setShowForm}/>
            <div 
            className={ showNav ? "navbar-container open" : "navbar-container"}
            style={darkMode ? {backgroundColor:"#111"} : {backgroundColor:"#eee"}}
            >
                <div className="library">
                <h3>Library</h3>
                <div className="my-books row">
                    <PlayCircleOutlineIcon /> <span>My Books</span>
                </div>
                <div className="new-book row">
                    <AddCircleOutlineIcon /> <span>Add New Book</span>
                </div>
                <div className="new-book row" onClick={() => setShowForm(true)}>
                    <SearchIcon /> <span>Search</span>
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
        </>
    )
}

export default Navbar
