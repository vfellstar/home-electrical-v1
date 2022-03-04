import styles from './Screens.module.css';
import {Fragment, useState, useEffect} from 'react'
import TextBox from './components/TextBox';


function Home(props){

	const title1 = "HΩME & COMMERCIAL ELECTRICAL SERVICES ";
	const para1 = "We provide any home or commercial electrical improvement work you need, from large scale renovations to the smallest of fixes! \n Select the services tab to view approximate costs.";

	const title2 = "";
	const para2 = "It can be tough to get great service for all those electrical needs around the house or your business. Home & Commercial Electrical Services understands that your business and personal life have overwhelming busy time constraints and that you simply don’t have time to be let down or wait all day for an electrician to arrive. That’s why we provide booking times to suit your requirements. \n Call today and start feeling at ease — you’ll be glad you did.";





	return (
		<Fragment>
			<div className={styles.homeBackground}>
				<div className={styles.homeTextBox}>
					<TextBox text={para1} header={title1}/>
				</div>

				<div className={styles.homeTextBox2}>
					<TextBox text={para2} header={title2}/>
				</div>
				
			</div>
		</Fragment>
	)
}

export default Home;