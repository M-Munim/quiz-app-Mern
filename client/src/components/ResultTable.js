// import React, { useEffect, useState } from 'react'
// import { getServerData } from '../helper/helper'
import React from 'react'
export default function ResultTable() {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/result`, (res) => {
    //         setData(res)
    //     })
    // })

    return (
        <div>
            <table>
                <thead className='table-header'>
                    <tr className='table-row'>
                        <td>Name</td>
                        <td>Attemps</td>
                        <td>Earn Points</td>
                        <td>Result</td>
                    </tr>
                </thead>
                <tbody>
                    {/* { !data ?? <div>No Data Found </div>}
                {
                    data.map((v, i) => ( */}
                    {/* key={i} */}
                    <tr className='table-body' >
                        {/* <td>{v?.username || ''}</td>
                            <td>{v?.attempts || 0}</td>
                            <td>{v?.points || 0}</td>
                            <td>{v?.achived || ""}</td> */}
                        <td>Munim</td>
                        <td>03</td>
                        <td>20</td>
                        <td>passed</td>
                    </tr>
                    {/* )) */}
                    {/* } */}

                </tbody>
            </table>
        </div>
    )
}