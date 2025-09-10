import React from 'react'
import Hero from '../../components/hero/Hero'
import Category from '../../components/category/Category'
import ShopNow from '../../components/shopNow/ShopNow'
import OurNews from '../../components/ourNews/OurNews'
import Dastavka from '../../components/dastavka/Dastavka'
import BuHafta from '../../components/buHafta/BuHafta'
import Toast from '../../components/toast/Toast'
import Product from '../../components/product/Product'
import Carusel from '../../components/carusel/Carusel'
import Kategory from '../../components/Kategory/Kategory'

const Home = () => {
    return (
        <>
            <Hero />
            {/* <Carusel/> */}
            <Kategory/>
            {/* <Category /> */}
            <BuHafta/>
            <Product />
            <ShopNow />
            <OurNews />
            <Dastavka/>
            <Toast/>
        </>
    )
}

export default Home