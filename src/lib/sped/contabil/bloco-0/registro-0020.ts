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
export class Registro0020 {

    indDec: number;	 /// Indicador de descentralização - 0 - escrituração da matriz
    cnpj: string;	 /// Número de inscrição do empresário ou sociedade empresária no CNPJ da matriz ou da filial.
    uf: string;	 /// Sigla da unidade da federação da matriz ou da filial.
    ie: string;	 /// Inscrição estadual da matriz ou da filial.
    codMun: number;	 /// Código do município do domicílio da matriz ou da filial.
    im: string;	 /// Número de Inscrição Municipal da matriz ou da filial.
    nire: string;	 /// Número de Identificação do Registro de Empresas da matriz ou da filial na Junta Comercial.

}
