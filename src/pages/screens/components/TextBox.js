import {Fragment} from 'react';
import styles from './TextBox.module.css';

function TextBox(props) {

	return (
		<div className={styles.textbox}>
			<h2 className={styles.header}>{props.header} </h2>
			<p className={styles.text}>{props.text}</p>
		</div>
	)
}

export default TextBox;