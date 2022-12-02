import React, {useState} from 'react';
import Navigation from './Navigation';
import Project from './Project';
import Footer from './Footer';

export default function Header() {
    
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

}

return (
<div>

    
</div>

)