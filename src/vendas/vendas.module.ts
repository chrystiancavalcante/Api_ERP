/*******************************************************************************
Title: Global Software e Tecnologia ERP                                                                
Description: Modules relacionados ao módulo Vendas
                                                                                
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
import { Module } from '@nestjs/common';
import { NotaFiscalModeloModule } from '../vendas/nota-fiscal-modelo/nota-fiscal-modelo.module';
import { NotaFiscalTipoModule } from '../vendas/nota-fiscal-tipo/nota-fiscal-tipo.module';
import { VendaCabecalhoModule } from '../vendas/venda-cabecalho/venda-cabecalho.module';
import { VendaCondicoesPagamentoModule } from '../vendas/venda-condicoes-pagamento/venda-condicoes-pagamento.module';
import { VendaFreteModule } from '../vendas/venda-frete/venda-frete.module';
import { VendaOrcamentoCabecalhoModule } from '../vendas/venda-orcamento-cabecalho/venda-orcamento-cabecalho.module';

@Module({
    imports: [
		NotaFiscalModeloModule,
		NotaFiscalTipoModule,
		VendaCabecalhoModule,
		VendaCondicoesPagamentoModule,
		VendaFreteModule,
		VendaOrcamentoCabecalhoModule,
    ],
})
export class VendasModule { }
