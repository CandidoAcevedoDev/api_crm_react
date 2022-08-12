const URL = 'http://localhost:5000/clients';

const createCliente = async (values) => {
    try {
       const response = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
            'Content-Type': 'application/json'
        }
       });

       const result = await response.json();
       return result;
    } catch (error) {
       return error
    }
}

const getClients = async () => {
    try {
        const response = await fetch(URL);
        const result = await response.json();

        return result;
    } catch (error) {
      return error  
    }
}

const getOneClient = async (value) => {
    try {
        const response = await fetch(`${URL}/${value}`)
        const result = await response.json()

        return result
    } catch (error) {
        return error;
    }
}

const updateClient = async (values, id) => {
    try {
        const response = await fetch(`${URL}/${id}`, {
         method: 'PUT',
         body: JSON.stringify(values),
         headers: {
             'Content-Type': 'application/json'
         }
        });
 
        const result = await response.json();
        return result;
     } catch (error) {
        return error
     }
}

const deleteClient = async id => {
    try {
        const response = await fetch(`${URL}/${id}`, {
            method: 'DELETE'
        })

        await response.json();
    } catch (error) {
       return error 
    }
}

export {createCliente, getClients, getOneClient, updateClient, deleteClient}