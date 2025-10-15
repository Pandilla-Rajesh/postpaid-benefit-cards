import { Padding } from '@mui/icons-material'
import React, { useCallback, useState } from 'react'

const PriceForm=()=>{

  const [price, setPrice] = useState("")
  const [error, setError] = useState("")

//   const handleChange=(e)=>{
//     setPrice(e.target.value)
//   }

//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     alert(`Submitted: ${price}`)
//     setPrice("")
//   }

const handleChange=useCallback((e)=>{
    let value = Number(e.target.value)
    if(value < 10) value = 1
    if(value > 1000) value = 100
    setPrice(value)
    console.log(value, 'value defined')

    if(!value){
        setError("Price is Required")
    }else if(Number(value) < 10){
        setError("Minimum price must be 10")
    }else if(Number(value) > 1000){
        setError("maximum price alowed is 1000")
    }else{
        setError("")
    }

}, [])

const handleSubmit = useCallback((e) => {
  e.preventDefault();

  if (error || !price) {
    alert('Please fix the error before submitting');
    return;
  }

  alert(`✅ Submitted Price: ${price}`);
}, [price, error]);

const styles = {

    page:{
        Padding:'20px',
    }
}

    return(
        <>
          <section className=' bg-purple-800 py-6' style={styles.page}>
             <article className='container mx-auto'>
                <div className=''>
                    <h2 className='text-3xl text-center text-white font-semibold'>
                        Price Form Component
                    </h2>
                </div>
                <div className='max-w-full flex items-center justify-center my-5'>
                    <form onSubmit={handleSubmit}>
                        <label for="price" className='block text-uppercase text-sm text-white mb-3
                        font-semibold'>
                            Enter Price
                        </label>
                        <div className='flex items-center gap-3'>
                        <div>
                             <input type="number" onChange={handleChange} max='1000' min='10'
                        value={price} name='price' placeholder='Enter Price'
                        className={`w-full border border-gray-300 rounded shadow-sm px-4 py-4`} />
                            {error && <p>{error}</p>}
                        </div>
                       
                         <div>
                            <button type='submit' className={` px-4 py-4 rounded font-semibold 
                        ${price ? 'bg-cyan-500 text-slate-800' : 'bg-fuchsia-400 text-slate-50'}`}
                         disabled={!!error || !price}>
                            {price ? 'Submit' : 'Disabled'}
                         </button>
                         </div>

                        </div>
                    
                    </form>
                </div>
             </article>
          </section>
        </>
    )
}

export default PriceForm