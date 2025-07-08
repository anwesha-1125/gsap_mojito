'use client';

import { sliderLists as allCocktails } from '../../constants/index.js'
import { useState, useLayoutEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCocktails = allCocktails.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  // Animate whenever currentCocktail changes
  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '#title',
        { opacity: 0 },
        { opacity: 1, duration: 0.5 }
      );

      gsap.fromTo(
        '.cocktail img',
        { opacity: 0, xPercent: -50 },
        { xPercent: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.details h2',
        { yPercent: 50, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: 'power2.out', duration: 0.6 }
      );

      gsap.fromTo(
        '.details p',
        { yPercent: 50, opacity: 0 },
        { yPercent: 0, opacity: 1, ease: 'power2.out', duration: 0.6 }
      );
    });

    return () => ctx.revert();
  }, [currentIndex]);

  return (
    <section id="menu" aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={isActive
                ? 'text-white border-white'
                : 'text-white/50 border-white/50'}
              onClick={() => goToSlide(index)}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button onClick={() => goToSlide(currentIndex - 1)}>
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" />
          </button>

          <button onClick={() => goToSlide(currentIndex + 1)}>
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" />
          </button>
        </div>

        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>

        <div className="recipe">
          <div className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
