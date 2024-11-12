import React from 'react';
import aboutUsImage from '../image/ing1.jpg'; // Update to your image path
import bloodCollectionImage from '../image/img2.jpg'; // Update to your image path
import immunoTestingImage from '../image/img3.jpg'; // Update to your image path

const BloodCompatible = () => {
	return (
		<div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
			{/* About Us Section */}
			<div style={{ display: 'flex', marginBottom: '40px', alignItems: 'flex-start' }}>
				<div style={{ flex: '1', paddingRight: '20px' }}>
					<img
						src={aboutUsImage}
						alt="Blood donation ceremony"
						style={{ width: '400px', height:'260px', borderRadius: '10px' }}
					/>
				</div>
				<div style={{ flex: '2' }}>
				<h2>About Us</h2>
					<p>
						Welcome to the Blood Bank Management System of Bhutan, a vital component of our nation’s healthcare infrastructure.
						Our mission is to ensure a safe, reliable, and efficient supply of blood and blood products to meet the needs of patients across the country.
					</p>
					<p>
						Join us in our mission to save lives and improve health outcomes through the gift of blood donation.
					</p>
					
				</div>
			</div>

			{/* Services Section */}
			<h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Services</h2>

			<div style={{ display: 'flex', marginBottom: '40px' }}>
				{/* Blood Collection and Processing Section */}
				<div style={{ flex: '1', paddingRight: '20px' }}>
					<h3>Blood Collection and Processing</h3>
					<img
						src={bloodCollectionImage}
						alt="Blood collection process"
						style={{ width: '400px', height:'260px', borderRadius: '10px', marginBottom: '10px' }}
					/>
					<p>
						We operate under the guidelines of the National Blood Policy, providing comprehensive services through our 27 blood centers.
						Our dedicated team of transfusion specialists, laboratory technologists, and medical professionals work tirelessly to promote voluntary blood donations,
						ensure the highest standards of blood testing and processing, and support the rational use of blood components in clinical settings.
					</p>
				</div>

				{/* Immunohematology Testing Section */}
				<div style={{ flex: '1', paddingLeft: '20px' }}>
					<h3>Immunohematology Testing</h3>
					<img
						src={immunoTestingImage}
						alt="Immunohematology testing"
						style={{ width: '400px', height:'260px', borderRadius: '10px', marginBottom: '10px' }}
					/>
					<p>
						Our services include donor recruitment and education, blood collection and processing, immunohematology testing, and patient blood management.
						We are committed to maintaining a robust Quality Management System and engaging in continuous improvement through training and external quality assessments.
					</p>
					
				</div>
			</div>
		</div>
	);
		
}

export default BloodCompatible
