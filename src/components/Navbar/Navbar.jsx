import React from 'react'
import Notification from '../notification/Notification'
import Header from '../header/Header'
import Search from '../Search/Search'
import Links from '../links/Links'

const Navbar = () => {
    return (
        <>
                <Notification/>
                <Header/>
                <Search/>
                <Links/>
        </>
    )
}

export default Navbar