import React from 'react'

function Details({TotalIncome , TotalExpence , Balance}) {
    return (
        <div>
            <h2>Your Balance: {Balance ? Balance : '0'}</h2>
            <div className='incomeAndExpence'>
                <h4 className='totalExpence'>Expence: {TotalExpence ? TotalExpence : '0'}</h4>
                <h4 className='totalIncome'>Income: {TotalIncome ? TotalIncome : '0'}</h4>
            </div>
        </div>
    )
}

export default Details
