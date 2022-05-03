import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { AbstractDto } from "src/application/dtos/abstract.dto";

export class UserDto extends AbstractDto{
    fullname: string;
    email: string;
    password: string;
}