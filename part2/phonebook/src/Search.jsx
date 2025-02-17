import { useState } from 'react'

const Search = ({ newSearch, handleSearch }) => {
    return (
        <div>
            search: <input
                value={newSearch}
                onChange={handleSearch}
            />
        </div>
    )

}

export default Search