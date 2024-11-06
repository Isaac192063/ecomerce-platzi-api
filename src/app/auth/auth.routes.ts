import { Routes } from "@angular/router";
import { LandingComponent } from "./pages/landing/landing.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

const authRouter : Routes = [
    {
        path: '',
        loadComponent: ()=> LandingComponent
    },
    {
        path: 'login',
        loadComponent: ()=> LoginComponent
    },
    {
        path: 'register',
        loadComponent: ()=> RegisterComponent
    }
];

export default authRouter;
