import React from 'react'
import {tabs} from './tabsData'
import {motion} from 'framer-motion'

const Tabs = (props) => {

  return (
    <div>
        <div className='tabs-wrapper'>
          {tabs.map((tab) => (
            <motion.button 
              key = {tab.id}
              onClick = {() => props.tabClick(tab.id)}
              className='tab'
              whileHover={{opacity: props.activeTab === tab.id ? 1 : 0.7}}
              transition={{duration: 0.15}}>
              <span className='u-position-relative'
              style={{mixBlendMode: 'exclusion'}}>
                {tab.title}
              </span>
             {props.activeTab === tab.id && (
            <motion.div className={props.activeTab === tab.id ? 'active-tab' : ''}
             layoutId='active'
             transition= {{
              type: 'spring',
              stiffness: 360,
              damping:32
             }}
             style={{borderRadius: '50vw'}}
             >
            </motion.div>
            )}
            </motion.button>
          ))}
        </div>

    </div>
  )
}

export default Tabs