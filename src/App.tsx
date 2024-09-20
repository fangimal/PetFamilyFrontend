import { Link, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Tab, TabList, Tabs } from '@chakra-ui/react';



const App =()=>{

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex flex-col flex-1">
          <Tabs colorScheme={"pink"} isFitted>
            <TabList>
              <Tab as ={Link} to={"/"}>Домашние животные</Tab>
              <Tab as ={Link} to={"/volunteers"}>Волонтёры</Tab>
              <Tab as ={Link} to={"/news"}>Новости и объявления</Tab>
            </TabList>
          </Tabs>
        <Outlet/>
      </main>
      <footer/>
    </div>
);
}

export default App
