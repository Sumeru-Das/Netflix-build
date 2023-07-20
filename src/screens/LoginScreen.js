import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
                <img 
                    className='loginScreen_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                    alt=''
                />
                <button className='loginScreen_button' >
                    Sign In
                </button>

                <div className='loginScreen_gradient' />

                <div className='loginScreen__body'>
                    <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                        {/* <label for="email">Enter your email:</label> */}
                        <input type="email" id="email" name="email" placeholder='Email address' className='loginScreen_input'></input>
                    </>
                </div>
        </div>
    </div>
  )
}

export default LoginScreen