import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ImSpinner } from 'react-icons/im'

const Loader = () => {

  return (
    <div>
        <div className='loader'>
            <Image data-aos={"fade-up"} data-aos-duration={"1200"} className='logo-main' src='/images/name-logo.png' width='300' height='100' />
            <p data-aos={"fade-up"} data-aos-duration={"1500"}>Criamos com excelência!</p>
            <ImSpinner className='spinner' data-aos={"fade-up"} data-aos-duration={"1800"} />
        </div>
    </div>
  );
};

export default Loader;
