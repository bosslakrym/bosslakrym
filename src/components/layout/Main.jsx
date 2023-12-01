import React from 'react'
import main from '../styles/main.css'

const Main = () => {
  return (
    <div class='container-fluid'>
        <div className="bio">
            <div className="bio-image">
                <img src="https://avatars.githubusercontent.com/u/42168040?v=4" className='profilePic' alt="" />
            </div>
           <h1 class="head-text pt-5">- Otufowora AbdulKareem -</h1>
        </div>
        <div class="container">
            <h2 class='text-center bio-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident officiis quo labore, obcaecati eius voluptatum consequuntur culpa nihil. Placeat, consequatur.</h2>
        </div>

        <div className="container">
            <div className="social-box">
                <div className="git"><i class="fa-brands fa-github fa-10x"></i></div>
                <div className="twitter"><i class="fa-brands fa-x-twitter fa-10x"></i></div>
                <div className="linkedin"><i class="fa-brands fa-linkedin-in fa-10x"></i></div>
                <div className="youtube"><i class="fa-brands fa-youtube fa-10x"></i></div>
            </div>
        </div>
    </div>
  )
}

export default Main