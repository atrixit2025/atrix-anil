import React from 'react'
import hero1 from '../assets/about_us/about_1.png'
import hero2 from '../assets/about_us/about_2.png'
import hero3 from '../assets/about_us/about_3.png'
import hero4 from '../assets/about_us/about_4.png'
import hero5 from '../assets/about_us/about_5.png'
import hero6 from '../assets/about_us/about_6.png'
import OurSolution from '../Components/OurSolution'
import OurPortfolio from '../Components/OurPortfolio'
import Marquee from "react-fast-marquee";
import AboutSec from '../Components/about_us/AboutSec'
import AboutCta from '../Components/about_us/AboutCta'
import OurKeys from '../Components/about_us/OurKeys'


const aboutData = [
  {
    title: "Our Story",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis impedit cupiditate eius quidem quia quasi, ducimus accusamus ex? Explicabo deserunt nemo sint nihil excepturi magnam dolorem quae necessitatibus distinctio deleniti possimus quia cum dolorum eveniet, qui ab cupiditate velit nobis quisquam natus officia minus facilis! Temporibus quos, quae exercitationem nesciunt neque facilis nulla dolorum doloribus iure vitae expedita perferendis. Cum sit eveniet delectus odio aspernatur. Iusto tempora eveniet eligendi nobis quis consequuntur odio quasi, rem asperiores animi tempore quibusdam veritatis at atque magni necessitatibus quo corporis natus odit! Doloremque repellat tempore sapiente recusandae aliquam ex tempora minima, enim quibusdam. "
  },
  {
    title: "Mission",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis impedit cupiditate eius quidem quia quasi, ducimus accusamus ex? Explicabo deserunt nemo sint nihil excepturi magnam dolorem quae necessitatibus distinctio deleniti possimus quia cum dolorum eveniet, qui ab cupiditate velit nobis quisquam natus officia minus facilis! Temporibus quos, quae exercitationem nesciunt neque facilis nulla dolorum doloribus iure vitae expedita perferendis. Cum sit eveniet delectus odio aspernatur. Iusto tempora eveniet eligendi nobis quis consequuntur odio quasi, rem asperiores animi tempore quibusdam veritatis at atque magni necessitatibus quo corporis natus odit! Doloremque repellat tempore sapiente recusandae aliquam ex tempora minima, enim quibusdam. "
  },
  {
    title: "Vision",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non facilis impedit cupiditate eius quidem quia quasi, ducimus accusamus ex? Explicabo deserunt nemo sint nihil excepturi magnam dolorem quae necessitatibus distinctio deleniti possimus quia cum dolorum eveniet, qui ab cupiditate velit nobis quisquam natus officia minus facilis! Temporibus quos, quae exercitationem nesciunt neque facilis nulla dolorum doloribus iure vitae expedita perferendis. Cum sit eveniet delectus odio aspernatur. Iusto tempora eveniet eligendi nobis quis consequuntur odio quasi, rem asperiores animi tempore quibusdam veritatis at atque magni necessitatibus quo corporis natus odit! Doloremque repellat tempore sapiente recusandae aliquam ex tempora minima, enim quibusdam. "
  },
]


const About = () => {

  // const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6]

  return (
    <>

      <div className="container mx-auto px-4 pt-44">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <img src={hero1} alt="Hero 1" className="w-full" />
          </div>
          <div className="col-span-3">
            <img src={hero2} alt="Hero 2" className="w-full" />
          </div>
          <div className="col-span-3">
            <img src={hero3} alt="Hero 3" className="w-full" />
          </div>
          <div className="col-span-3">
            <img src={hero4} alt="Hero 4" className="w-full" />
          </div>
          <div className="col-span-6">
            <img src={hero5} alt="Hero 5" className="w-full" />
          </div>
          <div className="col-span-3">
            <img src={hero6} alt="Hero 6" className="w-full" />
          </div>
        </div>
      </div>


      <div className="container mx-auto  pt-16 ">
        <h1 className='text-center text-6xl '>About Us</h1>
        <p className="text-center max-w-[1000px] mx-auto" > Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio delectus quod laudantium temporibus reprehenderit. Modi fuga eaque enim distinctio sequi aspernatur, ? Facilis aut pariatur accusantium, perferendis illum fuga hic. </p>
      </div>



      <div className="container mx-auto py-16 space-y-12 pb-16">
        {aboutData.map((item, index) => (
          <div className="row grid grid-cols-12 ">
            <div className='col-span-6 font-bold text-4xl  ' > <h2>{item.title}</h2> </div>
            <div className='col-span-6'  > <p>{item.desc}</p> </div>
          </div>
        ))}
      </div>
      <div className=" text-6xl font-bold relative  pt-10 pb-24 ">
        <div>
          <Marquee className='overflow-hidden'>
            VISIONARY . INNOVATIVE . EFFICIENT . GL ROFESSIONAL . ACCESSIBLE . USER-CENTR EMPOWERING . TRUSTWORTHY . SCALABLE
          </Marquee>
        </div>
        <div className='py-2' >
          <Marquee direction="right" speed={30} className=' overflow-hidden'>
            VISIONARY . INNOVATIVE . EFFICIENT . GL ROFESSIONAL . ACCESSIBLE . USER-CENTR EMPOWERING . TRUSTWORTHY . SCALABLE
          </Marquee>
        </div>
        <div>
          <Marquee className=' overflow-hidden'>
            ACCESSIBLE . USER-CENTR EMPOWERING . TRUSTWORTHY . SCALABLE . VISIONARY . INNOVATIVE . EFFICIENT . GL ROFESSIONAL .
          </Marquee>
        </div>
      </div>
      <AboutCta></AboutCta>
      <OurKeys></OurKeys>
      <AboutSec></AboutSec>
      <OurSolution></OurSolution>
      <OurPortfolio></OurPortfolio>





    </>

  )
}

export default About