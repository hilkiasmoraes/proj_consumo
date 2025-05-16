import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ConsumoEnergiaService } from './consumo_energia.service';

@Controller('consumo')
export class ConsumoEnergiaController {
  constructor(private readonly consumoService: ConsumoEnergiaService) {}

  @Post()
  async registrarConsumo(@Body() dados: {
    usuarioId: string;
    quantidadeKwh: number;
    dataLeitura: string;
  }) {
    const dataConvertida = new Date(dados.dataLeitura);
    return this.consumoService.registrarConsumo({
      ...dados,
      dataLeitura: dataConvertida,
    });
  }

  @Get()
  async consultarHistorico(
    @Query('usuarioId') usuarioId: string,
    @Query('inicio') inicio: string,
    @Query('fim') fim: string,
  ) {
    const dataInicio = new Date(inicio);
    const dataFim = new Date(fim);
    return this.consumoService.consultarHistorico(usuarioId, dataInicio, dataFim);
  }

  @Get('alerta')
  async verificarAlerta(@Query('usuarioId') usuarioId: string) {
    return this.consumoService.verificarAlerta(usuarioId);
  }
}