import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
});

export const getOrders = (page, ordersPerPage) => 
    api.get(`/orders/${page}/${ordersPerPage}`).then(res => res.data);

export const getOrderById = (id) => 
    api.get(`/orders/${id}`).then(res => res.data);
    
export const createOrder = ({...newOrder}) => 
    api.post(`/orders`,newOrder).then(res => res.data);

export const updateOrder = ({id, ...updatedOrder}) => 
    api.put(`/orders/${id}`,updatedOrder).then(res => res.data);

export const deleteOrder = (id) => 
    api.delete(`/orders/${id}`,deleteOrder).then(res => res.data);


