import { StatusBar } from 'expo-status-bar';
import Modal from './src/components/Modal';
import Home from './src/screens/Home';
import Login from './src/screens/Login';

export default function App() {
  return (
    <>
      {/* <Modal /> */}
      <Home />
      {/* <Login /> */}
      <StatusBar style="light" />
    </>
  );
}


