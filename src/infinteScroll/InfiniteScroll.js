/**
 * @module infiniteScroll
 */
import React, { useCallback, useRef, useState } from 'react';
import useBookSearch from './useBookSearch';
import { Grid, TextField } from '@material-ui/core';
import BookLists from './BookLists';

/**
 * InfiniteScroll Component
 * @returns {HTMLElement}
 */
const InfiniteScroll = () => {
	const [ query, setQuery ] = useState('');
	const [ pageNumber, setPageNumber ] = useState(1);
	const observer = useRef();

	const { loading, error, books, hasMore } = useBookSearch(query, pageNumber);

	const lastBookElementRef = useCallback((node) => {
		if (loading) return;
		if (observer.current) observer.current.disconnect();
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && hasMore) {
				setPageNumber(pageNumber + 1);
			}
		});
		if (node) observer.current.observe(node);
	});

	const handleChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
		setPageNumber(1);
	};

	return (
		<Grid container justify="center">
			<Grid item xs={6}>
				<h4>Infinite Scrolling</h4>
				<div>
					<TextField required label="Search Books" variant="filled" fullWidth onChange={handleChange} />
				</div>
				<BookLists books={books} lastBookElementRef={lastBookElementRef} />
				{loading && <div>Loading...</div>}
				{error && <div>Error</div>}
			</Grid>
		</Grid>
	);
};

export default InfiniteScroll;
