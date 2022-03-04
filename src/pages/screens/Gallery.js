import styles from './Screens.module.css';
import {Fragment, useState, useEffect} from 'react'



function Gallery(props){

	// // declarations
	// const [isCharity, setIsCharity] = useState();

	// // set parent variables
	// useEffect(() => {
	// 	setIsCharity(props.isCharity)
	// }, [props])

	// // messages to display
	// let welcome_message = "Donor Home Page";

	// if (props.isCharity === true) {
	// 	welcome_message = "Charity Home Page";
	// }



	return (
		<Fragment>
			<div className={styles.background}>
				<p>Gallery</p>
			</div>
		</Fragment>
	)
}

export default Gallery;