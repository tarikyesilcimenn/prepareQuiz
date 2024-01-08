"use-client"
import { showQuestionModal } from "@/redux/features/questionsSlice";
import React, { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux"


const Navbar = () => {
    const dispatch = useDispatch();
  


    return (
        <div className="flex justify-between items-center bg-white h-[74px] text-black">
            <div></div>
            <div>LOGO</div>
            <div className="relative right-5">
              <button className="bg-lime-600 text-white rounded-md px-4 py-2" onClick={() => dispatch(showQuestionModal(true))}>Add Question</button>  
            </div>
        </div>
    )
}

export default Navbar