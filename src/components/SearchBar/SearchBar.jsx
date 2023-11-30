import { useContext } from "react"
import { SearchContext } from "../../context/searchContext"

const SearchBar = () => {
  const { setSearchInput } = useContext(SearchContext)

  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }

  return (
    <input type="text" onChange={handleChange} />
  )
}

export default SearchBar