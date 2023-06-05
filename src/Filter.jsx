const Filter = ({getTags, clearAllTags, removeTag}) => {
  return (
    <div className="filter-section">
      <div className="tag-display">
        {getTags.length > 0 && getTags.map(tag => {
                                return (<div key={tag} id="tag-element">
                                          <button id="tag-btn">{tag}</button>
                                          <button id="tag-close" onClick={() => removeTag(tag)}>X</button>
                                        </div>)
                              }
        )}
      </div>
      <div id="clear" onClick={clearAllTags}>Clear</div>
    </div>
  )
}
export default Filter