import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthResponse } from '../model/auth.model';
import BASEURL from '../../utils/BASE_URL';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private http = inject(HttpClient);
    private authUrl: string = BASEURL + '/auth/login';

    public loginUser(email: string,password: string): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(this.authUrl, {
            email,
            password,
        });
    }



    public isAuthorizated(): boolean{
        return false;
    }
}
