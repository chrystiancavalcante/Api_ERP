/*******************************************************************************
Title: Global Software e Tecnologia ERP                                                                
Description: Model relacionado à tabela [COMPRA_COTACAO_DETALHE] 
                                                                                
The MIT License                                                                 
                                                                                
Copyright: Copyright (C) 2023 Global Software e Tecnologia                                          
                                                                                
Permission is hereby granted, free of charge, to any person                     
obtaining a copy of this software and associated documentation                  
files (the "Software"), to deal in the Software without                         
restriction, including without limitation the rights to use,                    
copy, modify, merge, publish, distribute, sublicense, and/or sell               
copies of the Software, and to permit persons to whom the                       
Software is furnished to do so, subject to the following                        
conditions:                                                                     
                                                                                
The above copyright notice and this permission notice shall be                  
included in all copies or substantial portions of the Software.                 
                                                                                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,                 
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES                 
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND                        
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT                     
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,                    
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING                    
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR                   
OTHER DEALINGS IN THE SOFTWARE.                                                 
                                                                                
       The author may be contacted at:                                          
          chrystian@softwarepro.com.br                                                  
                                                                                
@author Chrystian Cavalcante (chrystian@softwarepro.com.br)                   
@version 1.0.0
*******************************************************************************/
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { CompraFornecedorCotacao } from '../../entities-export';
import { Produto } from '../../entities-export';

@Entity({ name: 'COMPRA_COTACAO_DETALHE' })
export class CompraCotacaoDetalhe { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'QUANTIDADE' })
	quantidade: number;

	@Column({ name: 'VALOR_UNITARIO' })
	valorUnitario: number;

	@Column({ name: 'VALOR_SUBTOTAL' })
	valorSubtotal: number;

	@Column({ name: 'TAXA_DESCONTO' })
	taxaDesconto: number;

	@Column({ name: 'VALOR_DESCONTO' })
	valorDesconto: number;

	@Column({ name: 'VALOR_TOTAL' })
	valorTotal: number;


	/**
	* Relations
	*/
    @OneToOne(() => Produto)
    @JoinColumn({ name: "ID_PRODUTO" })
    produto: Produto;

    @ManyToOne(() => CompraFornecedorCotacao, compraFornecedorCotacao => compraFornecedorCotacao.listaCompraCotacaoDetalhe)
    @JoinColumn({ name: "ID_COMPRA_FORNECEDOR_COTACAO" })
    compraFornecedorCotacao: CompraFornecedorCotacao;


	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.quantidade = objetoJson['quantidade'];
			this.valorUnitario = objetoJson['valorUnitario'];
			this.valorSubtotal = objetoJson['valorSubtotal'];
			this.taxaDesconto = objetoJson['taxaDesconto'];
			this.valorDesconto = objetoJson['valorDesconto'];
			this.valorTotal = objetoJson['valorTotal'];
			
			if (objetoJson['produto'] != null) {
				this.produto = new Produto(objetoJson['produto']);
			}

			
		}
	}
}