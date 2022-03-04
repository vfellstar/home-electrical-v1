import styles from './Screens.module.css';
import styles2 from './Services.module.css';
import {Fragment, useState, useEffect} from 'react';
import TextBox from './components/TextBox';
import ServiceBox from './services/ServicesBox';
import useWindowDimensions from './useWindowDimensions';


function Services(props){

	const { height, width } = useWindowDimensions();

	let services = [];

	const obj1 = {
		"title": "Electrical Testing & Certification",
		"desc": "18th Edition IET Electrical Regulations Compliant",
		"price": "From £100"
	}
	const obj2 = {
		"title": "Lighting Installation",
		"desc": "Domestic & Commercial",
		"price": "From £50"
	}
	const obj3 = {
		"title": "Fuze Board & Consumer Unit Installation",
		"desc": "Upgrade & Repair",
		"price": "£280 + Materials"
	}
	const obj4 = {
		"title": "Electrical Car Charging Units",
		"desc": "Hybrid and Electric Vehicles",
		"price": "£160/Day + Materials"
	}
	const obj5 = {
		"title": "Rewiring & Installation",
		"desc": "Rewiring of domestic properties",
		"price": "From £2900"
	}
	const obj6 = {
		"title": "Portable Appliance Testing (PAT)",
		"desc": "Domestic & Commercial Appliances",
		"price": "From £50"
	}
	const obj7 = {
		"title": "Emergency Calls",
		"desc": "Breakdown of supply & power loss",
		"price": "Call out charge - £80"
	}
	const obj8 = {
		"title": "Electrical repair & fault finding",
		"desc": "Nuisance tripping, power loss",
		"price": "From £50"
	}
	const obj9 = {
		"title": "Fire Protection & Alarm Systems",
		"desc": "DSecurity & Fire Protection",
		"price": "From £50"
	}
	const obj10 = {
		"title": "CCTV & Security",
		"desc": "Cameras, Alarms & Electric Gates",
		"price": "From £50"
	}
	const obj11 = {
		"title": "Cooker & Hob Installation",
		"desc": "Domestic and Commercial Cookers and Appliances",
		"price": "From £50"
	}
	const obj12 = {
		"title": "Electric Shower",
		"desc": "Supply, Fitting & Repair",
		"price": "From £50"
	}
	const obj13 = {
		"title": "Damaged Cable Repair",
		"desc": "Domestic & Commercial",
		"price": "From £35"
	}
	const obj14 = {
		"title": "Double Sockets Installation",
		"desc": "Supply and Fit",
		"price": "From £110"
	}

	services.push(obj1,obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9, obj10, obj11, obj12, obj13, obj14 );

	

	const services_jsx = services.map(
		function(product){
	
			if (width > 700) {
				return (

					<ServiceBox 
					key={product.title} 
					title={product.title}
					desc={product.desc} 
					price={product.price}/>

				)
			} else {
				return (
					<div>
						<ServiceBox 
						key={product.title} 
						title={product.title}
						desc={""} 
						price={""}/>
					</div>


				)
			}

		}
	)

	return (
		<Fragment>
			<div className={styles2.background}>
				<div className={styles2.productBox}>
					{services_jsx}
				</div>
				

			</div>
		</Fragment>
	)
}

export default Services;