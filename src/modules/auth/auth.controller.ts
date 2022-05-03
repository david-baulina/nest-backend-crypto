import { Body, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { ApiOkResponse } from "@nestjs/swagger";
import { UserService } from "../user/dto/user.service";
import { UserDto } from "../user/dto/userDto";
import { UserRegisterDto } from "./dto/userRegisterDto";

export class AuthController {
    constructor(
    private userService: UserService,
    ){}

    @Post('register')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: UserDto, description: 'Successfully Registered' })
    async userRegister(
      @Body() userRegisterDto: UserRegisterDto,
    ): Promise<UserDto> {
      const createdUser = await this.userService.createUser(
        userRegisterDto,
      );
  
      return createdUser.toDto();
    }

}