import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';

const VideoStoriesSection = ({ stories = [] }) => {
  const [activeStory, setActiveStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showAllThumbnails, setShowAllThumbnails] = useState(false);
  
  const mainVideoRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const thumbnailRefs = useRef([]);
  const intervalRef = useRef(null);

  // Default stories
  const defaultStories = useMemo(() => [
    {
      id: 1,
      category: "Luxury Villa",
      title: "Modern Villa",
      brand: "Room 360",
      videoUrl: "/videos/1.mp4",
      thumbnail: "/videos/1.mp4",
      location: "Dubai",
      price: "$2.5M",
      duration: 15
    },
    {
      id: 2,
      category: "Apartment",
      title: "Sea View Apartment",
      brand: "Room 360",
      videoUrl: "/videos/2.mp4",
      thumbnail: "/videos/2.mp4",
      location: "Miami",
      price: "$850K",
      duration: 12
    },
    {
      id: 3,
      category: "Penthouse",
      title: "Sky Penthouse",
      brand: "Room 360",
      videoUrl: "/videos/3.mp4",
      thumbnail: "/videos/3.mp4",
      location: "New York",
      price: "$5.2M",
      duration: 10
    },
    {
      id: 4,
      category: "Beach House",
      title: "Oceanfront Villa",
      brand: "Room 360",
      videoUrl: "/videos/4.mp4",
      thumbnail: "/videos/4.mp4",
      location: "Malibu",
      price: "$3.8M",
      duration: 15
    },
    {
      id: 5,
      category: "Modern Home",
      title: "Smart Home",
      brand: "Room 360",
      videoUrl: "/videos/5.mp4",
      thumbnail: "/videos/5.mp4",
      location: "Austin",
      price: "$1.2M",
      duration: 12
    },
    {
      id: 6,
      category: "Duplex",
      title: "Luxury Duplex",
      brand: "Room 360",
      videoUrl: "/videos/6.mp4",
      thumbnail: "/videos/6.mp4",
      location: "London",
      price: "$2.1M",
      duration: 10
    },
    {
      id: 7,
      category: "Commercial",
      title: "Office Space",
      brand: "Room 360",
      videoUrl: "/videos/7.mp4",
      thumbnail: "/videos/7.mp4",
      location: "San Francisco",
      price: "$4.5M",
      duration: 12
    }
  ], []);

  const storyData = stories.length > 0 ? stories : defaultStories;

  // FIX 1: Simple thumbnail loader
  useEffect(() => {
    // Sirf visible thumbnails load karo
    const loadVisibleThumbnails = () => {
      thumbnailRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const video = ref.querySelector('video');
          if (video && !video.src) {
            video.src = storyData[index].thumbnail;
            video.load();
            video.play().catch(() => {}); // Muted autoplay
          }
        }
      });
    };

    // Load on mount
    loadVisibleThumbnails();

    // Load on scroll (throttled)
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(loadVisibleThumbnails, 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, [storyData, showAllThumbnails]);

  // FIX 2: Simple progress bar
  useEffect(() => {
    if (!isPlaying) {
      clearInterval(intervalRef.current);
      return;
    }

    setProgress(0);
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          handleNextStory();
          return 0;
        }
        return prev + 1;
      });
    }, storyData[activeStory].duration * 10); // 100ms steps

    return () => clearInterval(intervalRef.current);
  }, [activeStory, isPlaying, storyData]);

  const handleNextStory = useCallback(() => {
    if (activeStory < storyData.length - 1) {
      setActiveStory(prev => prev + 1);
    } else {
      setActiveStory(0);
    }
  }, [activeStory, storyData.length]);

  const handlePrevStory = useCallback(() => {
    if (activeStory > 0) {
      setActiveStory(prev => prev - 1);
    } else {
      setActiveStory(storyData.length - 1);
    }
  }, [activeStory, storyData.length]);

  const togglePlay = useCallback(() => {
    setIsPlaying(!isPlaying);
    if (mainVideoRef.current) {
      if (isPlaying) {
        mainVideoRef.current.pause();
      } else {
        mainVideoRef.current.play().catch(() => {});
      }
    }
  }, [isPlaying]);

  const handleStorySelect = useCallback((index) => {
    setActiveStory(index);
    setProgress(0);
    setIsPlaying(true);
    if (mainVideoRef.current) {
      mainVideoRef.current.src = storyData[index].videoUrl;
      mainVideoRef.current.play().catch(() => {});
    }
  }, [storyData]);

  const scrollThumbnails = useCallback((direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-3">
            <span className="text-sm font-semibold text-blue-600 tracking-wider bg-blue-50 px-4 py-1 rounded-full">
              GAIN REALSTATE
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">
            Property <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Showcase</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Virtual Tours by <span className="font-semibold text-blue-600">ROOM 360</span>
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
              {storyData.length} Properties
            </span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-xs font-medium">
              360° View
            </span>
          </div>
        </div>

        {/* Main Stories Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Progress Bars */}
          <div className="flex gap-1 mb-3">
            {storyData.slice(0, Math.min(8, storyData.length)).map((story, index) => (
              <div key={story.id} className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300"
                  style={{ 
                    width: index === activeStory ? `${progress}%` : index < activeStory ? '100%' : '0%' 
                  }}
                />
              </div>
            ))}
            {storyData.length > 8 && (
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gray-300" style={{ width: '100%' }} />
              </div>
            )}
          </div>

          {/* Main Story Card */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl mb-4">
            
            {/* Video Container */}
            <div className="relative aspect-[9/16] md:aspect-[16/9]">
              <video
                ref={mainVideoRef}
                src={storyData[activeStory].videoUrl}
                poster={storyData[activeStory].thumbnail}
                className="w-full h-full object-cover"
                autoPlay
                playsInline
                muted
                preload="auto"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Property Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-600 rounded-full text-xs font-medium text-white">
                  {storyData[activeStory].category}
                </span>
                <span className="px-3 py-1 bg-cyan-600 rounded-full text-xs font-medium text-white">
                  {storyData[activeStory].brand}
                </span>
              </div>

              {/* Price Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold text-white border border-white/30">
                  {storyData[activeStory].price || "Contact for Price"}
                </span>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                <h3 className="text-2xl md:text-4xl font-bold mb-1">
                  {storyData[activeStory].title}
                </h3>
                <div className="flex items-center gap-2 text-gray-300 mb-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{storyData[activeStory].location || "Prime Location"}</span>
                </div>
                <p className="text-xs md:text-sm text-gray-300 mb-3">
                  Property {activeStory + 1} of {storyData.length}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button 
                    onClick={togglePlay}
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                  >
                    {isPlaying ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                        </svg>
                        Pause
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        Play
                      </>
                    )}
                  </button>
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Schedule Tour
                  </button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrevStory}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button 
                onClick={handleNextStory}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Thumbnails */}
          <div className="relative">
            {/* Left Scroll Button */}
            {storyData.length > 4 && (
              <button 
                onClick={() => scrollThumbnails('left')}
                className="absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Thumbnails Container */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide px-2 py-2"
            >
              {storyData.slice(0, showAllThumbnails ? storyData.length : 8).map((story, index) => (
                <div
                  key={story.id}
                  ref={el => thumbnailRefs.current[index] = el}
                  onClick={() => handleStorySelect(index)}
                  className={`flex-shrink-0 relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    activeStory === index 
                      ? 'ring-2 ring-blue-500 scale-105 shadow-xl' 
                      : 'opacity-80 hover:opacity-100 hover:scale-102'
                  }`}
                  style={{ width: '80px' }}
                >
                  <div className="aspect-[4/5] bg-gray-900">
                    {/* Thumbnail Video */}
                    <video
                      src={story.thumbnail}
                      className="absolute inset-0 w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-1 left-1 right-1">
                      <div className="text-[8px] font-medium text-white truncate bg-black/50 px-1 py-0.5 rounded">
                        {story.category}
                      </div>
                      {story.price && (
                        <div className="text-[8px] font-bold text-blue-300 truncate mt-0.5">
                          {story.price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* View More/Less Button */}
              {storyData.length > 8 && (
                <button
                  onClick={() => setShowAllThumbnails(!showAllThumbnails)}
                  className="flex-shrink-0 w-[80px] bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border-2 border-dashed border-blue-200 hover:border-blue-400 transition-colors group"
                >
                  <div className="aspect-[4/5] flex flex-col items-center justify-center p-1">
                    {showAllThumbnails ? (
                      <>
                        <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                        <span className="text-[9px] font-medium text-blue-400 group-hover:text-blue-600 mt-1">
                          Show Less
                        </span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span className="text-[9px] font-medium text-blue-400 group-hover:text-blue-600 mt-1 text-center">
                          +{storyData.length - 8} More
                        </span>
                      </>
                    )}
                  </div>
                </button>
              )}
            </div>

            {/* Right Scroll Button */}
            {storyData.length > 4 && (
              <button 
                onClick={() => scrollThumbnails('right')}
                className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Property Type Filters */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {['ALL', 'VILLA', 'APARTMENT', 'PENTHOUSE', 'COMMERCIAL'].map((type) => (
            <button
              key={type}
              className="px-4 py-2 text-sm font-medium rounded-full border border-gray-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoStoriesSection;