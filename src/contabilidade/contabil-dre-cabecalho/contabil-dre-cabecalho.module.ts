/*******************************************************************************
Title: Global Software e Tecnologia3.0                                                                
Description: Module relacionado à tabela [CONTABIL_DRE_CABECALHO] 
                                                                                
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
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContabilDreCabecalhoController } from './contabil-dre-cabecalho.controller';
import { ContabilDreCabecalhoService } from './contabil-dre-cabecalho.service';
import { ContabilDreCabecalho } from './contabil-dre-cabecalho.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ContabilDreCabecalho])],
    controllers: [ContabilDreCabecalhoController],
    providers: [ContabilDreCabecalhoService],
})
export class ContabilDreCabecalhoModule { }
