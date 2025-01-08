import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useState } from 'react';


const buildingData = [
  {
  id: 1,
  name: "Luxury Penthouse",
  price: 5000000,
  location: "Manhattan, NY",
  amenities: ["Swimming Pool", "Gym", "Terrace"],
  image: '/images/ny.jpg',
  mapUrl: "https://maps.app.goo.gl/hJP4TzvPby6frXC29",
  videoUrl: "https://www.youtube.com/watch?v=xgZd_vFNkUs&t=16s"
},

  { 
    id: 2,
     name: 'Ocean View Condo', 
     city: 'Los Angeles', 
     price: 3500000, 
     location: 'Santa Monica, CA',
      amenities: ['Beach Access', 'Gym', 'Parking'],
       image: '/images/sm.jpg',
       mapUrl: 'https://maps.app.goo.gl/gWTLCV8fr5JzCLRK7',
       videoUrl: 'https://www.youtube.com/watch?v='

      },

  { 
    id: 3,
     name: 'Modern Loft',
      city: 'Chicago',
       price: 2500000,
        location: 'Downtown, Chicago, IL', 
        amenities: ['Rooftop Lounge', 'Private Elevator', '24/7 Security'],
         image: '/images/ML.jpg',
         mapUrl: 'https://maps.app.goo.gl/XSZoxSnqF9GzbM3k6',
         videoUrl: 'https://youtu.be/ecSaIBsVuGI?si=8D6Rx3nq61mEcz_L'
        },

  { 
    id: 4,
     name: 'Modern Loft',
      city: 'Los Angeles',
       price: 3500000, 
       location: 'Downtown, LA', 
       amenities: ['Rooftop Deck', 'Home Theater', 'Gourmet Kitchen'],
        image: '/images/LA.jpg',
        mapUrl:'https://maps.app.goo.gl/Y3tr7zoSomc8br9r5' ,
        videoUrl: 'https://youtu.be/9GPFWMfykXE?si=7SIYK40Npf4dtjOS'
      },

  { 
    id: 5,
     name: 'Oceanfront Villa',
      city: 'Miami', 
      price: 8000000,
       location: 'Miami Beach, FL', 
       amenities: ['Private Beach', 'Infinity Pool', 'Spa', 'Outdoor Kitchen'],
        image: '/images/MI.jpg',
        mapUrl:'https://maps.app.goo.gl/HLUSLRA6Z6qoJNFh6',
        videoUrl: 'https://youtu.be/cBTudq-lbhQ?si=1E9kqBNnI9rDnwA3'
       },

  { 
    id: 6,
     name: 'Penthouse Suite',
      city: 'Chicago', 
      price: 4200000, 
      location: 'River North, Chicago',
       amenities: ['Sky Lounge', 'Sauna', 'Library', '24/7 Concierge'], 
       image: '/images/RN.jpg',
       mapUrl: 'https://maps.app.goo.gl/UkCffSir1htYTGXX7',
       videoUrl:'https://youtu.be/nxyvh6xJEtg?si=3m6ZqXDHnprZ48zd'
       },
       
  { 
    id: 7,
     name: 'Mountain Retreat', 
     city: 'Aspen',
      price: 6200000, 
      location: 'Aspen, CO',
       amenities: ['Hot Tub', 'Ski-In/Ski-Out', 'Game Room', 'Wine Cellar'], 
       image: '/images/AS.jpg',
       mapUrl: 'https://maps.app.goo.gl/56bYNVJZQNsVN2bz6',
       videoUrl:'https://youtu.be/8JAaH7cJcXI?si=PCyrZckV-FvUJP9N'
      },

  {
     id: 8,
      name: 'Luxury Condo',
       city: 'San Francisco', 
       price: 4500000,
        location: 'SoMa, San Francisco',
         amenities: ['Indoor Pool', 'Gym', 'Private Garden', 'Valet Parking'], 
         image: '/images/coooo.jpg',
         mapUrl: 'https://maps.app.goo.gl/rnpQ9mQfCcn5Zi6RA',
         videoUrl:'https://youtu.be/U7f-YBK0xMg?si=CfzUjko1ecN62eUE'
        },

  {
     id: 9, 
     name: 'Historic Brownstone',
      city: 'Boston',
       price: 3200000,
        location: 'Back Bay, Boston',
         amenities: ['Private Patio', 'Chef\'s Kitchen', 'Wine Storage', 'Smart Home Features'],
          image: '/images/HB.jpg',
          mapUrl: 'https://maps.app.goo.gl/vu3pME94DR7oHNVN6',
          videoUrl:'https://youtu.be/P_d8i3wSUcw?si=EpEp6hlhV_sIFPs4'
        },

  {
     id: 10,
      name: 'Contemporary Mansion',
       city: 'Beverly Hills',
        price: 9500000, 
        location: 'Beverly Hills, CA', 
        amenities: ['Infinity Pool', 'Home Theater', 'Tennis Court', 'Private Library'], 
        image: '/images/LUX.jpg',
        mapUrl: 'https://maps.app.goo.gl/soaqdaUStPkS3uJW6',
        videoUrl:'https://youtu.be/CzqsnbRpN5M?si=_LZ4Vr7E_y8dlrT3'
  },

  { 
    id: 11, 
    name: 'Elegant Townhouse',
     city: 'London', 
     price: 7200000,
      location: 'Chelsea, London',
       amenities: ['Private Garden', 'Basement Cinema', 'Gym', 'Roof Terrace'],
        image: '/images/ET.jpg',
        mapUrl: 'https://maps.app.goo.gl/8GedDjrCyAYeJvHR6',
        videoUrl: 'https://youtu.be/bhG5G_Ljx2k?si=Mg1vvWkDEJq6JB3e'
       },

  { 
    id: 12, 
    name: 'Waterfront Estate', 
    city: 'Seattle',
     price: 5300000,
      location: 'Lake Washington, Seattle',
       amenities: ['Boat Dock', 'Infinity Pool', 'Wine Cellar', 'Gourmet Kitchen'], 
       image:'/images/WF.jpg',
       mapUrl: 'https://maps.app.goo.gl/gb7iacrG8w5Xp2DU7',
       videoUrl: 'https://youtu.be/FelDdrB_1vw?si=zBwRcAsMj5FNlrH4'
      },
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State to hold the user's search query

  // Filter the buildings based on the search query, matching name or location
  const filteredBuildings = buildingData.filter(
    (building) =>
      building.name.toLowerCase().includes(searchQuery.toLowerCase()) || // Match name
      building.location.toLowerCase().includes(searchQuery.toLowerCase()) // Match location
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6"> {/* Outer container */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-6xl"> {/* Card-style container */}
        <h1 className="text-3xl font-bold text-center mb-4 pt-14">Real Estate Projects</h1> {/* Title */}

        {/* Search Bar */}
<div className="mb-6 relative">
  <input
    type="text" // Input type is text
    placeholder="Search by name or location..." // Placeholder text
    value={searchQuery} // Bind input value to searchQuery state
    onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
    className="w-full p-3 pl-10 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-600 focus:border-slate-600 transition duration-200" // Styling with rounded corners and focus effect
  />
  <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
    {/* Magnifying glass icon */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l5.25 5.25" />
    </svg>
  </div>
</div>


        {/* Results - Building Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Grid layout */}
          {filteredBuildings.length > 0 ? ( // Check if there are filtered results
            filteredBuildings.map((building) => ( // Map over the filtered buildings array
              <div key={building.id} className="bg-white rounded-lg shadow-lg overflow-hidden"> {/* Card for each building */}
                <img src={building.image} alt={building.name} className="w-full h-48 object-cover" /> {/* Building image */}
                <div className="p-4"> {/* Content container */}
                  <h2 className="text-xl font-semibold text-gray-800">{building.name}</h2> {/* Building name */}
                  <p className="text-sm text-gray-500">{building.location}</p> {/* Building location */}
                  <p className="text-lg font-bold text-gray-900 mt-2">${building.price.toLocaleString()}</p> {/* Building price */}
                  <div className="mt-2"> {/* Amenities list */}
                    <h3 className="font-medium text-gray-700">Amenities:</h3>
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      {building.amenities.map((amenity, index) => ( // Map over amenities
                        <li key={index}>{amenity}</li> // Display each amenity as a list item
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray-100 p-4 text-center"> {/* Actions container */}
                  {/* Link to the property details page with building data passed via state */}
                  <Link to={`/property/${building.id}`} state={{ buildingData }}>
                    <button className="px-6 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-900 focus:outline-none">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 col-span-3">No matching projects found.</div> // Message if no results
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects; // Export the component for use in the application
