import React from 'react'

const OurKeys = () => {
    return (
        <div className=''>
            <div className="container mx-auto">
                <div className=" grid md:grid-cols-3 grid-cols-1  gap-10  ">
                    <h2 className="text-6xl font-bold md:mb-8    md:text-end    tracking-wider">What sets <br /> us apart</h2>

                    <div className='w-full max-w- flex items-end'>
                        <svg className='' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477 65">
                            <path fill="#2f2f2f" d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM475 3L475.255 3.42984L476.82 2.5H475V3ZM438.668 65L441.872 60.197L436.111 59.8239L438.668 65ZM3 3.5H475V2.5H3V3.5ZM474.745 2.57016C459.928 11.3742 441.341 27.8789 438.461 60.47L439.457 60.5581C442.3 28.3895 460.613 12.1303 475.255 3.42984L474.745 2.57016Z"></path>
                        </svg>
                    </div>
                    <p className=' md:px-2 px-1 text-(--gray)  flex items-end  justify-start font-bold'>
                        Digital agencies can vary in size and specialization. Some may focus on specific niches, such as healthcare or e-commerce, while others may offer a comprehensive.
                    </p>
                </div>
                <div className="keys-cards-wrapper grid grid-cols-12">
                    <div className="col-span-4">
                        <div className="key-img-card">
                            <img src="https://visiontrek.in/wp-content/uploads/2022/12/value.svg" alt="" />
                        </div>
                        <h3>Values</h3>
                        <p>Ethical solutions and guided by a moral compass we add value to our client's lives through our products and solutions.</p>
                    </div>


                </div>

            </div>



        </div>
    )
}

export default OurKeys