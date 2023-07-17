import React from 'react';
import "./Banner.css";

function Banner() {

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string;
    }

  return (
    <header className='banner'
    style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHI1sorKqWggli8LUT0YiSiSfgCtWWgZfPCw&usqp=CAU')`,
        backgroundPosition: "center center",
    }}>

        <div className='banner_contents'>
            <h1 className='banner_title'>
                Movie Name
            </h1>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            <h1 className='banner_description'>
                  {truncate(' Netflix is an American subscription video on-demand over-the-top streaming service owned and operated by Netflix, Inc. The service primarily distributes films and television series produced by the media company of the same name from various genres, and it is available internationally in multiple languages. ', 150)}         
            </h1>

        </div>

        <div className='banner--fadeBottom'/>
    </header>
  )
}

export default Banner