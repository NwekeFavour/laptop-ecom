/* eslint-disable no-unused-vars */
import React from 'react';
import Cancel from './help/cancel.svg'

const cancel = () => {
    return (
        <div className='lg:my-5'>
            <img className='w-[70px]' src={ Cancel } alt="cancel-order" />
        </div>
    );
};

export default cancel;