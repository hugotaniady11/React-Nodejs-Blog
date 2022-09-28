import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
        <div className='content'>c
        <img src='' />
        <div className="user">
            <img src='' />
        <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
            <Link tp={`/write?edit=2`}>
                <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
            </div>
        </div>
        <h1>Lorem Ipsum</h1>
        <p>Lorem Ipsum</p>
        </div>
        <Menu />
    </div>
  )
}

export default Single
