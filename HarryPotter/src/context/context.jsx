import { useEffect } from "react";
import { createContext, useState  } from "react";
import axios from 'axios';

export const HarryPotterContext = createContext();

export const HarryPotterContextProvider = ( { children } ) => {

    const URL = 'http://hp-api.herokuapp.com/api/characters';

    const [ characters, setCharacters ] = useState([]);
    const [ teachers, setTeachers ] = useState([]);

    const getCharacters = async() => {
        const api = await axios.get(`${URL}`);
        const infoData = api.data;
        setCharacters( infoData );
    }

    const getTeachers = async() => {
        const api = await axios.get(`${URL}/staff`);
        const infoData = api.data;
        setTeachers( infoData );
    }

    useEffect( () => {
        getCharacters();
        getTeachers();
    }, []);

    return (
        <HarryPotterContext.Provider value={{ characters, teachers }}>
            { children }
        </HarryPotterContext.Provider>
    )
}