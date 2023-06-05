import { useState } from 'react'
import headerImg from './images/bg-header-desktop.svg'
import Jobs from './Jobs'
import data from './data.json'

function App() {

  if (data) {
    data.map(item => {
      if (item.hasOwnProperty('new')) {
        item['isNew'] = item['new']
        delete item['new'] 
      }
    })

    data.map(item => {
      item['tags'] = [item.level, item.role, ...item.languages, ...item.tools]
    })

  }

  const [jobs, setJobs] = useState(data)
  const [getTags, setGetTags] = useState([])

  const filterByTag = (tag) => {
    const newJobs = jobs.filter(job => job.level === tag || job.role === tag || job.languages.includes(tag) || job.tools.includes(tag))
    setJobs(newJobs)
    if (!getTags.includes(tag)) {
      getTags.push(tag)
    }
    setGetTags(getTags)
  }

  const clearAllTags = () => {
    setJobs(data)
    setGetTags([])
  }

  const removeTag = (tag) => {

    setGetTags(currentTags => {
      const newTags = currentTags.filter(item => item !== tag)     
      const newJobs = data.filter(job => newTags.every(tag => job.tags.includes(tag)))
      setJobs(newJobs)
      newTags.length === 0 && setJobs(data)

      return newTags
    })
  }

  return (
    <main>
      <div className='page-header'>
        <img src={headerImg}  />
      </div>
      <Jobs 
        jobs={jobs} 
        getTags={getTags} 
        filterByTag={filterByTag} 
        clearAllTags={clearAllTags} 
        removeTag={removeTag}
      />
    </main>
  )
}

export default App
