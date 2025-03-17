import React, { useEffect, useId, useRef, useState } from 'react';
import { useOutsideClick } from '../../hook/use-outside-click';
import { cards } from './card';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

export default function Project() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setActive(null);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div >
      <section id="project">
        <div className="md:container px-5 py-14 lg:ml-18">
          <h2 className="text-4xl font-semibold italic text-center text-indigo-600 font-serif p-4" data-aos="fade-down">
            Project's
          </h2>
          <h4 className="text-2xl font-semibold italic text-center text-indigo-500 font-serif p-4" data-aos="fade-down">
            Some Things I've Worked On
          </h4>
        </div>
      </section>

      <ul className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-5">
        {cards.map((card) => (
          <ProjectCard key={card.title} card={card} setActive={setActive} id={id} />
        ))}
      </ul>

      <Modal active={active} setActive={setActive} ref={ref} id={id} />
    </div>
  );
}
