import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ConsumoEnergiaModule } from './consumo_energia/consumo_energia.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // para ler o .env
    MongooseModule.forRoot(process.env.MONGODB_URI as string), ConsumoEnergiaModule, // conecta no MongoDB
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}