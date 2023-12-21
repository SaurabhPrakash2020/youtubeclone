import React from 'react'
import {Stack} from '@mui/material'
import { categories } from '../utils/constants'

const SideBar = ({selecetedCategory,setselectedCategory}) => {
  return (
    <Stack
      direcction="row"
      sx={{overflowY:"auto",height:{sx:'auto',md:'95%'}, flexDirection:{md:'column'}}}
    >
     {categories.map((category)=>(
        <button
          onClick={()=>setselectedCategory(category.name)}
          className="category-btn" style={{background:category.name===selecetedCategory && '#FC1503',color:'white'}} key={category.name}>
            
            <span style={{color:category.name===selecetedCategory ? 'white':'red',marginRight:'15px'}}>{category.icon}</span>
            <span style={{opacity:category.name===selecetedCategory?'1':'0.8'}}>{category.name}</span>
        </button>

     ))}   
    </Stack>
  )
}
export default SideBar