import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ConsumoEnergiaService {
  constructor(
    @InjectModel('ConsumoEnergia') private readonly consumoModel: Model<any>,
  ) {}

  async registrarConsumo(dados: {
    usuarioId: string;
    quantidadeKwh: number;
    dataLeitura: Date;
  }): Promise<any> {
    const novoRegistro = new this.consumoModel(dados);
    return await novoRegistro.save();
  }

  async consultarHistorico(usuarioId: string, inicio: Date, fim: Date): Promise<any[]> {
    return await this.consumoModel.find({
      usuarioId: usuarioId,
      dataLeitura: { $gte: inicio, $lte: fim },
    }).exec();
  }

  async verificarAlerta(usuarioId: string): Promise<string> {
    const registros = await this.consumoModel.find({ usuarioId })
      .sort({ dataLeitura: -1 }) // do mais recente para o mais antigo
      .limit(2) // pegar os 2 últimos meses
      .exec();

    if (registros.length < 2) {
      return 'Não há dados suficientes para gerar alerta.';
    }

    const consumoAtual = registros[0].quantidadeKwh;
    const consumoAnterior = registros[1].quantidadeKwh;

    if (consumoAtual > consumoAnterior) {
      return '⚠️ Alerta: Consumo elevado em relação ao mês anterior!';
    } else {
      return '✅ Consumo dentro do esperado.';
    }
  }
}