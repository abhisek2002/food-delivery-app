import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../context/UserContext';
import food_items from '../food';
import { useSelector } from 'react-redux';


const Nav = () => {

  let {input,setInput,Category,setCategory,setShowCart} = useContext(dataContext);

  useEffect(()=>{
    let newList = food_items.filter((item)=> item.food_name.toLowerCase().includes(input.toLowerCase()));
    setCategory(newList);
  },[input])

  let items = useSelector(state=>state.cart);
  // console.log(items)

  return (
    <div className='w-full h-[80px] flex justify-between items-center px-10'>
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-lg cursor-pointer'>
            <MdFastfood className='w-[30px] h-[30px] text-green-500' />
        </div>

        <form onSubmit={(e)=>e.preventDefault()} action="" className='bg-white w-[35%] md:w-[50%] h-[60px] flex items-center px-5 gap-5 rounded-md shadow-md lg:w-[70%]' >
            <FaSearch className='text-green-400 w-[20px] h-[20px]' />
            <input type="text" placeholder='Search items...' className='w-[100%] outline-none text-[15px] md:text-[23px]' onChange={(e)=>setInput(e.target.value)} value={input} />
        </form>

        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-lg relative cursor-pointer' onClick={()=>setShowCart(true)}>
            <span className='absolute top-0 right-1.5 text-green-700 font-bold text-[18px]'>{items.length}</span>
            <FiShoppingBag className='w-[30px] h-[30px] text-green-500' />
        </div>
    </div>
  )
}

export default Nav