import knex from 'knex';
import knexConfig from '../../knexfile.cjs'
import { NODE_ENV } from './env.js';

const db = knex(knexConfig[NODE_ENV]);

export default db;
