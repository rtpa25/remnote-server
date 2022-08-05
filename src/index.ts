//@dependencies
import { getAllCORSHeaders } from 'supertokens-node';
import { middleware } from 'supertokens-node/framework/express';
import { errorHandler } from 'supertokens-node/framework/express';
import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import 'dotenv/config';

//@internal-utils
import logger from './utils/logger';
import { initSuperTokens } from './utils/initSuperTokens';
import { connect } from './utils/connect';

//@routers
import userRouter from './routes/user.router';
import pagesRouter from './routes/pages.router';
import remRouter from './routes/rem.router';

initSuperTokens();

const app = express();
const port = process.env.PORT || 8080;

app.set('trust proxy', 1);
app.use(express.json());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://www.remnote.site',
      'https://remnote.site',
    ],
    allowedHeaders: ['content-type', ...getAllCORSHeaders()],
    credentials: true,
  })
);
app.use(middleware());

app.get('/', (_, res) => {
  res.send('Hello from Remnote');
});

app.use('/users', userRouter);
app.use('/pages', pagesRouter);
app.use('/rems', remRouter);

//AFTER all routes
app.use(errorHandler());

app.listen(port, async () => {
  await connect();
  logger.info(`app listening at http://localhost:${port}`);
});
