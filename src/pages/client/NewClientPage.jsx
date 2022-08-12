import { FormNewClient } from '../../components';

const NewClientPage = () => {
	return (
		<>
			<h1 className='font-black text-4xl text-blue-900'>Nuevo Cliente</h1>
			<p className='mt-2'>
				Llena los siguietes campos para registrar un cliente
			</p>

			<FormNewClient />
		</>
	);
};

export default NewClientPage;
