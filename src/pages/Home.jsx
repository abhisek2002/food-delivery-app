import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import Categories from '../Categories'
import food_items from '../food'
import Card from '../components/Card'
import { dataContext } from '../context/UserContext'
import { RxCross2 } from "react-icons/rx";
import CartItem from '../components/CartItem'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const Home = () => {

    let items = useSelector(state => state.cart);
    // console.log(items);
    let subTotal = items.reduce((total, item) => total + item.price * item.qty, 0)
    let delivery = 20
    let tax = subTotal * 0.5 / 100
    let total = Math.floor(subTotal + delivery + tax);

    let { Category, setCategory, input, showCart, setShowCart} = useContext(dataContext);

    const filterFood = (cate) => {
        if (cate === 'all') {
            setCategory(food_items);
        } else {
            setCategory(food_items.filter((item) => item.food_category === cate));
        }
    }

    return (
        <div className='bg-slate-200 w-full min-h-screen relative overflow-hidden'>
            <Nav />
            {!input ? <div className='w-full flex flex-wrap justify-center items-center gap-5 mt-[10px]'>
                {
                    Categories.map((item) => {
                        return <div onClick={() => filterFood(item.name.toLowerCase())} id={item.id} className={`w-[120px] h-[120px] bg-white rounded-md shadow-lg flex flex-col p-3 justify-center items-center hover:bg-green-100 transition-all duration-300 cursor-pointer`}>
                            <div>{item.icon}</div>
                            <p className='mt-[10px] text-sm text-gray-500 font-semibold'>{item.name}</p>
                        </div>
                    })
                }
            </div> : null}

            <div className='flex flex-wrap gap-3 justify-center px-10 py-8'>
                {
                    Category.map((item) => {
                        return <Card id={item.id} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type} />
                    })
                }
            </div>

            <div className={`w-[100%] md:w-[40vw] h-screen px-2 overflow-auto bg-white fixed top-0 right-0 transition-all duration-500 flex flex-col items-center ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='w-full flex justify-between p-3 text-green-500 font-semibold'>
                    <span>Order Items</span>
                    <RxCross2 className='text-2xl cursor-pointer' onClick={() => setShowCart(false)} />
                </div>
                {items.length ? <>
                    <div className='w-full flex flex-col gap-3 px-2'>
                        {
                            items.map((item) => {
                                return <CartItem item={item} />
                            })
                        }
                    </div>
                    <div className='w-full border-t-2 border-b-2 p-6 border-gray-400 mt-4 flex flex-col gap-2'>
                        <div className='w-full flex justify-between items-center'>
                            <span className='font-semibold text-md md:text-lg' >SubTotal</span>
                            <span className='font-semibold text-green-500 text-md md:text-lg'>Rs {subTotal}/-</span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <span className='font-semibold text-md md:text-lg' >Delivery Fee</span>
                            <span className='font-semibold text-green-500 text-md md:text-lg'>{delivery}</span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <span className='font-semibold text-sm md:text-lg' >Taxes</span>
                            <span className='font-semibold text-green-500 text-md md:text-lg'>{tax}</span>
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center p-5'>
                        <span className='font-semibold text-sm md:text-xl' >Total</span>
                        <span className='font-semibold text-green-500 text-md md:text-lg'>Rs {total}/-</span>
                    </div>
                    <button onClick={() => toast.success('Order placed')} className='w-[80%] bg-green-400 p-1.5 rounded-lg font-semibold cursor-pointer hover:bg-green-500 hover:text-white transition-all duration-[200ms]'>Place Your Order</button>
                </> : <div className='text-lg font-semibold text-green-400 pt-7'>Cart is Empty !!</div> }
                
            </div>
        </div>
    )
}

export default Home