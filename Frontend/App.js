import './App.css';
import { useState } from 'react';

function App() {
  const [image, setImage] = useState(
    'https://image.shutterstock.com/shutterstock/photos/1454270585/display_1500/stock-vector-outline-add-product-vector-icon-add-product-illustration-for-web-mobile-apps-design-add-product-1454270585.jpg'
  );
  const [pname, setPname] = useState();
  const [description, setDescription] = useState();

  async function clickHandler() {
    const data = { imgUrl: image };
    await fetch('http://localhost:5000/getImgUrl', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      },

      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then((data) => {
        console.log('From Server : ', data);
        setDescription(data.textDescription);
        setPname(data.label);
      })
    );
  }

  return (
    <div className='bg-black h-screen flex justify-evenly items-center text-white '>
      <div className='flex h-[667px] w-[375px] border-[35px] border-gray-600 bg-white  rounded-3xl items-center justify-center relative'>
        <div className='flex flex-col h-[627px] absolute w-[335px] bg-white rounded-3xl'>
          <div className='flex w-full flex-col overflow-y-scroll overflow-x-none'>
            <div className='bg-gray-200 px-3 py-1 rounded-2xl text-black w-fit text-sm h-fit my-2 mx-3'>
              Add new Product &gt; Cake
            </div>
            <div className='mx-3 my-2  w-full justify-center flex flex-col  rounded-lg '>
              <div className='flex items-center'>
                <img
                  src={image}
                  alt='productimg'
                  className='flex justify-center object-cover w-1/2 mr-4 rounded-lg'
                />
                <img
                  src='https://www.pinclipart.com/picdir/big/8-80460_add-plus-plus-sign-circle-png-clipart.png'
                  alt='add'
                  className='bg-white w-1/4 h-1/4 object-contain'
                />
              </div>
              <p className='text-black font-bold text-sm mt-3 mb-1'>
                Insert product img :{' '}
              </p>
              <input
                type='text'
                placeholder='Enter url'
                className='bg-gray-200 w-5/6 ml-3 rounded-lg py-1 px-2 text-sm text-black'
                onChange={(e) => setImage(e.target.value)}
              />
              <button
                className='bg-blue-500 px-3 py-1 w-fit rounded-lg text-sm mx-3 mt-3'
                onClick={() => clickHandler()}
              >
                Generate Details!
              </button>
              <p className='text-black font-bold text-sm mt-3 mb-1'>
                Product Price :{' '}
              </p>
              <input
                type='number'
                placeholder='Enter price'
                className='bg-gray-200 w-5/6 ml-3 rounded-lg py-1 px-2 text-sm text-black'
              />
              {description ? (
                <>
                  <p className='text-black bg-yellow-300 w-fit px-3 rounded-2xl font-bold text-sm mt-3 mb-1'>
                    Generated Name :{' '}
                  </p>
                  <div className='bg-gray-200 w-5/6 ml-3 rounded-lg py-1 px-2 text-sm text-black'>
                    {pname}
                  </div>
                  <p className='text-black bg-yellow-300 w-fit px-3 rounded-2xl font-bold text-sm mt-3 mb-1'>
                    Generated Description :{' '}
                  </p>
                  <div className='bg-gray-200 w-5/6 ml-3 rounded-lg py-1 px-2 text-sm text-black'>
                    {description}
                  </div>
                </>
              ) : (
                ''
              )}
            </div>
            <div className='w-full h-full flex justify-end'>
              <button className='bg-blue-500  px-3 py-1 w-fit rounded-lg text-sm mx-3 mt-3'>
                Add Product!
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className='font-mono text-4xl mb-20'>
          AI generated Product Descriptions
        </p>
        <p className='font-mono text-4xl'>Team Members :</p>
        <p className='font-mono pl-5 mt-5 text-lg'>Karan Dua - 20BAI1012</p>
        <p className='font-mono pl-5 text-lg'>Deepak Mandava - 20BAI1162</p>
        <p className='font-mono pl-5 text-lg'>
          Chirag Chandrashekhar - 20BAI1298
        </p>
        <p className='font-mono pl-5 text-lg'>
          Bitra Bhaskara Yashwant - 20BAI1015
        </p>
      </div>
    </div>
  );
}

export default App;
