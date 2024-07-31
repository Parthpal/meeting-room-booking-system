import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';
import errorMap from 'zod/lib/locales/en';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    server = app.listen(config.port, () => {
      console.log(`app is listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('could not connect to the database',err);
  }
}

main();

process.on('unhandledRejection', () => {
  console.log(`😈 UnhandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});