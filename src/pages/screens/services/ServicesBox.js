import styles from './ServicesBox.module.css';

function ServicesBox(props){



	return (
		<div className={styles.background}>

			<li className={styles.product}>
				<div className={styles.titleArea}>
					<h3 >{props.title}</h3>
					<div className={styles.description}>{props.desc}</div>
					
				</div>
				<div className={styles.priceArea}>
					<div className={styles.price}>{props.price}</div>
				</div>
			</li>
			
		</div>
	)
	
}

export default ServicesBox;