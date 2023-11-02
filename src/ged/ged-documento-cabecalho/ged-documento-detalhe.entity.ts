/*******************************************************************************
Title: Global Software e Tecnologia ERP                                                                
Description: Model relacionado à tabela [GED_DOCUMENTO_DETALHE] 
                                                                                
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
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { GedDocumentoCabecalho } from '../../entities-export';
import { GedTipoDocumento } from '../../entities-export';

@Entity({ name: 'GED_DOCUMENTO_DETALHE' })
export class GedDocumentoDetalhe { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'NOME' })
	nome: string;

	@Column({ name: 'DESCRICAO' })
	descricao: string;

	@Column({ name: 'PALAVRAS_CHAVE' })
	palavrasChave: string;

	@Column({ name: 'PODE_EXCLUIR' })
	podeExcluir: string;

	@Column({ name: 'PODE_ALTERAR' })
	podeAlterar: string;

	@Column({ name: 'ASSINADO' })
	assinado: string;

	@Column({ name: 'DATA_FIM_VIGENCIA' })
	dataFimVigencia: Date;

	@Column({ name: 'DATA_EXCLUSAO' })
	dataExclusao: Date;


	/**
	* Relations
	*/
    @OneToOne(() => GedTipoDocumento)
    @JoinColumn({ name: "ID_GED_TIPO_DOCUMENTO" })
    gedTipoDocumento: GedTipoDocumento;

    @ManyToOne(() => GedDocumentoCabecalho, gedDocumentoCabecalho => gedDocumentoCabecalho.listaGedDocumentoDetalhe)
    @JoinColumn({ name: "ID_GED_DOCUMENTO_CABECALHO" })
    gedDocumentoCabecalho: GedDocumentoCabecalho;


	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.nome = objetoJson['nome'];
			this.descricao = objetoJson['descricao'];
			this.palavrasChave = objetoJson['palavrasChave'];
			this.podeExcluir = objetoJson['podeExcluir'];
			this.podeAlterar = objetoJson['podeAlterar'];
			this.assinado = objetoJson['assinado'];
			this.dataFimVigencia = objetoJson['dataFimVigencia'];
			this.dataExclusao = objetoJson['dataExclusao'];
			
			if (objetoJson['gedTipoDocumento'] != null) {
				this.gedTipoDocumento = new GedTipoDocumento(objetoJson['gedTipoDocumento']);
			}

			
		}
	}
}