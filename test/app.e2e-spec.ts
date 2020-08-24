import * as path from 'path';

require('dotenv').config({ path: path.resolve(__dirname, '../', '.env') });

console.log(process.env.MONGO_URI);

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { MongoClient } from 'mongodb';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let connection;

  beforeEach(async () => {
    connection = await MongoClient.connect('mongodb://travis:test@localhost:27017/nestdragon', {
      useNewUrlParser: true,
    });

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await connection.close();
    await app.close();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        message: 'hello guess',
      });
  });
});
