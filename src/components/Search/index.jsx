import "./styles.css";
export const Search = (props) =>{

    return (
        <input className="search-input" name= "search" placeholder="Search by Breed.." type="text" onChange={props.handleSearchUpdate} />
      
    )
}
