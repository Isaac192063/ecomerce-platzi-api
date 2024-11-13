import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../user/service/user.service';
import { IUser } from '../../../user/model/IUser.model';
import { ImageModule } from 'primeng/image';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, ImageModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    form = inject(FormBuilder);
    private _userService = inject(UserService);

    newUser = this.form.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
            '',
            [Validators.required, Validators.max(10), Validators.min(6)],
        ],
        repeatPassword: [
            '',
            [Validators.required, Validators.max(10), Validators.min(6)],
        ],
        avatar: [null, Validators.required],
    });

    image!: string | ArrayBuffer | null;
    avatar!: File;

    selectImage($event: any) {
        const files = $event.target.files[0];

        const fileReader = new FileReader();

        if (files) {
            this.avatar = files;
            fileReader.onload = () => {
                this.image = fileReader.result;
                console.log(fileReader.result);
            };
            fileReader.readAsDataURL(files);
        }
    }

    createAccount(): void {
        const user: IUser = {
            name: this.newUser.get('name')?.value!,
            email: this.newUser.get('email')?.value!,
            password: this.newUser.get('password')?.value!,
            avatar: this.avatar,
        };

        this._userService.newUser(user).subscribe({
            error(err) {
                console.log(err);
            },
            next: (value: IUser) => {
                console.log(value);
            },
        });
    }
}
