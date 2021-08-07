import 'reflect-metadata';
import { createExpressServer, useContainer as routingContainer } from 'routing-controllers';
import { createConnection, useContainer as ormContainer } from 'typeorm';
import { Container } from 'typedi';
import TodoController from './controllers/todo.controller';

const app = createExpressServer({
  cors: true,
  routePrefix: '/api',
  controllers: [TodoController],
});

const start = async () => {
  routingContainer(Container);
  ormContainer(Container);
  try {
    const db = await createConnection({
      type: 'mongodb',
      port: 27017,
      host: 'localhost',
      database: 'moonstash',
      entities: ['src/models/*.ts'],
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }

  app.listen(3000, () => {
    console.log('test');
  });
};

start();
