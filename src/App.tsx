import { Link, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Tab, TabList, Tabs } from '@chakra-ui/react';



const App =()=>{

  return (
    <div >
      <Header/>
      <Tabs colorScheme={"pink"} isFitted>
  <TabList>
    <Tab as ={Link} to={"/"}>Домашние животные</Tab>
    <Tab as ={Link} to={"/volunteers"}>Волонтёры</Tab>
    <Tab as ={Link} to={"/news"}>Новости и объявления</Tab>
  </TabList>
</Tabs>
      <main>
        <Outlet/>
      </main>
      <footer/>
    </div>
);
}

export default App
