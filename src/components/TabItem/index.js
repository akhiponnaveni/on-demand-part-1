import './index.css'

const TabItem = props => {
  const {tabDetails, selectTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onSelect = () => {
    selectTab(tabId)
  }

  const activeBtn = isActive ? 'active' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtn}`}
        onClick={onSelect}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
