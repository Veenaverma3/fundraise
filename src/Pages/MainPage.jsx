import Choosecrowd from '@/Components/Choosecrowd'
import Doubts from '@/Components/Doubts'
import Forraisefund from '@/Components/Forraisefund'
import Fotter from '@/Components/Fotter'
import Heroimg from '@/Components/Heroimg'
import Navbar from '@/Components/Navbar'
import Testimonial from '@/Components/Testimonial'
import React from 'react'

const MainPage = () => {
    return (
        <>
            <Navbar />
            <Heroimg />
            <Forraisefund />
            <Testimonial />
            <Choosecrowd />
            <Doubts />
            <Fotter />
        </>
    )
}

export default MainPage