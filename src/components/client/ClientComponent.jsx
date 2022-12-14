import { useNavigate } from 'react-router-dom';

const ClientComponent = ({ client, handleEliminar }) => {
	const { id, name, business, email, phone } = client;

	const navigate = useNavigate();

	return (
		<tr className='border-b hover:bg-gray-50'>
			<td className='p-3'>{name}</td>
			<td className='p-3'>
				<p>
					<span className='text-gray-800 uppercase font-bold'>Correo: </span>
					{email}
				</p>
				<p>
					<span className='text-gray-800 uppercase font-bold'>Tel: </span>
					{phone}
				</p>
			</td>
			<td className='p-3'>{business}</td>
			<td className='p-3'>
				<button
					type='button'
					className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs'
					onClick={() => navigate(`${id}`)}
				>
					Ver
				</button>
				<button
					type='button'
					className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2'
					onClick={() => navigate(`update-client/${id}`)}
				>
					Editar
				</button>
				<button
					type='button'
					className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2'
					onClick={() => handleEliminar(id)}
				>
					Eliminar
				</button>
			</td>
		</tr>
	);
};

export default ClientComponent;
