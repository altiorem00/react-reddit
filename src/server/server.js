import express from 'express';
import ReactDOM from 'react-dom/server';
import axios from 'axios';
import { indexTemplate } from './indexTemplate';
import { App } from '../App';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App())),
  );
});

app.get('/auth', (req, res) => {
  axios.post(
    'https://www.reddit.com/api/v1/access_token',
    `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
    {
      auth: { username: 'SaNZsn5yWL8Uw46sXLafcg', password: 'cnscc4fU8Udm5oCxz_Nx9j2lEVd0jg' },
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
    },
  ).then(({ data }) => {
    res.send(
      indexTemplate(ReactDOM.renderToString(App()), data.access_token),
    );
  }).catch(console.log);
});

app.listen(3000, () => {
  console.log('server started on http://localhost:3000/');
});
