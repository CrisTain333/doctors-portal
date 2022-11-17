import React from 'react';

const Row = ({count,data}) => {
    const {patient,treatmentName,slot,appointmentDate} =  data;
    return (
        <>
      <tr>
        <th className='dark:bg-gray-800 dark:text-gray-100'>{count}</th>
        <td className='dark:bg-gray-800 dark:text-gray-100'>{patient}</td>
        <td className='dark:bg-gray-800 dark:text-gray-100'>{treatmentName}</td>
        <td className='dark:bg-gray-800 dark:text-gray-100'>{slot}</td>
        <td  className="dark:bg-gray-800 dark:text-gray-100">{appointmentDate}</td>
      </tr>
        </>
    );
};

export default Row;