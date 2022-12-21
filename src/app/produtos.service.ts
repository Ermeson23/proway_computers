import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  //Acessando os dados do arquivo produtos.ts
  produtos: IProduto [] = produtos;

  constructor() { }
  //Métodos para o serviço de produtos

  //Obtendo e retornando todos os produtos
  getAll() {
    return this.produtos;
  }

  //Obtendo e retornando um produto selecionado pelo id informado
  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id == produtoId);
  }

}
