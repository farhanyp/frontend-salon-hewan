import React, { useState} from 'react'
import axios from 'axios';

function Booking() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 3);
    const [formData, setFormData] = useState({
        ownerName: '',
        phoneNumber: '',
        email: '',
        petName: '',
        petTypes: '',
        startTime: "2023-08-10",
        endTime: "2023-08-10",
        specialNeeds: false,
        paymentStatus: false
      });


      const handleSubmit = async (e) => {
        e.preventDefault();



        console.log(formData)

        try {

          axios.post("https://salon-hewan.vercel.app/api/v1/member/lodging/create", formData)
        .then( (response) => {
          console.log('Data sent successfully:', response.data);
        })
        .catch(error => {
            console.error('Login error:', error.response.data);
          });

        } catch (error) {
          console.error('Error sending data:', error);
        }
      };

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));

      };

  return (
    <section
        id="product"
        className="lg:h-[100vh] bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
          {/* <div className='flex justify-center lg:pt-32 lg: pb-20 text-3xl'>
          <h1 className='text-primary'>Form Pengiriman Data Ke API</h1>
          </div> */}
          <div className='flex justify-center lg:pt-28'>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="ownername" className="font-medium mb-1">
                Owner Name:
              </label>
              <input type="text" id="ownername" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Enter your Name" name="ownerName" onChange={handleInputChange}/>
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="font-medium mb-1">
                Phone number:
              </label>
              <input type="text" id="phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Enter your Phone Number" name="phoneNumber" onChange={handleInputChange}/>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="font-medium mb-1">
                Email:
              </label>
              <input type="text" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Enter your Email" name="email" onChange={handleInputChange}/>
            </div>

            <div className="mb-4">
              <label htmlFor="petName" className="font-medium mb-1">
                Pet Name:
              </label>
              <input type="text" id="petName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Enter your Pet Name" name="petName" onChange={handleInputChange}/>
            </div>


            <div className="mb-4">
              <label htmlFor="petTypes" className="font-medium mb-1">
                Pet Type:
              </label>
              <input type="text" id="petTypes" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Enter your Pet Type" name="petTypes" onChange={handleInputChange}/>
            </div>

            {/* <div className="mb-4">
              <label htmlFor="startTime" className="font-medium mb-1">
                Start Time:
              </label>
              <input type="text" id="startTime" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Enter your Start Time" name="startTime" onChange={handleInputChange}/>
            </div>

            <div className="mb-4">
              <label htmlFor="endTime" className="font-medium mb-1">
                End Time:
              </label>
              <input type="text" id="endTime" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Enter your End Time" name="endTime" onChange={handleInputChange}/>
            </div> */}
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Login
            </button>
          </form>

            
          </div>
    </section>
  )
}

export default Booking