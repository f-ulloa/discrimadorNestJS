import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AnimalsModule } from './animals/animals.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27018/animals'),
    AnimalsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
