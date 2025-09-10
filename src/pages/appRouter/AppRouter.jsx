import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Register from '../register/Register'
import Wishlist from '../wishlist/Wishlist'
import Cart from '../cart/Cart'
import NotFound from '../notFound/NotFound'
import Layout from '../layout/Layout'
import About from '../about/About'
import MyAccaunt from '../myAccaunt/MyAccaunt'
import Detail from '../detail/Detail'
import Login from '../login/Login'
import LostPassword from '../lostPassword/LostPassword'
import Blog from '../blog/Blog'
import Contact from '../contact/Contact'
import Profile from '../profile/Profile'

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/myAccaunt' element={<MyAccaunt />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/lostPassword' element={<LostPassword />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/product/:id' element={<Detail />} />
                    <Route path='*' element={<NotFound />} />
                </Route>

            </Routes>


        </>
    )
}

export default AppRouter