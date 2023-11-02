/*******************************************************************************
Title: Global Software e Tecnologia ERP                                                                
Description: Model relacionado à tabela [COMPRA_REQUISICAO] 
                                                                                
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
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { CompraRequisicaoDetalhe } from '../../entities-export';
import { CompraTipoRequisicao } from '../../entities-export';
import { Colaborador } from '../../entities-export';

@Entity({ name: 'COMPRA_REQUISICAO' })
export class CompraRequisicao { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'DESCRICAO' })
	descricao: string;

	@Column({ name: 'DATA_REQUISICAO' })
	dataRequisicao: Date;

	@Column({ name: 'OBSERVACAO' })
	observacao: string;


	/**
	* Relations
	*/
    @OneToOne(() => CompraTipoRequisicao)
    @JoinColumn({ name: "ID_COMPRA_TIPO_REQUISICAO" })
    compraTipoRequisicao: CompraTipoRequisicao;

    @OneToOne(() => Colaborador)
    @JoinColumn({ name: "ID_COLABORADOR" })
    colaborador: Colaborador;

    @OneToMany(() => CompraRequisicaoDetalhe, compraRequisicaoDetalhe => compraRequisicaoDetalhe.compraRequisicao, { cascade: true })
    listaCompraRequisicaoDetalhe: CompraRequisicaoDetalhe[];


	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.descricao = objetoJson['descricao'];
			this.dataRequisicao = objetoJson['dataRequisicao'];
			this.observacao = objetoJson['observacao'];
			
			if (objetoJson['compraTipoRequisicao'] != null) {
				this.compraTipoRequisicao = new CompraTipoRequisicao(objetoJson['compraTipoRequisicao']);
			}

			if (objetoJson['colaborador'] != null) {
				this.colaborador = new Colaborador(objetoJson['colaborador']);
			}

			
			this.listaCompraRequisicaoDetalhe = [];
			let listaCompraRequisicaoDetalheJson = objetoJson['listaCompraRequisicaoDetalhe'];
			if (listaCompraRequisicaoDetalheJson != null) {
				for (let i = 0; i < listaCompraRequisicaoDetalheJson.length; i++) {
					let objeto = new CompraRequisicaoDetalhe(listaCompraRequisicaoDetalheJson[i]);
					this.listaCompraRequisicaoDetalhe.push(objeto);
				}
			}

		}
	}
}