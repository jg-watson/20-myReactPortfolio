import React, {useState} from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';


const App = () => {



const [currentTab, setCurrentTab] = useState('AboutMe');


const renderTab = () => {
    if (currentTab === 'AboutMe') {
        return <AboutMe/>;
    }
    if (currentTab === 'Portfolio') {
        return <Portfolio/>;
    } 
    if(currentTab === 'Contact') {
        return <Contact/>
    }
    if(currentTab === 'Resume') {
        return <Resume/>
    }
}

const handleTabChange = (tab) => setCurrentTab(tab);



return (
<div>
<NavTabs currentTab = {currentTab} handleTabChange = {handleTabChange} />
{renderTab()}
</div>

)
};
export default App;
