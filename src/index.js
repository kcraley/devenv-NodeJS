import express from 'express';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import health from './routes/health';

const port = process.env.NODE_PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(health);

app.set('HEALTH_STATUS', 'OK')

app.get('/', function(req, res) {
  res.status(200).send('Application is currently running!');
});

app.listen(port, function() {
  console.log(`${chalk.green(`Listening on port ${port}...`)}`);
});

export default app;
