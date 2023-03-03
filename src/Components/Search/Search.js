import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { mockedProducts } from '../Utils/Products'
import { fetchCopyDrinks } from '../Utils/FetchCopyDrinks'
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemList from "../ItemList/ItemList";
import React from 'react'
import Home from "../Pages/Home/Home";
import SearchResults from "../Pages/SearchResults/SearchResults";
import { useNavigate } from "react-router-dom";


let selectedProduct = {}
let userInput = ""


function Search() {
    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const [userData, setUserData] = useState({});
    const [selected, setSelected] = useState({});

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const onSubmit = (e) => {

        e.preventDefault();
        userInput = value
        navigate(`/search/${userInput}`)
        setValue("")
    }

    return (
        <div>

            <form className="Form" onSubmit={onSubmit}  >
                <TextField
                    placeholder="Buscar usuario"
                    variant="outlined"
                    className="Textfield"
                    value={value}
                    onChange={onChange}
                />
                <button className="btn" type="submit">
                    Buscar
                </button>
            </form>
        </div>
    )
}

export default Search