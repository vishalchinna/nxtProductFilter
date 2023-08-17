import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterInput = event => {
    const {searchEnterInput} = props
    if (event.key === 'Enter') {
      searchEnterInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="input-box">
        <input
          type="search"
          value={searchInput}
          placeholder="search"
          className="input-search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoryList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(each => {
      const {onChangeCategory} = props
      const onClickCategoryItem = () => onChangeCategory(each.categoryId)

      return (
        <li onClick={onClickCategoryItem} key={each.categoryId}>
          <p className="ctg-name">{each.name}</p>
        </li>
      )
    })
  }

  const renderProductCategory = () => (
    <>
      <h1 className="category">Category</h1>
      <ul className="ul-list">{renderCategoryList()}</ul>
    </>
  )

  const renderRatingList = () => {
    const {ratingsList} = props
    return ratingsList.map(each => {
      const {changeRating} = props
      const onClickRatingItem = () => changeRating(each.ratingId)

      return (
        <li
          className="rating-box"
          key={each.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={each.imageUrl}
            alt={`rating ${each.ratingId}`}
            className="rating"
          />
          <p className="up">& UP</p>
        </li>
      )
    })
  }

  const renderProductRating = () => (
    <>
      <h1 className="category">Ratings</h1>
      <ul className="ul-list">{renderRatingList()}</ul>
    </>
  )

  const clearFilters = () => {
    const {onChangeClearAllFilters} = props
    onChangeClearAllFilters()
  }

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategory()}
      {renderProductRating()}

      <button type="button" onClick={clearFilters} className="btn">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
