import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Olá, estamos iniciando o Global Software e Tecnologia ERP usando o NestJS!';
  }
}
