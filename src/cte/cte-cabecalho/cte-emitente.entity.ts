/*******************************************************************************
Title: Global Software e Tecnologia3.0                                                                
Description: Model relacionado à tabela [CTE_EMITENTE] 
                                                                                
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

@Entity({ name: 'CTE_EMITENTE' })
export class CteEmitente { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'ID_CTE_CABECALHO' })
	idCteCabecalho: number;

	@Column({ name: 'CNPJ' })
	cnpj: string;

	@Column({ name: 'IE' })
	ie: string;

	@Column({ name: 'NOME' })
	nome: string;

	@Column({ name: 'FANTASIA' })
	fantasia: string;

	@Column({ name: 'LOGRADOURO' })
	logradouro: string;

	@Column({ name: 'NUMERO' })
	numero: string;

	@Column({ name: 'COMPLEMENTO' })
	complemento: string;

	@Column({ name: 'BAIRRO' })
	bairro: string;

	@Column({ name: 'CODIGO_MUNICIPIO' })
	codigoMunicipio: number;

	@Column({ name: 'NOME_MUNICIPIO' })
	nomeMunicipio: string;

	@Column({ name: 'UF' })
	uf: string;

	@Column({ name: 'CEP' })
	cep: string;

	@Column({ name: 'TELEFONE' })
	telefone: string;


	/**
	* Relations
	*/

	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.idCteCabecalho = objetoJson['idCteCabecalho'];
			this.cnpj = objetoJson['cnpj'];
			this.ie = objetoJson['ie'];
			this.nome = objetoJson['nome'];
			this.fantasia = objetoJson['fantasia'];
			this.logradouro = objetoJson['logradouro'];
			this.numero = objetoJson['numero'];
			this.complemento = objetoJson['complemento'];
			this.bairro = objetoJson['bairro'];
			this.codigoMunicipio = objetoJson['codigoMunicipio'];
			this.nomeMunicipio = objetoJson['nomeMunicipio'];
			this.uf = objetoJson['uf'];
			this.cep = objetoJson['cep'];
			this.telefone = objetoJson['telefone'];
			
			
		}
	}
}