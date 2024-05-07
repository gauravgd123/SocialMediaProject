import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

function App(){
  const [selectedTab,setSelectedTab]=useState('Home');

  return (

    <div className="app-container">
    <SideBar selectedTab={selectedTab} setSelectedTab = {setSelectedTab} />
    <div className="content">
     <Header />
     {selectedTab === 'Home' ?( <PostList /> ): (<CreatePost /> )} 
     <Footer />
     </div>
     
     </div>

  )
}

export default App;
