import { DataSource, DataSourceOptions } from 'typeorm';

const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'passwordroot',
  database: 'simple-chat',
  entities: ['src/entity/*.entity.ts'],
  migrations: ['src/migrations/*.ts'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
