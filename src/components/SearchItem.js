const SearchItem = ({search, setSearch})=>{
    return(
        <form onSubmit={(e)=> e.preventDefault()}>
            <input id='search'
            type="text"
            placeholder="Search Item"
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            />
        </form>
    )
}

export default SearchItem;