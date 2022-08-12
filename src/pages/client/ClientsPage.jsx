import { useEffect, useState } from 'react';
import { deleteClient, getClients } from '../../api';
import { ClientComponent } from '../../components';
import { Spinner } from '../../helpers';

const ClientsPage = () => {
	const [clients, setClients] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getClientsAPI() {
			setLoading(true);
			const result = await getClients();

			setClients(result);

			setLoading(false);
		}

		getClientsAPI();
	}, []);

	const handleEliminar = async id => {
		const accept = confirm('¿Deseas eliminar este cliente?');

		if (accept) await deleteClient(id);

		const arrayNewClients = clients.filter(client => client.id !== id);
		setClients(arrayNewClients);
	};

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
			<p className='mt-2'>Administra tus Clientes</p>

			{loading ? (
				<div className='flex items-center justify-center mt-20'>
					<Spinner />
				</div>
			) : (
				<table className='w-full mt-5 table-auto shadow bg-white'>
					<thead className='bg-blue-800 text-white'>
						<tr>
							<th className='p-2'>Nombre</th>
							<th className='p-2'>Contacto</th>
							<th className='p-2'>Empresa</th>
							<th className='p-2'>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{clients.map(client => (
							<ClientComponent
								key={client.id}
								client={client}
								handleEliminar={handleEliminar}
							/>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default ClientsPage;
