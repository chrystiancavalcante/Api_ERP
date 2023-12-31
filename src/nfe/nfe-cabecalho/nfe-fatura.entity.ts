/*******************************************************************************
Title: Global Software e Tecnologia ERP                                                                
Description: Model relacionado à tabela [NFE_FATURA] 
                                                                                
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
import { NfeDuplicata } from '../../entities-export';
import { NfeCabecalho } from '../../entities-export';

@Entity({ name: 'NFE_FATURA' })
export class NfeFatura { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'NUMERO' })
	numero: string;

	@Column({ name: 'VALOR_ORIGINAL' })
	valorOriginal: number;

	@Column({ name: 'VALOR_DESCONTO' })
	valorDesconto: number;

	@Column({ name: 'VALOR_LIQUIDO' })
	valorLiquido: number;


	/**
	* Relations
	*/
    @OneToOne(() => NfeCabecalho, nfeCabecalho => nfeCabecalho.nfeFatura)
    @JoinColumn({ name: "ID_NFE_CABECALHO" })
    nfeCabecalho: NfeCabecalho;

    @OneToMany(() => NfeDuplicata, nfeDuplicata => nfeDuplicata.nfeFatura, { cascade: true })
    listaNfeDuplicata: NfeDuplicata[];


	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.numero = objetoJson['numero'];
			this.valorOriginal = objetoJson['valorOriginal'];
			this.valorDesconto = objetoJson['valorDesconto'];
			this.valorLiquido = objetoJson['valorLiquido'];
			
			
			this.listaNfeDuplicata = [];
			let listaNfeDuplicataJson = objetoJson['listaNfeDuplicata'];
			if (listaNfeDuplicataJson != null) {
				for (let i = 0; i < listaNfeDuplicataJson.length; i++) {
					let objeto = new NfeDuplicata(listaNfeDuplicataJson[i]);
					this.listaNfeDuplicata.push(objeto);
				}
			}

		}
	}
}