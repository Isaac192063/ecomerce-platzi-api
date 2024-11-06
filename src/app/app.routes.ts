import { Routes } from '@angular/router';
import authRouter from './auth/auth.routes';
import userRoutes from './user/user.routes';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => authRouter,
    },
    {
        path: 'home',
        loadChildren: ()=> userRoutes
    }
];
