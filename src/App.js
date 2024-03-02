import React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './components/MainScreen/mainScreen'; // Ensure path is correct
import SquadOverviewScreen from './components/SquadOverviewScreen/SquadOverviewScreen'; // Adjust the import path as necessary

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/squad-overview" element={<SquadOverviewScreen />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
