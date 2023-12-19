import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({className, name, price, quantity}) => {
  return (
    <div className={`mr-3 ml-3 mobile:h-96 mobile:w-full mobile:my-8` + className }>
      <div>
          <h3 className="text-3xl mb-2 dark:text-white font-normal text-center transition duration-300 ease-in-out hover:text-blue-500">
              {name}
          </h3>
          <p className="dark:text-white font-light text-center">
              {price}
          </p>
          <p className="dark:text-white font-light text-center">
              {quantity}
          </p>
      </div>
    </div>
  )
}

export default Card