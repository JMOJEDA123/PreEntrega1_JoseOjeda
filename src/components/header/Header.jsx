import React from 'react'
import { NavBar } from './NavBar'
import { Cart } from './Cart'


export const Header = () => {

    return (
        <header className='header'>

            <h1>Bitter & Sour</h1>
            <NavBar />
            <Cart />
        </header>
    )
}
