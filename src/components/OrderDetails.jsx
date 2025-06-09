import React from 'react';

function OrderDetails({ order }) {
  if (!order) return null;

  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow rounded mt-4">
      <h2 className="text-xl font-bold mb-2">Detalhes do Pedido #{order.id}</h2>
      <p><strong>Cliente:</strong> {order.cliente}</p>
      <p><strong>Produto:</strong> {order.produto}</p>
      <p><strong>Valor:</strong> {order.valor}</p>
      <p><strong>Status:</strong> {order.status}</p>
    </div>
  );
}

export default OrderDetails;
