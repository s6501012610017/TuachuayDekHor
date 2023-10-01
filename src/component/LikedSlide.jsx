import React from 'react'
import './ContentSlide.scoped.css'
import img1 from '../../src/Assets/slide1.png'
import img2 from '../../src/Assets/slide2.png'
import img3 from '../../src/Assets/slide3.png'
import img4 from '../../src/Assets/slide4.png'
import {BsHeartFill} from "react-icons/bs";
import { Link } from "react-router-dom";
import {BiSolidPencil} from "react-icons/bi";

const Data =[
        {
            id:1,
            imgSrc: img3,
            destTitle: '10 Awesome Books',
            writer: 'Narak',
            heart : 123,
        },
    
        {
            id:2,
            imgSrc: img4,
            destTitle: 'Pasta by DekHor',
            writer: 'Sleep_more',
            heart : 143,
        },
    ]

const LikeSlide = () => {
  return (
    <div className="content">
            <div className="main_content">
                {
                    Data.map(({id,imgSrc,destTitle,writer,heart})=>{
                        return(
                            <div className="singleDest">
                                <div className="dastImage">
                                    <img src= {imgSrc} alt="" />
                                </div>
                                <div className="destFooter">
                                    <div className="heart">
                                        <BsHeartFill size={25}/><p>{heart}</p>
                                    </div>
                                    <div className="destText">
                                        <h4>
                                            <Link to={`/story/${id}`}>{destTitle}</Link>
                                        </h4>
                                        <span className="userwrite">
                                            <span className="name"><BiSolidPencil size={20} className="icon_pencil"/>
                                                {writer}
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
                
            </div>
        </div>
  )
}

export default LikeSlide;