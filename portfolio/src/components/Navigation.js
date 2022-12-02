import React from 'react';

function Tabs ({ currentTab, handleTabChange }) {
return (
<ul className='nav-tabs'>
    <li className= {`items ${currentTab === 'AboutMe' ? 'nav-link active' : 'nav-link'}`}onClick={() => handleTabChange('AboutMe')}>
About Me
</li>

</ul>




 );
}




export default Navigation;