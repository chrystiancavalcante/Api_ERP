import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const configMySQL: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '',
  port: ,
  username: '',
  password: '',
  database: '',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
  bigNumberStrings: false,
  multipleStatements: true,
  logging: true
};
