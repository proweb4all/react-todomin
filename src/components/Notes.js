import React from 'react'

export const Notes = ({notes, onRemove}) => (
    <ul className='list-group'>
        {notes.map(note => (
            <li className='list-group-item note' key={note.id}>
                <div>
                    <small><strong>{new Date().toLocaleString()}</strong></small>
                    <span>{note.title}</span>
                </div>
                <button 
                    type='button'
                    className='btn btn-outline-danger btn-sm'
                    onClick={() => onRemove(note.id)}>
                        &times;
                </button>
            </li>
        ))}
    </ul>
)
