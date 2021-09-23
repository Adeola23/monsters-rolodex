import React, {useState} from "react";

import './search.css'
//import React, {useState} from "react";

export const Search = ({placeholder, handleChange}) =>
    <input className={'search'} type="search" placeholder={placeholder}
           onChange={handleChange}/>
