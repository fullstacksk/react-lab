//@ts-check

/**
 * Infinite Scroll Implementation
 * @module infiniteScroll
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { useTransition, animated } from 'react-spring';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: '150ch',
		backgroundColor: theme.palette.background.paper
	},
	inline: {
		display: 'inline'
	}
}));

/**
 * @component
 * @example
 * const books=[];
 * const lastBookElementRef = <div>lalst book</div>
 * return (
 * 		<BookLists books={books} lastBookElementRef={lastBookElementRef} />
 * )
 */

const BookLists = ({ books, lastBookElementRef }) => {
	const classes = useStyles();
	// const transitions = useTransition(books, {
	// 	from: { opacity: 0, x: -100, y:600 },
	// 	enter: { opacity: 1, x: 0, y:0 },
	// 	leave: { opacity: -1, x: 400,y:600 }
	// });
	const transitions = useTransition(books, {
		from: { opacity: 0, x: -100, y: 200 },
		enter: (book) => async (next) => {
			await next({ opacity: 1, y: 0, delay: 200 });
			await next({ x: 0 });
		},
		leave: (book) => async (next) => {
			await next({ opacity: 1, x: 200, delay: 200 });
			await next({ opacity: -1, y: 200, delay: 500 });
		}
	});
	console.log(transitions);
	return (
		<List className={classes.root}>
			{transitions((props, book) => {
				if (books.length === book.id + 1) {
					return (
						<animated.div key={book} ref={lastBookElementRef} style={props}>
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar alt={book.author} src="/static/images/avatar/1.jpg" />
								</ListItemAvatar>
								<ListItemText
									primary={book.title}
									secondary={
										<React.Fragment>
											{/* <Typography
												component="span"
												variant="body2"
												className={classes.inline}
												color="textPrimary"
											>
												{book}
											</Typography> */}
											{`— ${book.author}`}
										</React.Fragment>
									}
								/>
							</ListItem>
							<Divider variant="inset" component="li" />
						</animated.div>
					);
				} else {
					return (
						<animated.div key={book} style={props}>
							<ListItem alignItems="flex-start">
								<ListItemAvatar>
									<Avatar alt={book.author} src="/static/images/avatar/1.jpg" />
								</ListItemAvatar>
								<ListItemText
									primary={book.title}
									secondary={
										<React.Fragment>
											{/* <Typography
												component="span"
												variant="body2"
												className={classes.inline}
												color="textPrimary"
											>
												{book}
											</Typography> */}
											{`— ${book.author}`}
										</React.Fragment>
									}
								/>
							</ListItem>
							<Divider variant="inset" component="li" />
						</animated.div>
					);
				}
			})}
		</List>
	);
};

export default BookLists;
