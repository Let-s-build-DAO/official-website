import React from 'react'
import LineBg from '../../assets/linebg.png';


const Newsletter = () => {
  return (
    <div
      className="p-10 md:15 lg:p-20"
      style={{ backgroundImage: `url(${LineBg})` }}
    >
      <h2 className="heading text-white text-2xl md:text-4xl lg:text-5xl text-center">
        Join Our Newsletter
      </h2>
      <p className='text-main text-center mt-5'>Subscribe to our email newsletter today!!</p>

      <div className="mt-5 md:mt10 lg:20 w-full  m-auto">
        {/* enter email here to receive mail */}
        <form className="w-full max-w-lg m-auto" action="https://formsubmit.co/your@email.com" method="POST" >
          <div className="flex-none	 md:flex	 items-center py-2">
            <input
              required
              className="input mr-5"
              type="text"
              placeholder="Enter Email"
              name='newsletter email'
              aria-label="Full name"
            />
            <input className="block bg-main cursor-pointer border-white text-black text-base font-bold mx-auto px-10 py-3 rounded transition duration-700 ease-in-out mt-5 md:mt-0 " type="submit" value="Subscribe" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Newsletter