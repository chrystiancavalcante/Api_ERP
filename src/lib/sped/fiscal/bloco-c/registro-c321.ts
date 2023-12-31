/*******************************************************************************
Title: Global Software e Tecnologia ERP
Description: Model relacionado ào SPED

The MIT License

Copyright: Copyright (C) 2023 Global Software e Tecnologia

* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
* 
* The author may be contacted at: Global Software e Tecnologia@gmail.com
*
@author Albert Eije (alberteije@gmail.com)
@version 1.0.0
*******************************************************************************/

export class RegistroC321 {

    codItem: string;	 // Código do item (campo 02 do Registro 0200)
    qtd: number;	 // Quantidade acumulada do item
    unid: string;	 // Unidade do item (Campo 02 do registro 0190)
    vlItem: number;	 // Valor acumulado do item
    vlDesc: number;	 // Valor do desconto acumulado
    vlBcIcms: number;	 // Valor acumulado da base de cálculo do ICMS
    vlIcms: number;	 // Valor acumulado do ICMS debitado
    vlPis: number;	 // Valor acumulado do PIS
    vlCofins: number;	 // Valor acumulado da COFINS

}
