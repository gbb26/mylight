import React from 'react'
import { categories } from '../utils/consts'
import { Stack } from '@mui/material'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
  return (
    <Stack
    direction='row'
    sx={{
        overflowY: 'auto',
        height: {sx: 'auto' ,width:'auto', md: '95%'},
        flexDirection: {md: 'column'},
    }}
    >
        {categories.map((cat)=>{
            return  (<button
            className='category-btn'
            onClick={()=>{
              setSelectedCategory(cat.name)
            }}
            style={{
                background: cat.name === selectedCategory && "#333",
                color: "white",
              }}
              key={cat.name}
            >
                <span
                style={{ color: cat.name === selectedCategory ? "white" : "red", marginRight: "15px" }}>
                    {cat.icon}</span>
                <span
                style={{ opacity: cat.name === selectedCategory ? "1" : "0.8" }}
                >{cat.name}</span>
            </button>)
        })}
    </Stack>
  )
}

export default Sidebar
