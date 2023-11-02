/*******************************************************************************
Title: Global Software e Tecnologia3.0                                                                
Description: Service relacionado à tabela [VENDA_ORCAMENTO_CABECALHO] 
                                                                                
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
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { VendaOrcamentoCabecalho } from './venda-orcamento-cabecalho.entity';
import { getConnection, QueryRunner } from 'typeorm';

@Injectable()
export class VendaOrcamentoCabecalhoService extends TypeOrmCrudService<VendaOrcamentoCabecalho> {

  constructor(
    @InjectRepository(VendaOrcamentoCabecalho) repository) { super(repository); }

	async persistir(vendaOrcamentoCabecalho: VendaOrcamentoCabecalho, operacao: string): Promise<VendaOrcamentoCabecalho> {
	  let objetoRetorno: VendaOrcamentoCabecalho;
	
	  const connection = getConnection();
	  const queryRunner = connection.createQueryRunner();
	
	  await queryRunner.connect();
	  await queryRunner.startTransaction();
	  try {
	    if (operacao == 'A') {
	      await this.excluirFilhos(queryRunner, vendaOrcamentoCabecalho.id);
	    }
	    objetoRetorno = await queryRunner.manager.save(vendaOrcamentoCabecalho);
	    await queryRunner.commitTransaction();
	  } catch (erro) {
	    await queryRunner.rollbackTransaction();
	    throw (erro);
	  } finally {
	    await queryRunner.release();
	  }
	  return objetoRetorno;
	}
  
	async excluirMestreDetalhe(id: number) {
	  const connection = getConnection();
	  const queryRunner = connection.createQueryRunner();
	
	  await queryRunner.connect();
	  await queryRunner.startTransaction();
	  try {
	    await this.excluirFilhos(queryRunner, id);
	    await queryRunner.query('delete from vendaOrcamentoCabecalho where id=' + id);
	    await queryRunner.commitTransaction();
	  } catch (erro) {
	    await queryRunner.rollbackTransaction();
	    throw (erro);
	  } finally {
	    await queryRunner.release();
	  }
	}

	async excluirFilhos(queryRunner: QueryRunner, id: number) {
		await queryRunner.query('delete from VENDA_ORCAMENTO_DETALHE where ID_VENDA_ORCAMENTO_CABECALHO=' + id);
		
	}
	
}