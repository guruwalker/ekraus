import * as React from "react"

//import css
import "../assets/css/global.css"
import carousel1 from "../assets/images/carousel.jpg"
import carousel2 from "../assets/images/carousel2.jpg"
import carousel3 from "../assets/images/carousel3.jpg"
import carousel4 from "../assets/images/carousel4.jpg"

const HomePageCarousel = () => {
  return (
      <section className="hero is-medium">
        <div className="-body">
          <div className="">
            <div
              id="carouselExampleDark"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleDark"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                {/* <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src="https://images.unsplash.com/photo-1604972356809-b930be5504c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1eWluZyUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="d-block w-100"
                    alt="..."
                  />
                 <div className="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>
                      Some representative placeholder content for the first
                      slide.
                    </p>
                  </div> 
                </div> */}
                <div className="carousel-item active" data-bs-interval="2000">
                  <img
                    src={carousel1}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={carousel2}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={carousel3}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={carousel4}
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}
export default HomePageCarousel
