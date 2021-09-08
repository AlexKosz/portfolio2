import React, { useState, useEffect } from 'react';

const Filler = () => {

    const [fillerText, setFillerText] = useState([]);

    useEffect(() => {
        let arr = []
        let text = "lorem ipsum is cool"
        for (let i = 0; i < 30; i++) {
            arr.push(text)
        }
        setFillerText(arr)
    }, [])


    return (
        <div>
            {
                fillerText.map((text) => <h2>{text}</h2>)
            }
        </div>
    )
}

export default Filler;