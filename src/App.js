import { useState } from 'react';
import './App.css';
import Tabs from './Tabs';
import {tabs} from './tabsData'

function App() {

  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [completed, setCompleted] = useState (false)

  const tabSelect = (id) => {
    setActiveTab(id)
    setCompleted(false)
  }

  return (
    <div className='animated-tabs-project'>
      <header className='page-header'>
        <main className='page-main'>
          <section className='section'>
            <div className='container'>
                <Tabs activeTab = {activeTab}
                 setCompleted = {setCompleted}
                 completed = {completed}
                 tabClick = {tabSelect} />
              </div>
          </section>
        </main>
      </header>
    </div>
  );
}

export default App;
