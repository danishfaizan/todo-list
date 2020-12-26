import React from 'react';

// function getButtonClassnames(props) {
// 	const isActive = props.filterMethod === 'all' ? 'active-filter' : undefined;
// 	return `${this.getThemeClass('filter-bar')}   ${isActive}`;
// }

function FilterBar(props) {
	return (
		<div className={`filter-bar flex ${props.getThemeClass('filter-bar')}`}>
			<button
				className={props.filterMethod === 'all' ? 'active-filter' : undefined}
				onClick={() => props.setFilterMethod('all')}
			>
				All
			</button>
			<button
				className={props.filterMethod === 'active' ? 'active-filter' : undefined}
				onClick={() => props.setFilterMethod('active')}
			>
				Active
			</button>
			<button
				className={props.filterMethod === 'completed' ? 'active-filter' : undefined}
				onClick={() => props.setFilterMethod('completed')}
			>
				Completed
			</button>
		</div>
	);
}

export default FilterBar;
