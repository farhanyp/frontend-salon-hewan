import React, { useState} from 'react'
import { format, parse, addDays } from 'date-fns';
import idLocale from 'date-fns/locale/id'
import { useNavigate } from 'react-router'
import axios from 'axios';

function Booking({startTimes, endTimes}) {
    const [formData, setFormData] = useState({
        ownerName: '',
        phoneNumber: '',
        email: '',
        petName: '',
        petTypes: '',
        startTime: "",
        endTime: "",
        specialNeeds: false,
        paymentStatus: false
      });
    const navigate = useNavigate()


      const handleSubmit = async (e) => {
        e.preventDefault();

        if(formData.specialNeeds){
          if(formData.specialNeeds === "true"){
            formData.specialNeeds = true;
          }else{
            formData.specialNeeds = false;
          }
        }

        if(formData.startTime){
          const originalDate = parse(formData.startTime, "dd MMMM yyyy", new Date(), {
            locale: idLocale,
          });
          formData.startTime = format(originalDate, 'yyyy-MM-dd');
        }

        if(formData.endTime){
          const originalDate = parse(formData.endTime, "dd MMMM yyyy", new Date(), {
            locale: idLocale,
          });
          formData.endTime = format(originalDate, 'yyyy-MM-dd');
        }

        const newFormData = {
          ownerName: formData.ownerName,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          petName: formData.petName,
          petTypes: formData.petTypes,
          startTime: formData.startTime,
          endTime: formData.endTime,
          specialNeeds: formData.specialNeeds,
          paymentStatus: formData.paymentStatus,
        }

          try {
            axios.post("https://salon-hewan.vercel.app/api/v1/member/lodging/create", newFormData)
            .then( (response) => {
            console.log('Data sent successfully:', response.data);
            navigate("/success-booking")

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
      
        if (name === "startTime") {
          
          setFormData((prevData) => ({
            ...prevData,
            startTime: value,
            endTime: "", // Clear endTime when startTime changes
          }));
      
          // Perform additional logic if needed
        } else if (name === "duration") {
          // Parse the duration value to an integer
          const durationValue = parseInt(value, 10);
          
          // Calculate the end time using addDays
          const endTimeDate = addDays(parse(formData.startTime, "dd MMMM yyyy", new Date(), {
            locale: idLocale,
          }), durationValue);
          
          const endTimeFormatted = format(endTimeDate, "dd MMMM yyyy", { locale: idLocale });
      
          setFormData((prevData) => ({
            ...prevData,
            endTime: endTimeFormatted,
          }));
        } else if (name === "specialNeeds") {

          setFormData((prevData) => ({
            ...prevData,
            specialNeeds: value,
          }));
        }

        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      

  return (
    <section
        id="product"
        className=" bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
          <div className='text-center lg:text-4xl lg:pt-32'>
          <h1 className='text-primary text-3xl pb-5 lg:pb-1 lg:text-4xl'>Pemesanan penginapan</h1>
          </div>
          <div className='flex justify-center lg:pt-10'>

          <form onSubmit={handleSubmit} className='pb-10 px-5'>
            <div className="mb-4">
              <label htmlFor="ownername" className="font-medium mb-1">
                Nama Pemilik:
              </label>
              <input type="text" id="ownername" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Masukan Nama" name="ownerName" value={formData.ownerName} onChange={handleInputChange} required/>
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="font-medium mb-1">
                Nomor yang bisa dihubungi:
              </label>
              <input type="text" id="phone" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Masukan Nomor Telepon/hp" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required/>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="font-medium mb-1">
                Email:
              </label>
              <input type="text" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Masukan Email" name="email" value={formData.email} onChange={handleInputChange} required/>
            </div>

            <div className="mb-4">
              <label htmlFor="petName" className="font-medium mb-1">
                Nama Hewan:
              </label>
              <input type="text" id="petName" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Masukan Nama Hewan" name="petName" value={formData.petName} onChange={handleInputChange}/>
            </div>


            <div className="mb-4">
              <label htmlFor="petTypes" className="font-medium mb-1">
                Tipe Hewan:
              </label>
              <input type="text" id="petTypes" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400" placeholder="Masukan Tipe Hewan" name="petTypes" value={formData.petTypes} onChange={handleInputChange}/>
            </div>

            <div className="mb-4">
              <label htmlFor="startTime" className="font-medium mb-1">
                Start Time: 
              </label>
              <select
                id='startTime'
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                value={formData.startTime} // Use value from state
                name="startTime"
                onChange={handleInputChange}
                required
              >
                <option value="Pilih Tanggal Tersedia">
                  Pilih Tanggal Tersedia (wajib)
                </option>
                {
                  startTimes.map((startTime, index) => (
                  <option key={index} value={startTime}>
                    {startTime}
                  </option>
                  ))
                }
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="duration" className="font-medium mb-1">
                Duration (days):
              </label>
              <input
                type="number"
                id="duration"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                name="duration"
                placeholder='Masukan jumlah hari'
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="specialNeeds" className="font-medium mb-1">
                Apakah perlu Kebutuhan Khusus: 
              </label>
              <select
                id='specialNeeds'
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                value={formData.specialNeeds}
                name="specialNeeds"
                onChange={handleInputChange}
              >
                <option>
                  Masukan Pilihan
                </option>
                <option value={true}>
                  perlu
                </option>
                <option value={false}>
                  tidak perlu
                </option>
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
              Pesan
            </button>
          </form>

            
          </div>
    </section>
  )
}

export default Booking