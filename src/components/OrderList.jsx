import React from 'react';

function OrderList({ orders, onSelect }) {
  return (
    <div className="overflow-x-auto max-w-4xl mx-auto">
      <table className="min-w-full bg-white shadow rounded">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">ID</th>
            <th className="p-3">Cliente</th>
            <th className="p-3">Produto</th>
            <th className="p-3">Valor</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => onSelect(order)}>
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.cliente}</td>
              <td className="p-3">{order.produto}</td>
              <td className="p-3">{order.valor}</td>
              <td className="p-3">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
