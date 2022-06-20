import styles from './Banner.module.css';
// import {BrowserRouter as Router, Link} from 'react-router-dom';



function Banner(props){

	const homeFunction = props.homeFunction;
	const servicesFunction = props.servicesFunction;
	// const galleryFunction = props.galleryFunction;
	const contactFunction = props.contactFunction;

	return (
		<div className= {styles.background}>
			<header className={styles.header}>
				<img src={require('../pictures/logo.jpg')} alt='logo'  className={styles.logo}/>
				
				<ul className={styles.unordered_list}>
					<li onClick={homeFunction}>Home</li>
					<li onClick={servicesFunction}>Services</li>
					
					<li onClick={contactFunction}>Contact</li>
					
				</ul>

				<a href="https://trustedtraders.which.co.uk/businesses/home-commercial-electrical-services/"  className={styles.link_box}>
					<img src={require('../pictures/tt-which-logo.png')} alt='which' className={styles.which}/>
				</a>
			</header>
		</div>
	)
}
// <li onClick={galleryFunction}>Gallery</li>
export default Banner;