/*******************************************************************************
Title: Global Software e Tecnologia3.0                                                                
Description: Model relacionado à tabela [PCP_OP_CABECALHO] 
                                                                                
The MIT License                                                                 
                                                                                
Copyright: Copyright (C) 2021 Global Software e Tecnologia                                          
                                                                                
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
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'PCP_OP_CABECALHO' })
export class PcpOpCabecalho { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'INICIO' })
	inicio: Date;

	@Column({ name: 'PREVISAO_ENTREGA' })
	previsaoEntrega: Date;

	@Column({ name: 'TERMINO' })
	termino: Date;

	@Column({ name: 'CUSTO_TOTAL_PREVISTO' })
	custoTotalPrevisto: number;

	@Column({ name: 'CUSTO_TOTAL_REALIZADO' })
	custoTotalRealizado: number;

	@Column({ name: 'PORCENTO_VENDA' })
	porcentoVenda: number;

	@Column({ name: 'PORCENTO_ESTOQUE' })
	porcentoEstoque: number;


	/**
	* Relations
	*/

	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.inicio = objetoJson['inicio'];
			this.previsaoEntrega = objetoJson['previsaoEntrega'];
			this.termino = objetoJson['termino'];
			this.custoTotalPrevisto = objetoJson['custoTotalPrevisto'];
			this.custoTotalRealizado = objetoJson['custoTotalRealizado'];
			this.porcentoVenda = objetoJson['porcentoVenda'];
			this.porcentoEstoque = objetoJson['porcentoEstoque'];
			
			
		}
	}
}