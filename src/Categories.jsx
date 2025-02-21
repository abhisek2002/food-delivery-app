import React from 'react'
import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { MdOutlineRamenDining } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Categories = [
    {
        id: 1,
        name: 'All',
        icon: <TiThSmall className='w-[60px] h-[60px] text-green-400 text-center' />
    },
    {
        id: 2,
        name: 'Breakfast',
        icon: <MdOutlineFreeBreakfast className='w-[60px] h-[60px] text-green-400 text-center' />
    },
    {
        id: 3,
        name: 'Soups',
        icon: <LuSoup className='w-[60px] h-[60px] text-green-400 text-center' />
    },
    {
        id: 4,
        name: 'Pasta',
        icon: <MdOutlineRamenDining className='w-[60px] h-[60px] text-green-400 text-center' />
    },
    {
        id: 5,
        name: 'Main_Course',
        icon: <GiForkKnifeSpoon className='w-[60px] h-[60px] text-green-400 text-center' />
    },
    {
        id: 6,
        name: 'Pizza',
        icon: <GiFullPizza className='w-[60px] h-[60px] text-green-400 text-center' />
    },
    {
        id: 7,
        name: 'Burger',
        icon: <GiHamburger className='w-[60px] h-[60px] text-green-400 text-center' />
    },
]
export default Categories