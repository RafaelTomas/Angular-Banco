export interface Root {
  transferencias: Transferencia[]
}

export interface Transferencia {
  id?: string | string;
  valor: number
  destino: string | number
  data?: string
}
