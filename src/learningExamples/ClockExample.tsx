import React, { useEffect, useState } from 'react'

export default function ClockExample() {
    const [myDate,myDateUpdate] = useState(new Date());
    useEffect(() => {
      const interval = setInterval(() => {
        myDateUpdate(new Date());
      }, 1000);
      return () => clearInterval(interval);
   }, []);
    return (
        <>
            <h3>React HTML </h3>
            <input />
            <div>{myDate.toString()}</div>
        </>
    )
}
