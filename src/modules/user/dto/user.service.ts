import { UserEntity } from "src/domain/entities/user.entity";
import { UserRegisterDto } from "src/modules/auth/dto/userRegisterDto";

export class UserService {
    constructor(){}

    async createUser(
      userRegisterDto: UserRegisterDto,
    ): Promise<UserEntity> {
    //   const user = this.userRepository.create(userRegisterDto);

    //   await this.userRepository.save(user);
        var user : UserEntity;
  
      return user;
    }
}