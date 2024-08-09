import './layout.scss'
import { Outlet } from 'react-router'
import { Header, Footer } from '@components/import.js'
import React, { useState, useEffect } from 'react';


function PublicLayout() {
    
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) {
            setActiveIndex(index);
          }
        }
      });
    }, { threshold: 0.5 });

    sectionIds.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className='layout'>
      <Header activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <div className='mainContainer'>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default PublicLayout;
