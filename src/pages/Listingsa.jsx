import { useState, useMemo } from 'react';
import propertiesData from '../data/data.json';
import PropertyCard from '../components/ui/PropertyCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFilter, FaTimes } from 'react-icons/fa';

const Listings = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 300]);

  const filtered = useMemo(() => {
    // flatten all sections' items for filtering
    const all = (propertiesData.sections || []).flatMap((sec) => sec.items || []);
    let results = all.filter((p) => {
      const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.location.toLowerCase().includes(query.toLowerCase());
      const matchesType = type ? p.type.toLowerCase() === type.toLowerCase() : true;
      return matchesQuery && matchesType;
    });

    // Sort
    if (sortBy === 'price-low') {
      results.sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')));
    } else if (sortBy === 'price-high') {
      results.sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')));
    }

    return results;
  }, [query, type, sortBy]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-2">Property Listings</h1>
          <p className="text-gray-300">Browse {filtered.length} properties</p>
        </div>
      </section>

      <section className="container-custom py-12">
        {/* Search & Filters Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 space-y-4"
        >
          {/* Main Search */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search by title or location..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
            >
              <FaFilter /> Filters
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="p-4 bg-gray-50 rounded-lg border border-gray-200 space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Type Filter */}
                <div>
                  <label className="block font-semibold text-sm mb-2">Type</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">All Types</option>
                    <option value="Sale">Sale</option>
                    <option value="Rent">Rent</option>
                  </select>
                </div>

                {/* Sort */}
                <div>
                  <label className="block font-semibold text-sm mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setQuery('');
                      setType('');
                      setSortBy('newest');
                    }}
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 transition text-sm font-semibold"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link to={`/property/${p.id}`} className="block h-full">
                  <PropertyCard property={{ ...p, images: p.gallery.length ? p.gallery : [p.image] }} />
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 text-lg">No properties found. Try adjusting your filters.</p>
          </motion.div>
        )}
      </section>
    </div>
  );
};

export default Listings;
