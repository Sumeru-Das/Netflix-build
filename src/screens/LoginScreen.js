import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen'

function LoginScreen() {

        const [signIn, setSignIn] = useState(false)
  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
                <img 
                    className='loginScreen_logo'
                    src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
                    alt=''
                />
                <button onClick={() => setSignIn(true)} 
                    className='loginScreen_button' >
                    Sign In
                </button>

                <div className='loginScreen_gradient' />

                <div className='loginScreen__body'>
                    {signIn ? (
                        <SignUpScreen/>
                    ): (
                        <>
                        <h1>Unlimited movies, TV shows and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                        {/* <label for="email">Enter your email:</label> */}
                        <div className='loginScreen_input'>
                            <form>
                                <input type='email' placeholder='Email Address'/>
                                <button onClick={() => setSignIn(true)} className='loginScreen_getstarted'>Get Started</button>
                            </form>
                        </div>
                    </>
                    )}
                    
                </div>
        </div>
    </div>
  )
}

export default LoginScreen