import React from 'react'

function Product({products}) {

  return (
    <>
        <section
        id="product"
        className="lg:h-[100vh] bg-white lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">
          <div className='text-center text-3xl mb-5 lg:text-4xl lg:pt-32'>
          <h1 className='text-primary'>Produk yang tersedia</h1>
          </div>
          <div className='flex justify-center lg:pt-10'>
          <table className='border-1 border-primary'>
                  <thead>
                    <tr>
                      <td className='text-center text-secondary font-bold border-2 border-black'>
                        <p className='lg:px-6'>No</p>
                      </td>
                      {/* <td className='text-center text-secondary font-bold border-2 border-black'>
                        <p className='lg:px-6'>Image</p>
                      </td> */}
                      <td className='text-center text-secondary font-bold border-2 border-black'>
                        <p className='lg:px-6'>Name</p>
                      </td>
                      <td className='text-center text-secondary font-bold border-2 border-black'>
                        <p className='lg:px-6'>QTY</p>
                      </td>
                      <td className='text-center text-secondary font-bold border-2 border-black'>
                        <p className='lg:px-6'>Description</p>
                      </td>
                      <td className='text-center text-secondary font-bold border-2 border-black'>
                        <p className='lg:px-6'>Price</p>
                      </td>
                    </tr>
                  </thead>
                <tbody>

            {
              (products.data === undefined) ?
              <tr>
                <td className='text-center border-2 border-black' colSpan={6}>
                  <p className='px-6'>Tidak Ada Data</p>
                </td>
              </tr> 
              :
              products.data.map((product,index) => {
                index = index+1
                const number = product.price
                const formattedNumber = number.toLocaleString('id-ID');
                return(
                
                  <tr key={index} className='text-2xl'>
                    <td className='text-center border-2 border-black'>
                      <p className='px-6'>{index}</p>
                    </td>
                    {/* <td className='text-center border-2 border-black'>
                      <img className='w-40 p-2' src="assets/image/default.png" alt='image'/>
                    </td> */}
                    <td className='text-center border-2 border-black'>
                      <p className='px-6'>{product.name}</p>
                    </td>
                    <td className='text-center border-2 border-black'>
                      <p className='px-6'>{product.qty}</p>
                    </td>
                    <td className='text-center border-2 border-black'> 
                      <p className='px-6'>{product.desc}</p>
                    </td>
                    <td className='text-center border-2 border-black'>
                      <p className='px-6'>{formattedNumber}</p>
                    </td>
                  </tr>
                )
              })
            }

            </tbody>
          </table>
          </div>
        </section>
    </>
  )
}

export default Product