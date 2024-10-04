import About from '@/Components/About'
import Activefund from '@/Components/Activefund'
import Choosecrowd from '@/Components/Choosecrowd'
import Doubts from '@/Components/Doubts'
import Forraisefund from '@/Components/Forraisefund'
import FundraiserPage from '@/Components/FundraiserPage'
import Heroimg from '@/Components/Heroimg'
import Navbar from '@/Components/Navbar'
import Offer from '@/Components/Offer'
import Provide from '@/Components/Provide'
// import Provide from '@/Components/Provide'
import Raisefundform2 from '@/Components/Raisefundform2'
 import Testimonial from '@/Components/Testimonial'
 
const MainPage = () => {
    return (
        <>
            <Navbar/>
            <Heroimg/>
            <Forraisefund/>
            <Choosecrowd/>
             <Testimonial />
            <Doubts />
            <Raisefundform2/>
             <Offer/>
             <Provide/>
             <About/>
             <Activefund/>
             <FundraiserPage/>
        

         </>
    )
}

export default MainPage