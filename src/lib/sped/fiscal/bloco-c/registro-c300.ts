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

import { RegistroC310 } from "./registro-c310";
import { RegistroC320 } from "./registro-c320";

export class RegistroC300 {

    codMod: string;	 // Código do modelo do documento fiscal, conforme a Tabela 4.1.1
    ser: string;	 // Série do documento fiscal
    sub: string;	 // Subsérie do documento fiscal
    numDocIni: string;	 // Número do documento fiscal inicial
    numDocFin: string;	 // Número do documento fiscal final
    dtDoc: Date;	 // Data da emissão dos documentos fiscais
    vlDoc: number;	 // Valor total dos documentos
    vlPis: number;	 // Valor total do PIS
    vlCofins: number;	 // Valor total da COFINS
    codCta: string;	 // Código da conta analítica contábil debitada/creditada
    registroC310List: RegistroC310[];
    registroC320List: RegistroC320[];

    constructor() {
        this.registroC310List = [];
        this.registroC320List = [];
    }

}
