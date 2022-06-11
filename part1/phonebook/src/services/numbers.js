import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
    const req = axios.get(baseUrl);
    return req.then(res => res.data);
}

const create = (contact) => {
    const req = axios.post(baseUrl, contact);
    return req.then(res => res.data);
}

const updateNumber = (contact) => {
    const req = axios.put(`${baseUrl}/${contact.id}`, contact);
    return req.then(res => res.data);
}

const deleteNumber = (id) => {
    const req = axios.delete(`${baseUrl}/${id}`, id);
    return req.then(res => res.data);
}

export default { getAll, create, updateNumber, deleteNumber }