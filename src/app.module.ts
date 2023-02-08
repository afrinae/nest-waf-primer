import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizenRegistrationModule } from './citizen-registration/citizen-registration.module';

@Module({

  imports: [TypeOrmModule.forRoot({
    "type": "postgres",
    "host": "localhost",
    "port": 5435,
    "username": "postgres", 
    "password": "mac-lab", 
    "database": "nestwafprimer", 
    "entities": [ "dist/**/*.entity{.ts,.js}"
    ],
    "synchronize": true
    }), CitizenRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
