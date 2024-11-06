import { Routes } from '@angular/router';
import { ListProductComponent } from './pages/list-product/list-product.component';

const userRoutes: Routes = [
    {
        path: '',
        loadComponent: () => ListProductComponent,
    },
];

export default userRoutes;
