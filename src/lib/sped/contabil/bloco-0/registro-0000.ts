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
export class Registro0000 {

    dtIni: Date;	 /// Data inicial das informações contidas no arquivo
    dtFin: Date;	 /// Data final das informações contidas no arquivo
    nome: string;	 /// Nome empresarial do empresário ou sociedade empresária.
    cnpj: string;	 /// Número de inscrição do empresário ou sociedade empresária no CNPJ.
    uf: string;	 /// Sigla da unidade da federação do empresário ou sociedade empresária.
    ie: string;	 /// Inscrição Estadual do empresário ou sociedade empresária.
    codMun: number;	 /// Código do município do domicílio fiscal do empresário ou sociedade empresária, conforme tabela do IBGE - Instituto Brasileiro de Geografia e Estatística.
    im: string;	 /// Inscrição Municipal do empresário ou sociedade empresária.
    indSitEsp: string;	 /// Indicador de situação especial (conforme tabela publicada pelo Sped).

}
