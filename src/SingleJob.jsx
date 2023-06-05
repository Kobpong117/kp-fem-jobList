const SingleJob = (props) => {
    const {company, contract, featured, isNew, languages, level, location, logo, position, postedAt, role, tools, filterByTag} = props
    const tags = new Set([level, role, ...languages, ...tools])
    const uniqueTag = [...tags]
    
  return (
    <article className="job-card">
        <section className="job-info">
            <div className="company-logo">
                <img src={logo} alt={company} />
            </div>
            <div className="info">  
                <div id="company">
                    {company}
                    {isNew && <span id="new">new!</span>}
                    {featured && <span id="featured">featured</span>}
                </div>
                <div id="position">{position}</div>
                <div className="more-info">
                    <p>{postedAt}</p>
                    <p>&#xB7;</p>
                    <p>{contract}</p>
                    <p>&#xB7;</p>
                    <p>{location}</p>
                </div>                
            </div>
        </section>
        <section className="job-tags">
            {uniqueTag.map(tag => {
                return <button 
                            type="button"
                            key={tag} 
                            id="tag"
                            onClick={() => filterByTag(tag)}
                        >
                            {tag}
                        </button>
            })}
        </section>
    </article>
  )
}
export default SingleJob