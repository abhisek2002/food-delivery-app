import React from 'react'
// import image1 from '../assets/image1.avif'
import { LuLeafyGreen } from "react-icons/lu"
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import toast from 'react-hot-toast';

const Card = ({id,name,image,price,type}) => {

    let items = useSelector(state=>state.cart)
    // console.log(items);

    const dispatch = useDispatch();

    const addToCartHandler = ()=>{
        dispatch(AddItem({id,name,price,image,qty:1}));
        toast.success('Added to Cart')
    }

  return (
    <div className='w-[210px] h-[290px] bg-white p-2 rounded-lg flex flex-col gap-1.5 shadow-lg hover:border-[1.25px] border-green-500 transition-all duration-[50ms]'>
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
            <img src={image} alt="" className='object-cover' />
        </div>
        <div className='text-xl font-semibold'>
            {name}
        </div>
        <div className='w-full flex justify-between items-center'>
            <div className='text-md font-bold text-green-500'>Rs {price}/-</div>
            <div className='flex justify-center items-center gap-1.5 text-md text-green-500  font-semibold' >
                {type==='veg' ? <LuLeafyGreen/> : <GiChickenOven/> }
                <span>{type}</span>
            </div>
        </div>
        <button onClick={addToCartHandler} className='w-[100%] bg-green-300 p-1.5 rounded-lg font-semibold cursor-pointer hover:bg-green-400 hover:text-white transition-all duration-[200ms]'>Add to Cart</button>
    </div>
  )
}

export default Card