<<<<<<< HEAD
import React from "react"
import "../index.css";
import Doctor from "../images/doctoricon.png"
import {Link} from "react-router-dom";
import Search from "./Search";
=======
import React, { useEffect, useState } from "react"
import Doctor from "../images/doctoricon.png"
import {Link} from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
>>>>>>> main


export default function Homepage() {

    const [data,setData] = useState([]);
    const getAllDocs = async () => 
    {
        const querySnapshot = await getDocs(collection(db, "users"));
        let i = 0;
        let tempData = []
        querySnapshot.forEach((doc) => {
            tempData.push(doc.data());
            tempData[i].uid = doc.data().uid;
        i++;
        });
        return tempData;
    }

   useEffect( () => {
     getAllDocs().then(res => setData(res));
    }, [])

    return (

    <div>
        <div className='SearchButton'>
            <Search />
        </div>



        <div className="wrapper-grid">
<<<<<<< HEAD

            <div className="container">

                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>
                <h1 className="name">Ofek Elgozi</h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to="/Schedule">
                    <button className='button'>Schedule Meeting</button>
                </Link>
            </div>

            <div className="container">
                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>
                <h1 className="name">Niran Dishi</h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to="/Schedule">
                    <button className='button'>Schedule Meeting</button>
                </Link>
            </div>

            <div className="container">
                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>
                <h1 className="name">Dvir Dishi</h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to="/Schedule">
                    <button className='button'>Schedule Meeting</button>
                </Link>
            </div>

            <div className="container">
                <div className='banner-img'></div>
                <img src={Doctor} alt='profile image' className="profile-img"></img>
                <h1 className="name">Aviya David </h1>
                <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                <Link to="/Schedule">
                    <button className='button'>Schedule Meeting</button>
                </Link>

            </div>
=======
            {data && data.map((doc) => doc.isdoctor === '1' && (
                <div key={doc.uid} className="container">
                    <div className='banner-img'></div>
                    <img src={Doctor} alt='profile image' className="profile-img"></img>
                    <h1 className="name">{doc.name}</h1>
                    <p className="description">Hi there! My name is XXXX and I am a book lover, traveler and professional blogger. Follow me to stay connected!</p>
                    <Link to="/Schedule">
                        <button className='button'>Schedule Meeting</button>
                    </Link>
                </div> 
          ))}
>>>>>>> main
        </div>
    </div>
    )
}






