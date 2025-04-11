import React, { useEffect, useState } from 'react'

const Counter = () => {
    // Usestate() = this is a hook and it is used for storing and updating any values 
    const [count, setcount] = useState(0)
    // count is a variable which is used to store the value 
    // setcount is a function which is used to update the value of count

    // const increase = () => {
    //     setcount(count + 1)
    // }

    const decrease = () => {
        setcount(count - 1)
    }

    useEffect(() => {
        alert("After each change in state , it works !!")
    }, [])


    return (
        <>

            <h1 className='text-center display-1'>{count}</h1>
            {count < 10 && <button className='btn btn-primary' onClick={() => { setcount(count + 1) }}>Increase</button>}
            {count > 0 && <button className='btn btn-danger' onClick={decrease}>Decrease</button>}

        </>
    )
}

export default Counter
