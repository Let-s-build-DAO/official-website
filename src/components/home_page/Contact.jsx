import React from 'react'

const Contact = () => {
  return (
    <div className="p-10 md:15 lg:p-20">
      <h2 className="heading text-white text-2xl md:text-4xl lg:text-5xl text-center">
        Contact Us
      </h2>

      {/* contact form */}
      <div className="mt-10 md:mt15 lg:20 w-full">
        {/* enter email here to receive mail */}
        <form className="w-full" action="https://formsubmit.co/email" method="POST" >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="label"
                htmlFor="grid-first-name"
              >
                Full Name
              </label>
              <input
                required
                className="input leading-tight focus:outline-none"
                id="grid-first-name"
                type="text"
                name='name'
                placeholder="Enter Full Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="label"
                htmlFor="grid-last-name"
              >
                Email
              </label>
              <input
                required
                className="input leading-tight focus:outline-none focus:border-gray-500"
                id="grid-last-name"
                type="email"
                name='email'
                placeholder="Enter Email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="label"
                htmlFor="grid-first-name"
              >
                Location
              </label>
              <input
                required
                className="input mb-3 leading-tight focus:outline-none"
                id="grid-first-name"
                type="text"
                name='location'
                placeholder="Enter Current Location"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="label"
                htmlFor="grid-last-name"
              >
                Phone Number
              </label>
              <input
                required
                className="input leading-tight focus:outline-none focus:border-gray-500"
                id="grid-last-name"
                type="number"
                name='phone'
                placeholder="Enter phone number"
              />
            </div>
          </div>
          {/* text area */}
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="label"
                htmlFor="grid-password"
              >
                Message
              </label>
              <textarea
                className="input mb-3 leading-tight focus:outline-none focus:border-gray-500 h-48 resize-none"
                placeholder="Your message here..."
                name='message'
                maxLength="500"
              ></textarea>
            </div>
          </div>
          {/* submit button */}
          <div className="flex justify-center">
            <div className="w-full mx-auto">
              {/* input submit */}
              <input className="block bg-main cursor-pointer	 text-black text-base font-bold mx-auto px-7 py-3 rounded transition duration-700 ease-in-out" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact