import React, { useState } from 'react';
import axios from 'axios';

const AxiosTest = () => {

    const [data, setData] = useState(null);

    const onClick = () => {
        axios.get('http://localhost:8000/test')
            .then(response => {
                setData(response.data);
            });
    };

    return (
        <div>
            <button onClick={onClick}>불러오기</button>
            {data}
        </div>
    );
}

export default AxiosTest;