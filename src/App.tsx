import './main.global.css';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layout';
import { Header } from './shared/Header';
import { Content } from './shared/Content';
import { CardsList } from './shared/CardsList';
import { Dropdown } from './shared/Dropdown';

function AppComponent(): JSX.Element {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
        <br />
        <Dropdown onClose={() => console.log('closed')} onOpen={() => console.log('open')} button={<button>test</button>}>
          <ul>
            <li>a</li>
          </ul>
        </Dropdown>
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
