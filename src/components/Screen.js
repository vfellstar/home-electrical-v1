import styles from './Screen.module.css';
import {Fragment, useState, useEffect} from 'react'
import Banner from './Banner';
import Home from '../pages/screens/Home';
import Gallery from '../pages/screens/Gallery';
import Contact from '../pages/screens/Contact';
import Services from '../pages/screens/Services';



function Screen(props){

	// // declarations
	// const [isHome, setIsHome] = useState();
	const [isHome, setIsHome] = useState(true);
	const [isServices, setIsServices] = useState();
	const [isGallery, setIsGallery] = useState();
	const [isContact, setIsContact] = useState();

	// // set parent variables
	// useEffect(() => {
	// 	setIsCharity(props.isCharity)
	// }, [props])

	function goHomeScreen() {
		setIsHome(true);
		setIsServices(false);
		setIsGallery(false);
		setIsContact(false);
	}
	function goServiceScreen() {
		setIsHome(false);
		setIsServices(true);
		setIsGallery(false);
		setIsContact(false);

	}
	function goGalleryScreen() {
		setIsHome(false);
		setIsServices(false);
		setIsGallery(true);
		setIsContact(false);

	}
	function goContactScreen() {
		setIsHome(false);
		setIsServices(false);
		setIsGallery(false);
		setIsContact(true);

	}

	// // messages to display
	// let welcome_message = "Donor Home Page";

	// if (props.isCharity === true) {
	// 	welcome_message = "Charity Home Page";
	// }


	return (
		<Fragment>
			<div className={styles.background}>
				<Banner homeFunction={goHomeScreen}  servicesFunction={goServiceScreen}  galleryFunction={goGalleryScreen}  contactFunction={goContactScreen}/>
					{isHome? (<Home/>) :  ""}
					{isServices? (<Services/>) :  ""}
					{isGallery? (<Gallery/>) :  ""}
					{isContact? (<Contact/>) :  ""}

			</div>
		</Fragment>
	)
}

export default Screen;