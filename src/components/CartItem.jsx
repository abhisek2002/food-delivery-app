import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';

const CartItem = ({item}) => {
  const dispatch = useDispatch();
  const deletehandler = ()=>{
    dispatch(RemoveItem(item.id));
  }

  const decrementHandler = ()=>{
    if(item.qty>1){
      dispatch(DecrementQty(item.id));
    }
  }

  const incrementHandler = ()=>{
    dispatch(IncrementQty(item.id));
  }

  return (
    <div className='w-full h-[130px] bg-gray-200 p-5 flex justify-center items-center shadow-md rounded-lg gap-5'>

        <img src={item.image} alt="" className='w-[45%] h-full object-cover rounded-lg' />
        <div className='w-[35%] h-full flex flex-col justify-center items-center gap-1.5'>
            <div className='font-semibold text-md text-center'>{item.name}</div>
            <div className='bg-white w-[50%] h-[32px] flex rounded-lg border-2 border-green-400 font-semibold shadow-lg overflow-hidden'>
               <button onClick={decrementHandler} className='w-[30%] h-full flex justify-center items-center text-green-500 hover:bg-gray-400 hover:text-black transition-all duration-200'>-</button>
               <span className='w-[40%] h-full bg-slate-200 flex justify-center items-center'>{item.qty}</span>
               <button onClick={incrementHandler} className='w-[30%] flex justify-center items-center text-green-500 hover:bg-gray-400 hover:text-black transition-all duration-200'>+</button>
            </div>
        </div>
        <div className='w-[20%] h-full flex flex-col justify-between items-end  py-4'>
          <span className='text-md font-semibold text-green-400'>Rs {item.price}/-</span>
          <RiDeleteBin6Line onClick={deletehandler} className='w-[23px] h-[23px] cursor-pointer text-red-700'/>
        </div>
        
    </div>
  )
}

export default CartItem