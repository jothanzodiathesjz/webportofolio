import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { AiFillProject } from "react-icons/ai";

function SideBar() {
  return (
    <div>
        <ul id="menu">
            <a href="#t1"><li  id="uno"> <IoPersonOutline style={{color:'red'}}/></li></a>
            <a href="#t2"><li id="dos"> <AiFillProject/></li></a>
            <a href="#t3"><li class="icon fa fa-rocket" id="tres"></li></a>
            <a href="#t4"><li class="icon fa fa-dribbble" id="cuatro"></li></a>
            <a href="#t5"><li class="icon fa fa-plus-circle" id="cinco"></li></a>
          </ul>
    </div>
  )
}

export default SideBar