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

import { Registro0305 } from "./registro-0305";

export class Registro0300 {

    codIndBem: string;	 // Código individualizado do bem ou componente adotado no controle patrimonial do estabelecimento informante
    identMerc: number;	 // Identificação do tipo de mercadoria
    descrItem: string;	 // Descrição do bem ou componente (modelo, marca e outras características necessárias a sua individualização)
    codPrnc: string;	 // Código de cadastro do bem principal nos casos em que o bem ou componente ( campo 02) esteja vinculado a um bem principal.
    codCta: string;	 // Código da conta analítica de contabilização do bem ou componente (campo 06 do Registro 0500)
    nrParc: number;	 // Número total de parcelas a serem apropriadas, segundo a legislação de cada unidade federada
    registro0305: Registro0305;	 // BLOCO 0 - Registro0305 (FILHO)

}
