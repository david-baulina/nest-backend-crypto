import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from '../../application/controllers/app.controller';
import { AppService } from '../services/app.service';
import { configService } from '../services/api-config.service';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
