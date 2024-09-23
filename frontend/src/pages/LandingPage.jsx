import React from 'react';

const LandingPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-50">
        {/* Navbar */}
        <nav className="w-full bg-white py-5 px-10 flex justify-between items-center shadow-lg">
          <h1 className="text-3xl font-extrabold text-purple-800">MedcareHub</h1>
          <div className="space-x-6">
            <a href="#about" className="text-lg font-medium text-gray-600 hover:text-purple-800 transition">ABOUT US</a>
            <button className="bg-purple-800 text-white py-2 px-6 rounded-full shadow-lg hover:bg-purple-600 transition">SIGN UP</button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative mt-12 w-4/5">
          <img 
            src="src/assets/Premium Photo _ Black and white medical concept with stethoscope.jpg"
            alt="stethoscope"
            className="rounded-xl shadow-lg w-full"
          />
          <div className="absolute inset-0 flex items-center justify-end text-white p-6">
            <div className="text-right bg-black bg-opacity-50 p-4 rounded-lg">
              <p className="text-lg text-gray-300">A Hospitality Service by</p>
              <h2 className="text-5xl font-bold">Medcare Hospital</h2>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-16 w-4/5">
          <div className="flex justify-around text-center mb-10 space-x-8">
            <div>
              <i className="fas fa-user-md text-5xl text-purple-700"></i>
              <h3 className="mt-2 text-xl font-bold text-gray-800">SPECIALIST DOCTOR</h3>
              <p className="text-gray-500">Various healthcare sectors</p>
            </div>
            <div>
              <i className="fas fa-clock text-5xl text-purple-700"></i>
              <h3 className="mt-2 text-xl font-bold text-gray-800">OPENING HOURS</h3>
              <p className="text-gray-500">24×7</p>
            </div>
            <div>
              <i className="fas fa-briefcase-medical text-5xl text-purple-700"></i>
              <h3 className="mt-2 text-xl font-bold text-gray-800">24 HOURS SERVICES</h3>
              <p className="text-gray-500">Emergency, Ambulance</p>
            </div>
          </div>
        </div>

        {/* OPD Booking */}
        <div className="relative mt-12 w-4/5">
          <img
            src="src/assets/download (3).jpg"
            alt="OPD Booking"
            className="rounded-xl shadow-lg w-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-4xl font-bold">Easy OPD Booking</h2>
            <button className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow-lg mt-4 hover:bg-gray-300 transition">Book an Appointment</button>
          </div>
        </div>

        {/* Specialities Section */}
        <div className="mt-16 w-4/5 text-center">
          <h3 className="text-3xl font-bold text-gray-800">Specialities at Medcarehub</h3>
        </div>

        <div className="mt-8 w-4/5">
          <div className="flex justify-around text-center">
            {['Cardiac', 'Critical Care', 'Emergency Medicine', 'Gastro & GI', 'Gynaecology'].map((specialty, index) => (
              <div key={index}>
                <i className={`fas fa-${index % 2 === 0 ? 'heart' : 'ambulance'} text-5xl text-purple-700`}></i>
                <p className="mt-2 text-lg text-gray-800">{specialty}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bed Availability Section */}
        <div className="mt-16 w-4/5">
          <div className="relative">
            <img
              src="src\assets\Premium Photo _ Red heart and stethoscope on blue paper_ flat lay essential items for doctor using treat and care patient in hospital_.jpg"
              alt="Check Bed Availability"
              className="rounded-xl shadow-lg w-full"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl font-bold">Check Bed Availability</h2>
              <button className="bg-white text-black font-semibold py-2 px-6 rounded-full shadow-lg mt-4 hover:bg-gray-300 transition">Book a Suitable Bed</button>
            </div>
          </div>
        </div>

        {/* Expert Clinicians */}
        <div className="mt-16 w-4/5 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Expert Clinicians</h3>
          <div className="flex justify-around">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="text-center">
                <img
                  src="src/assets/Screenshot 2024-09-19 232041.png"
                  alt="Doctor"
                  className="rounded-full w-24 h-24 mb-4"
                />
                <h4 className="text-lg font-bold text-gray-800">Dr. Abc</h4>
                <p className="text-gray-500 text-sm">MD (Internal Medicine)</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-purple-800 w-full text-white py-12 mt-16">
          <div className="container mx-auto flex justify-between">
            <div>
              <h1 className="text-2xl font-extrabold">MCH</h1>
              <p className="mt-4 text-gray-300">A Hospitality management by Medcare Hospital</p>
              <div className="flex space-x-4 mt-6">
                {['facebook', 'instagram', 'twitter', 'linkedin'].map((social, index) => (
                  <a key={index} href={`https://${social}.com`} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 p-3 rounded-full">
                    <i className={`fab fa-${social}`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl">Company</h3>
                <ul className="mt-4 space-y-2">
                  {['About', 'Contact', 'Support', 'Careers'].map((item, index) => (
                    <li key={index}><a href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition">{item}</a></li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl">Quick Links</h3>
                <ul className="mt-4 space-y-2">
                  {['Location', 'Orders', 'Size Guide', 'FAQs'].map((item, index) => (
                    <li key={index}><a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white transition">{item}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
