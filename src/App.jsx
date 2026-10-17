import { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderEnhanced from './components/layout/HeaderEnhanced';
import Popup from './components/ui/PopUp';
import Loading from './components/layout/Loading';
import FooterEnhanced from './components/layout/FooterEnhanced';
import propertiesData from './data/data.json';
import WhatsAppButton from './components/home/WhatsAppButton';
import ScrollToTop from './components/home/ScrollToTop';
import MaintenancePage from './components/home/MaintenancePage';

const Home = lazy(() => import('./pages/Home'));
const Listings = lazy(() => import('./pages/Listings'));
const Property = lazy(() => import('./pages/Property'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Sitemap = lazy(() => import('./pages/Sitemap'));




const BASE_URL = import.meta.env.VITE_API_URL;
const BASE_URL2 = import.meta.env.VITE_API_URL2;
// const PHP_FILE = "./data.php"; // Agar same folder mein hai

function App() {

  // api calling for maintenance mode

  const [impMessage, setImpMessage] = useState("");



  // useEffect(() => {
  //   fetch(`${BASE_URL}/api/gainrealestate`)
  //   .then(res => res.json())
  //   .then(data => {
  //     setImpMessage(data.message || "");
  //   });
  // }, []);



  // api with fallback
  useEffect(() => {

    const fetchMaintenanceMessage = async () => {

      try {

        // ✅ Primary API
        let res = await fetch(`${BASE_URL}/api/gainrealestate`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          // signal: AbortSignal.timeout(8000) // ⏳ 8 sec timeout
        });

        if (!res.ok) throw new Error("Primary failed");

        let data = await res.json();

        if (data.message) {
          setImpMessage(data.message);
          return;
        }

        throw new Error("No message");

      } catch (err) {
        console.log("Primary failed → Trying fallback API");

        // Agar primary API fail ho jaye toh fallback try karenge





        try {
          // ✅ Fallback API
          let res2 = await fetch(`${BASE_URL2}/api/gainrealestate`);

          if (!res2.ok) return;

          let data2 = await res2.json();

          if (data2.message) {
            setImpMessage(data2.message);
          }

        } catch (err2) {
          console.log("Fallback also failed");
        };

        // Agar dono APIs fail ho jaye toh local PHP file try karenge (agar available ho)

        try {

          let res = await fetch("/data.php", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          });

          if (!res.ok) throw new Error("PHP fetch failed");

          let data = await res.json();

          if (data.message) {
            setImpMessage(data.message);
          }

        } catch (err) {
          console.log("Maintenance API failed");
        }

      }
    };

    fetchMaintenanceMessage();

  }, []);


  if (impMessage.trim() !== "") {
    return <MaintenancePage message={impMessage} />;
  } else {


    return (
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Popup />
          <HeaderEnhanced />
          <WhatsAppButton />
          <ScrollToTop />
          <main>
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/property/:id" element={<Property />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>

          <FooterEnhanced company={propertiesData.company} />
        </div>
      </BrowserRouter>
      // <h2 className='flex items-center justify-center p-4 bg-red-100 text-red-700'>
      //   Due to payment issues, the site is currently Taken down by Sah global so contact nitin sah.
      // </h2>
    );
  }
}

export default App;