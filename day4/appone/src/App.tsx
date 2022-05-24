import React from 'react';
import './App.css';
import AddUser from './component/AddUser';
import Messagebox from './component/Messagebox';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()
function App() {
  return (
   
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
            <Route path='/' element={< Messagebox />} ></Route>
          <Route path='/adduser' element={<AddUser /> } > </Route>
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
