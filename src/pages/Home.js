import React, {useContext, useEffect} from 'react'
import {Form} from '../components/Form'
import { Notes } from '../components/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Loader } from '../components/loader'
export const Home = () => {
    const {loading, notes, fetchNotes} = useContext(FirebaseContext)
    useEffect(() => {
        fetchNotes()
    }, [])
    // const notes = new Array(3)
    //         .fill('')
    //         .map((_, i) => ({id: i, title: `Note ${i + 1}`}))
    return (
        <>
            <Form />
            <hr/>
            {loading
                ? <Loader /> : <Notes notes={notes} />
            }
        </>
    )
}