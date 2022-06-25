import { useState } from 'react';
import styles from './Banner.module.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';



function Banner(props){

	const homeFunction = props.homeFunction;
	const servicesFunction = props.servicesFunction;
	// const galleryFunction = props.galleryFunction;
	const contactFunction = props.contactFunction;

	
	const [WhichHovered, setWhichHovered] = useState(true);
	const toggleWhichHovered = () => setWhichHovered(!WhichHovered);
	const [NicHovered, setNicHovered] = useState(true);
	const toggleNicHovered = () => setNicHovered(!NicHovered);

	return (
		<div className= {styles.background}>
			<header className={styles.header}>
				<img src={require('../pictures/logo.jpg')} alt='logo'  className={styles.logo}/>
				
				<ul className={styles.unordered_list}>
					<li onClick={homeFunction}>Home</li>
					<li onClick={servicesFunction}>Services</li>
					
					<li onClick={contactFunction}>Contact</li>
					
				</ul>
				<a href="http://www.niceic.com/householder/find-a-contractor-results?q=GL20+5RX"  className={styles.link_box}  onMouseEnter={toggleNicHovered} onMouseLeave={toggleNicHovered}>
					<img src={require('../pictures/nic.png')} alt='nic' className={NicHovered ? styles.nic : styles.nic_hovered}/>
				</a>
				<a href="https://trustedtraders.which.co.uk/businesses/home-commercial-electrical-services/"  className={styles.link_box} onMouseEnter={toggleWhichHovered} onMouseLeave={toggleWhichHovered}>
					<img src={require('../pictures/tt-which-logo.png')} alt='which' className={WhichHovered ? styles.which : styles.which_hovered}/>
				</a>

			</header>
		</div>
	)
}
// <li onClick={galleryFunction}>Gallery</li>
export default Banner;