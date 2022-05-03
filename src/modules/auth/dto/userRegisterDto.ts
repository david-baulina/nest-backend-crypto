import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class UserRegisterDto{
    @IsString()
    @IsNotEmpty()
    fullname: string;

    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

}