import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';

export default function Carousell() {
  return (
    <div> <Carousel fade>
    <Carousel.Item id='crosel' style={{ objectFit: 'contain' }}>
      <img
        className="d-block w-100"
        src="https://source.unsplash.com/random/300×300/?burger"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className='fst-italic'>Exotic Taste</h3>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
      </form></Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item id='crosel' style={{ objectFit: 'contain' }}>
      <img
        className="d-block w-100"
        src="https://source.unsplash.com/random/300×300/?pizza"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3 className='fst-italic'>Healthy Food</h3>
        <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item id='crosel' style={{ objectFit: 'contain' }}>
      <img
        className="d-block w-100"
        src="https://source.unsplash.com/random/300×300/?cake"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3 className='fst-italic'>Rich in flavours</h3>
         <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>
  )
}
