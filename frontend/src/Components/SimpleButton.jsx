import React from 'react'

const SimpleButton = ({ buttonName }) => {
    return (
        <>
            <button className='py-2 px-5 rounded-3xl bg-gradient-to-r from-[var(--blue)]  to-[var(--green)]' > {buttonName}</button>
        </>
    )
}

export default SimpleButton