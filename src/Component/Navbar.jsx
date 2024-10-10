import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className="nav">
            <div className="left">
                <h1>React Recipe App</h1>
            </div>
            <div className="search">
                <input type="text" />
            </div>
            <div className="right">
                <div className='items'>Indian</div>
                <div className='items'>American</div>
                <div className='items'>British</div>
                <div className='items'>Chanese</div>
                <div className='items'>Thai</div>
            </div>
        </div>
    </>
  )
}

export default Navbar