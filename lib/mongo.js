import { MongoClient } from 'mongodb';

const cliente = new MongoClient(process.env.MONGODB_URI);

let conexao;
export default async function conectar() {
  if (!conexao) {
    conexao = await cliente.connect();
  }
  return conexao;
}
