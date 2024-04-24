import { useState } from 'react'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Students from './components/Students';
import Products from './components/Products';
import Footer from './components/Footer';
import PromiseSection from './components/Promise';



function App() {
 
  return (
  <>


  <div className='bg-slate-950  w-full'>
  <Navbar />
  <Header />
  <Students />
  <Products />
  <PromiseSection />
  <Footer />
  
  </div>
  </>
  );
}

export default App
