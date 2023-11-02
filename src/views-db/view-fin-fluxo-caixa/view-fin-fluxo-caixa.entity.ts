/*******************************************************************************
Title: Global Software e Tecnologia ERP                                                                
Description: Model relacionado à tabela [VIEW_FIN_FLUXO_CAIXA] 
                                                                                
The MIT License                                                                 
                                                                                
Copyright: Copyright (C) 2020 Global Software e Tecnologia                                          
                                                                                
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

@Entity({ name: 'VIEW_FIN_FLUXO_CAIXA' })
export class ViewFinFluxoCaixa { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'ID_CONTA_CAIXA' })
	idContaCaixa: number;

	@Column({ name: 'NOME_CONTA_CAIXA' })
	nomeContaCaixa: string;

	@Column({ name: 'NOME_PESSOA' })
	nomePessoa: string;

	@Column({ name: 'DATA_LANCAMENTO' })
	dataLancamento: Date;

	@Column({ name: 'DATA_VENCIMENTO' })
	dataVencimento: Date;

	@Column({ name: 'VALOR' })
	valor: number;

	@Column({ name: 'CODIGO_SITUACAO' })
	codigoSituacao: string;

	@Column({ name: 'DESCRICAO_SITUACAO' })
	descricaoSituacao: string;

	@Column({ name: 'OPERACAO' })
	operacao: string;


	/**
	* Relations
	*/

	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.idContaCaixa = objetoJson['idContaCaixa'];
			this.nomeContaCaixa = objetoJson['nomeContaCaixa'];
			this.nomePessoa = objetoJson['nomePessoa'];
			this.dataLancamento = objetoJson['dataLancamento'];
			this.dataVencimento = objetoJson['dataVencimento'];
			this.valor = objetoJson['valor'];
			this.codigoSituacao = objetoJson['codigoSituacao'];
			this.descricaoSituacao = objetoJson['descricaoSituacao'];
			this.operacao = objetoJson['operacao'];
			
			
		}
	}
}