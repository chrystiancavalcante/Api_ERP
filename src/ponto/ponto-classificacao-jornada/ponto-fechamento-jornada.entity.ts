/*******************************************************************************
Title: Global Software e Tecnologia3.0                                                                
Description: Model relacionado à tabela [PONTO_FECHAMENTO_JORNADA] 
                                                                                
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
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'PONTO_FECHAMENTO_JORNADA' })
export class PontoFechamentoJornada { 

	@PrimaryGeneratedColumn()
	id: number;

	@Column({ name: 'ID_PONTO_CLASSIFICACAO_JORNADA' })
	idPontoClassificacaoJornada: number;

	@Column({ name: 'ID_COLABORADOR' })
	idColaborador: number;

	@Column({ name: 'DATA_FECHAMENTO' })
	dataFechamento: Date;

	@Column({ name: 'DIA_SEMANA' })
	diaSemana: string;

	@Column({ name: 'CODIGO_HORARIO' })
	codigoHorario: string;

	@Column({ name: 'CARGA_HORARIA_ESPERADA' })
	cargaHorariaEsperada: string;

	@Column({ name: 'CARGA_HORARIA_DIURNA' })
	cargaHorariaDiurna: string;

	@Column({ name: 'CARGA_HORARIA_NOTURNA' })
	cargaHorariaNoturna: string;

	@Column({ name: 'CARGA_HORARIA_TOTAL' })
	cargaHorariaTotal: string;

	@Column({ name: 'ENTRADA01' })
	entrada01: string;

	@Column({ name: 'SAIDA01' })
	saida01: string;

	@Column({ name: 'ENTRADA02' })
	entrada02: string;

	@Column({ name: 'SAIDA02' })
	saida02: string;

	@Column({ name: 'ENTRADA03' })
	entrada03: string;

	@Column({ name: 'SAIDA03' })
	saida03: string;

	@Column({ name: 'ENTRADA04' })
	entrada04: string;

	@Column({ name: 'SAIDA04' })
	saida04: string;

	@Column({ name: 'ENTRADA05' })
	entrada05: string;

	@Column({ name: 'SAIDA05' })
	saida05: string;

	@Column({ name: 'HORA_INICIO_JORNADA' })
	horaInicioJornada: string;

	@Column({ name: 'HORA_FIM_JORNADA' })
	horaFimJornada: string;

	@Column({ name: 'HORA_EXTRA01' })
	horaExtra01: string;

	@Column({ name: 'PERCENTUAL_HORA_EXTRA01' })
	percentualHoraExtra01: number;

	@Column({ name: 'MODALIDADE_HORA_EXTRA01' })
	modalidadeHoraExtra01: string;

	@Column({ name: 'HORA_EXTRA02' })
	horaExtra02: string;

	@Column({ name: 'PERCENTUAL_HORA_EXTRA02' })
	percentualHoraExtra02: number;

	@Column({ name: 'MODALIDADE_HORA_EXTRA02' })
	modalidadeHoraExtra02: string;

	@Column({ name: 'HORA_EXTRA03' })
	horaExtra03: string;

	@Column({ name: 'PERCENTUAL_HORA_EXTRA03' })
	percentualHoraExtra03: number;

	@Column({ name: 'MODALIDADE_HORA_EXTRA03' })
	modalidadeHoraExtra03: string;

	@Column({ name: 'HORA_EXTRA04' })
	horaExtra04: string;

	@Column({ name: 'PERCENTUAL_HORA_EXTRA04' })
	percentualHoraExtra04: number;

	@Column({ name: 'MODALIDADE_HORA_EXTRA04' })
	modalidadeHoraExtra04: string;

	@Column({ name: 'FALTA_ATRASO' })
	faltaAtraso: string;

	@Column({ name: 'COMPENSAR' })
	compensar: string;

	@Column({ name: 'BANCO_HORAS' })
	bancoHoras: string;

	@Column({ name: 'OBSERVACAO' })
	observacao: string;


	/**
	* Relations
	*/

	/**
	* Constructor
	*/
	constructor(objetoJson: {}) {
		if (objetoJson != null) {
			this.id = objetoJson['id'] == 0 ? undefined : objetoJson['id'];
			this.idPontoClassificacaoJornada = objetoJson['idPontoClassificacaoJornada'];
			this.idColaborador = objetoJson['idColaborador'];
			this.dataFechamento = objetoJson['dataFechamento'];
			this.diaSemana = objetoJson['diaSemana'];
			this.codigoHorario = objetoJson['codigoHorario'];
			this.cargaHorariaEsperada = objetoJson['cargaHorariaEsperada'];
			this.cargaHorariaDiurna = objetoJson['cargaHorariaDiurna'];
			this.cargaHorariaNoturna = objetoJson['cargaHorariaNoturna'];
			this.cargaHorariaTotal = objetoJson['cargaHorariaTotal'];
			this.entrada01 = objetoJson['entrada01'];
			this.saida01 = objetoJson['saida01'];
			this.entrada02 = objetoJson['entrada02'];
			this.saida02 = objetoJson['saida02'];
			this.entrada03 = objetoJson['entrada03'];
			this.saida03 = objetoJson['saida03'];
			this.entrada04 = objetoJson['entrada04'];
			this.saida04 = objetoJson['saida04'];
			this.entrada05 = objetoJson['entrada05'];
			this.saida05 = objetoJson['saida05'];
			this.horaInicioJornada = objetoJson['horaInicioJornada'];
			this.horaFimJornada = objetoJson['horaFimJornada'];
			this.horaExtra01 = objetoJson['horaExtra01'];
			this.percentualHoraExtra01 = objetoJson['percentualHoraExtra01'];
			this.modalidadeHoraExtra01 = objetoJson['modalidadeHoraExtra01'];
			this.horaExtra02 = objetoJson['horaExtra02'];
			this.percentualHoraExtra02 = objetoJson['percentualHoraExtra02'];
			this.modalidadeHoraExtra02 = objetoJson['modalidadeHoraExtra02'];
			this.horaExtra03 = objetoJson['horaExtra03'];
			this.percentualHoraExtra03 = objetoJson['percentualHoraExtra03'];
			this.modalidadeHoraExtra03 = objetoJson['modalidadeHoraExtra03'];
			this.horaExtra04 = objetoJson['horaExtra04'];
			this.percentualHoraExtra04 = objetoJson['percentualHoraExtra04'];
			this.modalidadeHoraExtra04 = objetoJson['modalidadeHoraExtra04'];
			this.faltaAtraso = objetoJson['faltaAtraso'];
			this.compensar = objetoJson['compensar'];
			this.bancoHoras = objetoJson['bancoHoras'];
			this.observacao = objetoJson['observacao'];
			
			
		}
	}
}