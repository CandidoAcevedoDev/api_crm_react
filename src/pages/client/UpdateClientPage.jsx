import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneClient } from '../../api';
import { FormNewClient } from '../../components';

const UpdateClientPage = () => {
	const { id } = useParams();

	const [client, setClient] = useState({});
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function getClient() {
			setLoading(true);
			const result = await getOneClient(id);
			setClient(result);

			setLoading(false);
		}

		getClient();
	}, []);

	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
			<p className='mt-2'>
				Utiliza este fromulario para editar los datos de un cliente
			</p>

			{client?.name ? (
				<FormNewClient client={client} loading={loading} />
			) : (
				'No existe ese ID'
			)}
		</>
	);
};

export default UpdateClientPage;
