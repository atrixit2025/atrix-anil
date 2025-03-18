import React from 'react'
import Button from '../Button'

const AboutCta = () => {
    return (
        <div className='pb-14'>
            <div className="container mx-auto">
                <div className="cta-wrapper bg-black/35 flex justify-between items-center p-14">
                    <h2 className=' text-4xl font-bold '>
                        Let’s create <br></br>
                        the best journey with us
                    </h2>

                    <Button mybtn={"Contact Us"}  ></Button>
                </div>
            </div>
        </div>
    )
}

export default AboutCta