import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  adicionarCarrinho(produto: IProdutoCarrinho) {
    this.itens.push(produto); //Empilhando os novos itens no carrinho
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
    /*JSON.stringify transforma objeto em string, assim como JSON.parse converte string para objeto*/
  }

  removerProdutoCarrinho(produtoId: number){

    //Filtrando os dados para retirar o ID do produto a ser removido 
    this.itens = this.itens.filter(item => item.id !== produtoId);

    //Atualizando o localStorage com a remoção realizada
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }
}
