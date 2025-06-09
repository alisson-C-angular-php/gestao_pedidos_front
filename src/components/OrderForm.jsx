import React, { useState } from 'react';
import api from '../services/api';

function OrderForm({ onOrderCreated, nextId }) {
  const [form, setForm] = useState({
    cliente: '',
    produto: '',
    valor: 1,
    status: 'Pendente'
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.post('/orders', form);
      alert('Pedido criado!');
      onOrderCreated();
      setForm({
        id: nextId + 1,
        cliente: '',
        produto: '',
        valor: 1,
        status: 'Pendente'
      });
    } catch (error) {
      console.error(error);
      alert('Erro ao criar pedido');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md p-6 rounded max-w-md mx-auto my-4 flex flex-col gap-4">
      <input name="cliente" placeholder="Cliente" value={form.cliente} onChange={handleChange} required className="p-2 border rounded" />
      <input name="produto" placeholder="Produto" value={form.produto} onChange={handleChange} required className="p-2 border rounded" />
      <input name="valor" type="number" placeholder="valor" value={form.valor} onChange={handleChange} required className="p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Criar Pedido</button>
    </form>
  );
}

export default OrderForm;
