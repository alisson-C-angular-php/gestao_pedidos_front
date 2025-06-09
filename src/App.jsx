import React, { useEffect, useState } from 'react';
import api from './services/api';
import OrderForm from './components/OrderForm';
import OrderList from './components/OrderList';
import OrderDetails from './components/OrderDetails';
import "./index.css"

function App() {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const fetchOrders = async () => {
  try {
    const res = await api.get('/orders');
    setOrders(res.data.data); 
  } catch (err) {
    console.error('Erro ao buscar pedidos', err);
  }
};


  useEffect(() => {
    fetchOrders();
  }, []);

  const getNextId = () => {
    if (orders.length === 0) return 1;
    return Math.max(...orders.map(o => o.id)) + 1;
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Sistema de Pedidos</h1>
      <OrderForm onOrderCreated={fetchOrders} nextId={getNextId()} />
      <OrderList orders={orders} onSelect={setSelectedOrder} />
      <OrderDetails order={selectedOrder} />
    </div>
  );
}

export default App;
