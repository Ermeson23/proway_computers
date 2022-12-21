import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { ProdutosService } from 'src/app/produtos.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto : IProduto  | undefined;
  quantidade = 1;

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    //NUmber foi colocado para garantir que será enviado o número 0, caso seja NULL
    this.produto = this.produtosService.getOne(produtoId);
  }

  adicionarAocarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho.");
    const produto: IProdutoCarrinho = {
      ...this.produto!, // ' !' diz : O produto existe, ele será adicionado
      quantidade: this.quantidade
    }
    this.carrinhoService.adicionarCarrinho(produto);
  }

}
