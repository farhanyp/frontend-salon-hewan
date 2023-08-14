import React, {useState, useEffect} from 'react'
import Booking from '../components/Booking'
import Header from '../components/Header'
import axios from 'axios';

function BookingPage() {
  const [startTime, setStartTime] = useState([]);
  const [endTime, setEndTime] = useState([]);

  useEffect(() => {
    if (startTime.length === 0) {
      fetchProducts()
    }

  }, [startTime, endTime]);

  const fetchProducts = async () => {
    if (startTime.length === 0) {
      axios.get('https://salon-hewan.vercel.app/api/v1/member/booking/times')
      .then((res) => {
        const data = res.data.data;

        const startTimes = data.map(item => formatToIndonesianDate(item.startTime));
        const endTimes = data.map(item => formatToIndonesianDate(item.endTime));

      setStartTime(startTimes);
      setEndTime(endTimes);
      })
      .catch((error)=>{
        console.error('Error fetching products:', error);
      })
    }
  };

  const formatToIndonesianDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
    <Header/>
    <Booking startTimes= {startTime} endTimes ={endTime}/>
    </>
  )
}

export default BookingPage