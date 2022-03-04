import styles from './Screens.module.css';
import styles2 from './Contact.module.css';
import {Fragment, useState, useEffect} from 'react'
import TextBox from './components/TextBox';
import Input from './form/Input';
import useWindowDimensions from './useWindowDimensions';



function Contact(props){

	const { height, width } = useWindowDimensions();
	const title1 = "Phone:";
	const para1 = "07890 264897";

	const title2 = "Email:";
	const para2 = "mgabb6@icloud.com";


	return (
		<Fragment>
			<div className={styles2.background}>

				<div>

					<div className={styles2.left}>
						<div className={styles2.formBox}>
							<Input/>
						</div>
					</div>

					<div className={styles2.right}>
						<h1 className={styles2.header}>OR CONTACT US TODAY</h1>

						<div className={styles2.contactBox}>
							
							<TextBox text={para1} header={title1}/>

							<TextBox text={para2} header={title2}/>
						</div>
					</div>

				</div>

			</div>
		</Fragment>
	)
}

export default Contact;