import React from 'react';
import { useLocation } from 'react-router-dom';

const PropertyDetail = () => {
  const { state } = useLocation();
  const { buildingData } = state || {}; // Handle cases where state might be undefined
  const buildingId = window.location.pathname.split('/').pop(); // Extract property ID from URL path

  // Find the building by ID
  const building = buildingData?.find((item) => item.id.toString() === buildingId);

  // If the building is not found, show a "not found" message
  if (!building) {
    return <div className="text-center text-gray-500">Property not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-6xl">
        {/* Property Name */}
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">{building.name}</h1>

        {/* Property Image */}
        <img
          src={building.image}
          alt={building.name}
          className="w-full h-48 object-cover mb-6 rounded-lg"
        />

        {/* Property Information */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">{building.location}</p>
          <p className="text-lg font-bold text-gray-900 mt-2">${building.price.toLocaleString()}</p>
          <div className="mt-4">
            <h3 className="font-medium text-gray-700">Amenities:</h3>
            <ul className="list-disc pl-5 text-sm text-gray-600">
              {building.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Map Section */}
        {building.mapUrl && building.id === 1 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39853.268416948!2d-74.08985973046872!3d40.76095162045688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2599289344aa9%3A0xead260c6de35314a!2sManhattan%20Penthouse!5e1!3m2!1sen!2s!4v1735894105972!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl &&  building.id ===1 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
             <iframe width={560} height={315} src="https://www.youtube.com/embed/xgZd_vFNkUs?si=O0c7XyuhSuAQmrg_" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

            </div>
          </div>
        )}
        {/* Map Section */}
        {building.mapUrl && building.id === 2 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d320527.229747648!2d-74.34309848527029!3d40.405022708981484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c227c8600f9015%3A0xec8fc2adfd7519d4!2sOcean%20View%20Condominium!5e1!3m2!1sen!2s!4v1735893011491!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 2 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
              <iframe width={560} height={315} src="https://www.youtube.com/embed/zOWuNnBF_ZE?si=q7Dq6C_6AoXShzql" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

            </div>
          </div>
        )}

         {/* Map Section */}
        {building.mapUrl && building.id === 3 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.755959237169!2d-87.63379822481924!3d41.871292865841596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c9723cb9b8b%3A0x1e2cde79cd768652!2sAMLI%20Lofts!5e1!3m2!1sen!2s!4v1735898256746!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 3 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ecSaIBsVuGI?si=03pnBNtvQq2zTKJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
          </div>
        )}
          {/* Map Section */}
        {building.mapUrl && building.id === 4 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2763.6215010507344!2d-118.26167799999999!3d34.043499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b7d353d699%3A0x238b822e36d83f74!2sPackard%20Lofts!5e1!3m2!1sen!2s!4v1735899826023!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 4 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
            <iframe width={560} height={315} src="https://www.youtube.com/embed/9GPFWMfykXE?si=NJtzfedsuhfq8Jvh" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        )}

         {/* Map Section */}
        {building.mapUrl && building.id === 5 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.507618810103!2d-80.123558!3d25.8106723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b3662960af11%3A0x9eaeaf99fe86d7b5!2sOcean%20Villas!5e1!3m2!1sen!2s!4v1735899911921!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 5 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
           <iframe width={560} height={315} src="https://www.youtube.com/embed/cBTudq-lbhQ?si=vlpYzDxHMAwt4GfZ" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        )}
         {/* Map Section */}
        {building.mapUrl && building.id === 6 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4895.956369252514!2d-87.6343023!3d41.891591649999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb5eda6644b%3A0x2b2e901fc26da1f7!2sRiver%20North%2C%20Chicago%2C%20IL%2C%20USA!5e1!3m2!1sen!2s!4v1735900121101!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 6 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/nxyvh6xJEtg?si=XiGEu3jBnzCoUNUl" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        )}

         {/* Map Section */}
        {building.mapUrl && building.id === 7 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.0312082628852!2d-106.80174672497473!3d39.18237092984074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87403ba11df389cb%3A0x91a0d4dcaca7ae70!2sMountain%20Valley%20Retreat!5e1!3m2!1sen!2s!4v1735909340241!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 7 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/8JAaH7cJcXI?si=xoIBw80zk6nZMoeC" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

            </div>
          </div>
        )}

        {/* Map Section */}
        {building.mapUrl && building.id === 8 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10121.284410300295!2d-111.9324366!3d40.653557649999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528be6cf5960a5%3A0x7643664c5fd73099!2sSan%20Francisco%20Condo%2C%20Taylorsville%2C%20UT%2084123%2C%20USA!5e1!3m2!1sen!2s!4v1735910296491!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 8 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/U7f-YBK0xMg?si=OCFi5jdDG4ZtZBcO" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        )}

        {/* Map Section */}
        {building.mapUrl && building.id === 9 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.4692406788404!2d-71.07793312479089!3d42.34645123596259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e37a0d0f648b8d%3A0x9fd86fd43525e990!2sBrownstone!5e1!3m2!1sen!2s!4v1735910104646!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 9 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/P_d8i3wSUcw?si=EpEp6hlhV_sIFPs4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        )}

         {/* Map Section */}
        {building.mapUrl && building.id === 10 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43577.980830168795!2d-118.39953390000001!3d34.0825489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2C%20USA!5e1!3m2!1sen!2s!4v1735910658819!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 10 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/CzqsnbRpN5M?si=B3QZkiySMmWXerpT" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        )}

         {/* Map Section */}
        {building.mapUrl && building.id === 11 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16381.45917367325!2d-0.16910305!3d51.4876752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876056c23490e4f%3A0x268033680c352ea!2sChelsea%2C%20London%2C%20UK!5e1!3m2!1sen!2s!4v1735910894463!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 11 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
         <iframe width={560} height={315} src="https://www.youtube.com/embed/bhG5G_Ljx2k?si=Mg1vvWkDEJq6JB3e" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
        )}

         {/* Map Section */}
        {building.mapUrl && building.id === 12 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Location Map</h2>
            <div className="mt-2">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143909.4274206994!2d-122.33979794999999!3d47.608715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e1!3m2!1sen!2s!4v1735911384806!5m2!1sen!2s" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        )}

        {/* Video Section */}
        {building.videoUrl && building.id === 12 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800">Video Tour</h2>
            <div className="mt-2">
        <iframe width={560} height={315} src="https://www.youtube.com/embed/FelDdrB_1vw?si=zBwRcAsMj5FNlrH4" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
            </div>
          </div>
       )}
        </div>
      </div>
  );
};

export default PropertyDetail;
