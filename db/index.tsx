import { neon } from '@neondatabase/serverless';

const client = neon(process.env.DB_URL || '');
console.log(client)

export default client;
