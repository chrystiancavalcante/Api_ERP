/*******************************************************************************
Title: Global Software e Tecnologia ERP                                                                
Description: Model relacionado à tabela [NFE_ITEM_RASTREADO] 
                                                                                
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
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { NfeDetalhe } from '../../entities-export';

@Entity({ name: 'NFE_ITEM_RASTREADO' })
export class NfeItemRastreado { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'NUMERO_LOTE' })
	numeroLote: string;

	@Column({ name: 'QUANTIDADE_ITENS' })
	quantidadeItens: number;

	@Column({ name: 'DATA_FABRICACAO' })
	dataFabricacao: Date;

	@Column({ name: 'DATA_VALIDADE' })
	dataValidade: Date;

	@Column({ name: 'CODIGO_AGREGACAO' })
	codigoAgregacao: string;


	/**
	* Relations
	*/
    @ManyToOne(() => NfeDetalhe, nfeDetalhe => nfeDetalhe.listaNfeItemRastreado)
    @JoinColumn({ name: "ID_NFE_DETALHE" })
    nfeDetalhe: NfeDetalhe;


	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.numeroLote = objetoJson['numeroLote'];
			this.quantidadeItens = objetoJson['quantidadeItens'];
			this.dataFabricacao = objetoJson['dataFabricacao'];
			this.dataValidade = objetoJson['dataValidade'];
			this.codigoAgregacao = objetoJson['codigoAgregacao'];
			
			
		}
	}
}