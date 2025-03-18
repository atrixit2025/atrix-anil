import React from 'react'
import about_img from '../../assets/about_us/about_img.webp'
import about_img_2 from '../../assets/about_us/about_img2-jpg.webp'
import about_img_3 from '../../assets/about_us/about_img3-jpg.webp'
import about_img_4 from '../../assets/about_us/about_img4-jpg.webp'

const AboutSec = () => {
    return (
        <div>
            <div className="container mx-auto pb-24">
                <div className='row grid grid-cols-12' >
                    <div className="col-span-6 ">

                        <div className=" grid grid-cols-12 ">
                            <div className="col-span-4">
                                <div className="img-wraper aspect-[4/5] rounded-3xl overflow-hidden p-4"> <img src={about_img} alt="" className=' w-full h-full object-cover rounded-2xl ' /> </div>
                                <div className="img-wraper  aspect-[4/5] rounded-3xl overflow-hidden p-4"> <img src={about_img_2} alt="" className=' w-full h-full object-cover rounded-2xl ' /> </div>
                            </div>

                            <div className="col-span-4 pt-12">
                                <div className="img-wraper  aspect-[4/5] rounded-3xl overflow-hidden p-4 "> <img src={about_img_3} alt="" className=' w-full h-full object-cover rounded-2xl ' /> </div>
                                <div className="img-wraper  aspect-[4/5] rounded-3xl overflow-hidden p-4 "> <img src={about_img_4} alt="" className=' w-full h-full object-cover rounded-2xl' /> </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-span-6 flex flex-col justify-center">
                        <h4 className='text-2xl'>Need dedicated developers to <br /> work on your projects?</h4>
                        <h2 className='text-[52px] leading-14'>Dedicated resources <br />
                            for your project</h2>
                        <p className='my-4' >Hire best-qualified, specialized, remote developers to dedicatedly work on your project in a real sense. Unlike freelancers, our developers will focus their attention and time only on one project - rather working on multiple projects simultaneously, which compromises on quality.</p>
                        <p>The developers we outsource are taken abroad after extensive knowledge check and understanding their practical dexterity - and are available to work on any project on demand. At the same time we have a dedicated backup for each remote developer that will readily available if the situation demands.</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutSec