import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleUpdate }) => {
    const { _id, serviceName, price, customer, service, phone, status } = order;
    const [serviceOrder, setServiceOrder] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceOrder(data))
    }, [service])


    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-ghost' onClick={() => handleDelete(_id)}>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                serviceOrder?.img &&
                                <img src={serviceOrder.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">{price}</span>
            </td>
            <td>Indigo</td>
            <th>
                <button className="btn btn-ghost btn-xs" onClick={() => handleUpdate(_id)}>{status ? status : "Pending"}</button>
            </th>
        </tr>
    );
};

export default OrderRow;