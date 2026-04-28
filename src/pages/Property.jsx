import { useParams, Link } from 'react-router-dom';
import propertiesData from '../data/data.json';
import { useState } from 'react';

const Property = () => {
  const { id } = useParams();
  // search through every section for the matching id
  const allProperties = (propertiesData.sections || []).flatMap((sec) => sec.items || []);
  const property = allProperties.find((p) => String(p.id) === String(id));
  const [current, setCurrent] = useState(0);

  if (!property) return (
    <div className="container-custom py-12">
      <h2 className="text-2xl font-bold">Property not found</h2>
      <Link to="/listings" className="text-orange-500">Back to listings</Link>
    </div>
  );

  const images = property.gallery.length ? property.gallery : [property.image];

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <img loading="lazy" src={images[current]} alt={property.title} className="w-full h-96 object-cover rounded-2xl mb-4" />
          <div className="flex gap-2">
            {images.map((img, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`w-20 h-14 rounded-lg overflow-hidden ${current===i? 'ring-2 ring-orange-500':'ring-0'}`}>
                <img loading="lazy" src={img} alt={`thumb-${i}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <aside className="p-6 bg-white rounded-2xl shadow">
          <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
          <div className="text-orange-500 font-bold mb-4">{property.price}</div>
          <div className="text-sm text-gray-600 mb-4">{property.location}</div>
          <p className="mb-4">{property.description}</p>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Features</h3>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {property.features?.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          </div>

          <Link to="/contact" className="w-full block">
            <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg">Contact Agent</button>
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default Property;
