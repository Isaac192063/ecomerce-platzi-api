export interface IAuthRequest{
    email: string;
    password: string;
}

export interface IAuthResponse{
    access_token: string;
    refresh_token: string;
}
