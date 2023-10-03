import React from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import './Style.css'
import './Utils.css'
import './Blogpost.css'
import './Mobile.css'
const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navigation max-width-1 m-auto">
        <div className="nav-left">
          <a href="/">
            <span><img src="img/logo.png" width="94px" alt="" /></span>
          </a>
          <ul>
            
          <i class="fa-solid fa-backward" onClick={() => navigate(-1)}></i>
         
          <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
          </ul>
        </div>
       
      </nav>

      <div className="max-width-1 m-auto">
        <hr />
      </div>

      <div className="post-img">
        <img src="img/11.svg" alt="" />
      </div>

      <div className="m-auto blog-post-content max-width-2 m-auto my-2">
        <h1 className="font1">About</h1>
        <div className="blogpost-meta"></div>
        <h2 className="font2">The About Page’s Mission</h2><br /><br />
        <p className="font1">The About page—just about every single website has one. The About page is where site users go
          to learn more about the site they’re on. If you want to convert visitors to users, capture opportunities to
          work with people, and give your regular users a deeper appreciation of what your site does, a well-written
          About page is your ticket.<br /><br />
        </p>

        <h2 className="font2">Who Reads About Pages?</h2><br />

        <p className="font1">It’s helpful to define the audience you’re writing your About page for.
          I can name three types of About page readers..<br /><br />
          Group 1: First Time Visitors
          This group may have been referred to your site by a friend or may have stumbled upon one of your web pages
          through a search engine result or social media service. They liked what they saw and they want to decide if
          they should keep coming back.
          Your About page, then, is an opportunity to convert a visitor to a user.</p><br /><br />

        <p className="font1">Group 2: Regular Users
          Your consistent readers or registered web app users want to know more about the site that they often use.
          The About page becomes a means to give them reasons to keep coming back and a way to develop a greater
          appreciation of your site.</p><br /><br />

        <h2 className="font2">Provide the Basics at the Top as an Overview</h2><br /><br />

        <p className="font1">Humans were not made to sit in front of a screen. We’re made to pick up objects and interact
          with people and to speak and to listen. In that way, XR forces us to change the whole way we think about
          design. It's not just about imitating reality, though, but also adding a magic twist — and it's usually the
          magic twist that is going to create a memorable experience. It's the surprises that make it fun.<br /><br />
          When we created the XR Developer Portal for Pluto, we represented each content category as boxes with card
          decks, where every card was a tutorial or article related to that category. The similarities with physical
          objects, such as boxes and cards, made it intuitive to understand how to interact with them and how they
          relate to each other. Combining that with a layer of digital interactions, such as sound effects, gravity
          manipulation, and holographic portals, is what makes the whole experience feel magical.</p>
      </div>

      <div className="max-width-1 m-auto">
        <hr />
      </div>

      <div className="home-articles max-width-1 m-auto font2">
        <div className="row">
          <p>This website uses cookies to ensure you get the best experience on our website. Cookies Policy</p>
        </div>
      </div>

      <div className="footer">
        <p>Copyright &copy; iBlog.com</p>
        <a href="https://www.vecteezy.com/free-vector/typewriter">Vector Credits: Vecteezy</a>
      </div>

    </div>
  )
}

export default About