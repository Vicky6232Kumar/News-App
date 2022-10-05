import React from 'react'
import Spinner from './loading.gif'

export default function Loading() {
  return (
    <div className='text-center'>
        <img src={Spinner} alt="Loading" />
    </div>
  )
}
