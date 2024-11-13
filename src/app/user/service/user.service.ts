import { inject, Injectable } from '@angular/core';
import { IUser } from '../model/IUser.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import BASEURL from '../../utils/BASE_URL';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private _http = inject(HttpClient);
    private _userUrl = 'https://api.escuelajs.co/api/v1/users/';

    public newUser(user: IUser): Observable<IUser> {
        const formData = new FormData();
        console.log(user);
        formData.append('name', user.name!);
        formData.append('email', user.email!);
        formData.append('password', user.password!);
        formData.append('avatar', 'https://picsum.photos/800');
        return this._http.post<IUser>(this._userUrl, {
            name: user.name,
            email: user.email,
            password: user.password,
            avatar: 'https://picsum.photos/800',
        });
    }

    public getAllUser(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this._userUrl);
    }
}
