import Filter from "./Filter"
import SingleJob from "./SingleJob"

const Jobs = ({jobs, getTags, filterByTag, clearAllTags, removeTag}) => {
  return (
    <section className='job-display'>
      {getTags.length > 0 && <Filter 
                                getTags={getTags} 
                                clearAllTags={clearAllTags}
                                removeTag={removeTag} 
                              />
      }

      {jobs.map(job => {
                  return <SingleJob 
                            key={job.id} 
                            {...job} 
                            filterByTag={filterByTag}  
                          />
      })}
    </section>
  )
}
export default Jobs