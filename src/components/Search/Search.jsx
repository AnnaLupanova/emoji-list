import React from 'react';

export default function Search({value, update}) {
    return (
            <div className='search'>
                <input type="text" value={value} placeholder={"Введи название смайла"} onChange={update} />
            </div>
    );
};