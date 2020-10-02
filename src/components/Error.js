import React from 'react'

const Error = ({mensaje}) => {
    return (
        <div>
            <h2 className="alert alert-dismissible alert-danger text-center p-2 my-3">{mensaje}</h2> 
            
        </div>
    )
}

export default Error
