import './Button.css'

import React from 'react'

export default function Button({ id, text }) {
    return (
        <button id={id}>{text}</button>
    )
}