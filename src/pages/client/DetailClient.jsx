import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOneClient } from '../../api';
import { Spinner } from '../../helpers';

const DetailClient = () => {
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

	return Object.keys(client).length === 0 ? (
		'No hay resultado'
	) : (
		<div>
			{loading ? (
				<div className='flex items-center justify-center mt-20'>
					<Spinner />
				</div>
			) : (
				<>
					<h1 className='font-black text-4xl text-blue-900'>
						Cliente: {client.name}
					</h1>
					<p className='mt-2'>Información del Cliente</p>
					<p className='text-4xl text-gray-700 mt-10'>
						<span className='uppercase font-bold'>Cliente: </span> {client.name}
					</p>
					<p className='text-2xl mt-4 text-gray-700'>
						<span className='uppercase font-bold'>Empresa: </span>{' '}
						{client.business}
					</p>
					<p className='text-2xl mt-4 text-gray-700'>
						<span className='uppercase font-bold'>Correo: </span> {client.email}
					</p>
					<p className='text-2xl mt-4 text-gray-700'>
						<span className='uppercase font-bold'>Teléfono: </span>{' '}
						{client.phone}
					</p>
					{client.note && (
						<p className='text-2xl mt-4 text-gray-700'>
							<span className='uppercase font-bold'>Notas: </span> {client.note}
						</p>
					)}
				</>
			)}
		</div>
	);
};

export default DetailClient;
