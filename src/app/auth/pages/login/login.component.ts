import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IAuthRequest } from '../../model/auth.model';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    authRequest: IAuthRequest = {
        email: '',
        password: '',
    };

    private authService = inject(AuthService);
    private router = inject(Router);



    login() {
        console.log(this.authRequest);
        this.authService
            .loginUser(this.authRequest.email, this.authRequest.password)
            .subscribe((data) => {
                console.log(data);

                this.router.navigate(['home']);
            });
    }
}