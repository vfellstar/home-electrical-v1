import styles from './Banner.module.css';



function Banner(props){

	const homeFunction = props.homeFunction;
	const servicesFunction = props.servicesFunction;
	const galleryFunction = props.galleryFunction;
	const contactFunction = props.contactFunction;

	return (
		<div className= {styles.background}>
			<header className={styles.header}>
				<img src={require('../pictures/logo.jpg')} alt='logo'  className={styles.logo}/>
				
				<ul className={styles.unordered_list}>
					<li onClick={homeFunction}>Home</li>
					<li onClick={servicesFunction}>Services</li>
					<li onClick={galleryFunction}>Gallery</li>
					<li onClick={contactFunction}>Contact</li>
				</ul>
			</header>
		</div>
	)
}

export default Banner;