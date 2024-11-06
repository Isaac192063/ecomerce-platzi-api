import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
})
export class RegisterComponent {
    form = inject(FormBuilder);

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
        image: [null, Validators.required],
    });

    image!: string | ArrayBuffer | null;

    selectImage($event: any) {
        const files = $event.target.files[0];

        const fileReader = new FileReader();
        if (files) {
            console.log(files);

            fileReader.onload = () => {
                this.image = fileReader.result;
            };
            fileReader.readAsDataURL(files);
            console.log(this.image);
        }
    }

    createAccount(): void {}
}
