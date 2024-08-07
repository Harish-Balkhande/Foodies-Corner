"use client"
import Link from 'next/link';

export default function Navbar({ children }) {
  return (
    <>
      <nav class="navbar navbar-expand-lg transparent-navbar sticky-top">
        <div class="container-fluid">
          <Link class="navbar-brand fs-3" href="#">Foodies Corner</Link>
          <button class="navbar-toggler bg-light icon-link-hover" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link text-light mx-4 active" aria-current="page" href="/">Home</Link>
              <Link class="nav-link text-light mx-4" href="#restaurents">Menus</Link>
              <Link class="nav-link text-light mx-4" href="#aboutSec">About</Link>
              {/* <Link class="nav-link text-light disbled" aria-disabled="true">Disabled</Link> */}
            </div>
          </div>
        </div>
      </nav>
{/* 
      <div className="sample" ></div> */}

      
    </>
  );
}
