import './App.css';
import CounterComponent from './components/counter/CounterComponent';
import Layout from './components/layout/Layout';
import Tasks from './components/tasks/Tasks';

function App() {
  return (
    <div>
      <Layout>
        <CounterComponent/>
        <Tasks/>
      </Layout>
    </div>
  );
}

export default App;