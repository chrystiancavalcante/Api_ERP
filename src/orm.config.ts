import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const configMySQL: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '1q2w3e4r',
  database: 'fenix',
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: false,
  bigNumberStrings: false,
  multipleStatements: true,
  logging: true
};
