import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ErrorForm } from '../index';
import { createCliente, updateClient } from '../../api';
import { Spinner } from '../../helpers';

const FormNewClient = ({ client, loading }) => {
	const navigate = useNavigate();

	const newClientSchema = Yup.object({
		name: Yup.string()
			.required('El nombre del Cliente es obligatorio*')
			.trim()
			.min(3, 'El nombre no puede tener menos de 3 caracteres'),
		business: Yup.string()
			.required('El nombre de la empresa es obligatorio')
			.trim(),
		email: Yup.string()
			.required('El correo es obligatorio')
			.email('Correo no válido')
			.trim(),
		phone: Yup.number()
			.positive('Número no valido')
			.integer('Número no válido')
			.typeError('El número no es válido'),
	});

	const handleSubmit = async values => {
		if (client.id) {
			await updateClient(values, client.id);
		}

		await createCliente(values);

		navigate('/');
	};

	return loading ? (
		<div className='flex items-center justify-center mt-20'>
			<Spinner />
		</div>
	) : (
		<div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
			<h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
				{client?.name ? 'Editar Cliente' : 'Agrega Cliente'}
			</h1>

			<Formik
				initialValues={{
					name: client?.name ?? '',
					business: client?.business ?? '',
					email: client?.email ?? '',
					phone: client?.phone ?? '',
					note: client?.note ?? '',
				}}
				enableReinitialize={true}
				onSubmit={async (values, { resetForm }) => {
					await handleSubmit(values);
					resetForm();
				}}
				validationSchema={newClientSchema}
			>
				{({ errors, touched }) => (
					<Form className='mt-10'>
						<div className='mb-4'>
							<label className='text-gray-800' htmlFor='name'>
								Nombre
							</label>
							<Field
								type='text'
								id='name'
								name='name'
								className='mt-2 w-full p-3 bg-gray-50'
								placeholder='Juanito Perez'
							/>
							{errors.name && touched.name ? (
								<ErrorForm>{errors.name}</ErrorForm>
							) : null}
						</div>

						<div className='mb-4'>
							<label className='text-gray-800' htmlFor='business'>
								Empresa
							</label>
							<Field
								type='text'
								id='business'
								name='business'
								className='mt-2 w-full p-3 bg-gray-50'
								placeholder='miempresa c&a'
							/>
							{errors.business && touched.business ? (
								<ErrorForm>{errors.business}</ErrorForm>
							) : null}
						</div>

						<div className='mb-4'>
							<label className='text-gray-800' htmlFor='email'>
								Correo
							</label>
							<Field
								type='email'
								id='email'
								name='email'
								className='mt-2 w-full p-3 bg-gray-50'
								placeholder='correo@gmail.com'
							/>
							{errors.email && touched.email ? (
								<ErrorForm>{errors.email}</ErrorForm>
							) : null}
						</div>

						<div className='mb-4'>
							<label className='text-gray-800' htmlFor='phone'>
								Teléfono
							</label>
							<Field
								type='tel'
								id='phone'
								name='phone'
								className='mt-2 w-full p-3 bg-gray-50'
								placeholder='829-000-0000'
							/>
							{errors.phone && touched.phone ? (
								<ErrorForm>{errors.phone}</ErrorForm>
							) : null}
						</div>

						<div className='mb-4'>
							<label className='text-gray-800' htmlFor='note'>
								Notas
							</label>
							<Field
								as='textarea'
								type='text'
								id='note'
								name='note'
								className='mt-2 w-full p-3 bg-gray-50 h-40'
								placeholder='Notas del Cliente'
							/>
						</div>

						<input
							type='submit'
							value={client?.name ? 'Actualizar cliente' : 'Agregar Cliente'}
							className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
};

FormNewClient.defaultProps = {
	client: {},
	loading: false,
};

export default FormNewClient;
