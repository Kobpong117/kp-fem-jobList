import { useState } from 'react'
import headerImg from './bg-header-desktop.svg'
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

    // create new property for each job name 'tags' to store all the tags of that job
    data.map(item => {
      item['tags'] = [item.level, item.role, ...item.languages, ...item.tools]
    })

  }

  const [jobs, setJobs] = useState(data)

  // getTags is for the selected tag that will be shown in Filter component
  const [getTags, setGetTags] = useState([])

  const filterByTag = (tag) => {
    // Check all jobs if there is a match for selected tag
    // if so, store it in newJobs variable
    const newJobs = jobs.filter(job => job.level === tag || job.role === tag || job.languages.includes(tag) || job.tools.includes(tag))
    // Display only jobs that match the tag
    setJobs(newJobs)

    // Push the selected tag into the getTags list in case it hasn't been included in the list yet
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
      // keep all the tags except the selected one. The selected tag will be removed.
      // Store the remaining tags in newTags variable
      const newTags = currentTags.filter(item => item !== tag)     
      // Check all jobs (data) that match all remaining tags. Store those jobs in newJobs variable
      const newJobs = data.filter(job => newTags.every(tag => job.tags.includes(tag)))
      // Display only jobs that match the tag
      setJobs(newJobs)
      // In case there is no remaining tag, display all jobs 
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
