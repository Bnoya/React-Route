import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import queryString from "query-string";
import { Characters } from '../models/Characters';
import Card from '../Components/Card';

const SearchScreen = ({history}) => {

  const location = useLocation();

  const {q= ""} = queryString.parse(location.search);
  const [inputValue, setInputState] = useState(q);
  const [characters, setcharacters] = useState([])

  const handelChange = (e) => {
      const value = e.target.value;
      setInputState(value);
  };

  const handelSubmit = (e) => {
    
    e.preventDefault();
    history.push(`?q=${inputValue}`)
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();
      const newValue = Characters.filter(character => character.name.toLocaleLowerCase().includes(value));
      setcharacters(newValue)
    }else {
      setcharacters([])
    }

  };

  useEffect(() => {
    getCharacters()
  }, [q])
  

  return (
    <div className='container'>
        <h1>Search Screen</h1>
        <hr />
        <div className='row'>
          <div className='col-6'>
            <h2>Search</h2>
            <form onSubmit={handelSubmit} >
              <label className='form-label w-100 '>
                Characters: <input type="text" placeholder="New Character" className='form-control' autoComplete='off' value={inputValue} onChange={handelChange}/>


              </label>
              <button type='submit' className='btn btn-info w-50'>Search</button>
            </form>


          </div>
          <div className='col-6'>
            <h2>Results: {characters.length}</h2>
            {
              characters.length === 0 && (<div className='alert alert-warning texty-center'>Please Search a Character</div>)
            }
            {
              characters.map(character => <Card key={character.id} {...character} />)
            }

          </div>
        </div>
    </div>
  )
}

export default SearchScreen;