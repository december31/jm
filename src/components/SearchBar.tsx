import '../assets/scss/searchBar.scss'

function SearchBar() {
	return (
		<div className='search-bar'>
			<div className='search-bar-container'>
				<input type="text" name="search" value="" placeholder='Bạn muốn tìm sản phẩm gì?' onChange={() => {}}/>
				<button type="button">Tìm kiếm ngay</button>
			</div>
		</div>
	)
}

export default SearchBar