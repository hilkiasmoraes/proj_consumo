import { Schema } from 'mongoose';

export const ConsumoEnergiaSchema = new Schema({
  usuarioId: { type: String, required: true },
  quantidadeKwh: { type: Number, required: true },
  dataLeitura: { type: Date, required: true },
});