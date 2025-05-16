import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumoEnergiaController } from './consumo_energia.controller';
import { ConsumoEnergiaService } from './consumo_energia.service';
import { ConsumoEnergiaSchema } from './consumo_energia.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'ConsumoEnergia', schema: ConsumoEnergiaSchema },
    ]),
  ],
  controllers: [ConsumoEnergiaController],
  providers: [ConsumoEnergiaService],
})
export class ConsumoEnergiaModule {}