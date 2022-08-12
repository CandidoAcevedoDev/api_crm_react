import { Navigate, Routes, Route } from 'react-router-dom';
import Home from '../pages/home/HomePage';
import {
	ClientsPage,
	NewClientPage,
	UpdateClientPage,
	DetailClient,
} from '../pages/client';

const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigate to='/clients' />} />

			<Route path='clients' element={<Home />}>
				<Route index element={<ClientsPage />} />
				<Route path='new-client' element={<NewClientPage />} />
				<Route path='update-client/:id' element={<UpdateClientPage />} />
				<Route path=':id' element={<DetailClient />} />
			</Route>
		</Routes>
	);
};

export default AppRouter;
