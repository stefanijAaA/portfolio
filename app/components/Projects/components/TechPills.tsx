'use client';

import { FC, useState } from 'react';
import { TechPillsProps } from './types';

export const TechPills: FC<TechPillsProps> = ({ visibleTech, hiddenTech }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex items-center gap-2.5 2xl:gap-3'>
      {visibleTech.map((tech) => (
        <span
          key={tech}
          className='whitespace-nowrap rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-neutral-200 transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-white/8 group-hover:text-white 2xl:px-4 2xl:py-2 2xl:text-base'
        >
          {tech}
        </span>
      ))}

      {hiddenTech.length > 0 && (
        <div className='relative group/tech'>
          <button
            type='button'
            onClick={() => setIsOpen((prev) => !prev)}
            className='whitespace-nowrap rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-neutral-200 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/8 hover:text-white 2xl:px-4 2xl:py-2 2xl:text-base'
          >
            +{hiddenTech.length}
          </button>

          <div
            className={`absolute bottom-full z-20 mb-3 w-max max-w-40 -translate-x-1/2 rounded-xl border border-white/10 bg-[#020617] p-2.5 shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition-all duration-200 2xl:max-w-60 2xl:rounded-2xl 2xl:p-3 ${
              isOpen
                ? 'pointer-events-auto opacity-100'
                : 'pointer-events-none opacity-0 group-hover/tech:pointer-events-auto group-hover/tech:opacity-100'
            }`}
          >
            <div className='flex flex-wrap gap-2'>
              {hiddenTech.map((tech) => (
                <span
                  key={tech}
                  className='rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[8px] text-neutral-200 2xl:px-3 2xl:py-1.5 2xl:text-xs'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
