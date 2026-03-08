'use client';

import { useMemo, useState } from 'react';
import { activeTabStyles, badgeAccent } from './utils/constants';
import { techIcons } from './utils/techIcons';
import { techStack } from './utils/techStack';

export const Skills = () => {
  const [activeKey, setActiveKey] =
    useState<(typeof techStack)[number]['key']>('frontend');

  const activeGroup = useMemo(
    () => techStack.find((group) => group.key === activeKey) ?? techStack[0],
    [activeKey],
  );

  return (
    <section id='tech' className='border-t border-white/10 py-20 2xl:py-24'>
      <div className='mx-auto w-full max-w-6xl 2xl:max-w-410 px-7 md:px-10 2xl:px-16'>
        <div className='mb-10 max-w-3xl 2xl:mb-12 2xl:max-w-4xl'>
          <p className='mb-3 text-xs uppercase tracking-[0.28em] text-neutral-400 2xl:mb-4 2xl:text-sm 2xl:tracking-[0.3em]'>
            Tech Stack
          </p>

          <h2 className='text-3xl font-semibold tracking-tight text-white sm:text-4xl 2xl:text-5xl'>
            Skills & tools
          </h2>

          <p className='mt-4 max-w-xl text-sm leading-6 text-neutral-400 2xl:mt-5 2xl:max-w-2xl 2xl:text-lg 2xl:leading-8'>
            A quick look at the technologies I work with most.
          </p>
        </div>

        <div className='mb-6 flex flex-wrap gap-2.5 2xl:mb-8 2xl:gap-3'>
          {techStack.map((group) => {
            const isActive = group.key === activeKey;

            return (
              <button
                key={group.key}
                type='button'
                onClick={() => setActiveKey(group.key)}
                className={`cursor-pointer rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-300 2xl:px-5 2xl:py-3 2xl:text-sm ${
                  isActive
                    ? activeTabStyles
                    : 'border-white/10 bg-white/3 text-neutral-300 hover:border-white/20 hover:bg-white/5 hover:text-white'
                }`}
              >
                {group.title}
              </button>
            );
          })}
        </div>

        <div className='relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1020] p-6 transition-all duration-500 sm:p-8 2xl:rounded-4xl 2xl:p-10'>
          <div className='pointer-events-none absolute inset-0 rounded-3xl bg-[linear-gradient(90deg,rgba(20,28,48,0.96)_0%,rgba(36,32,68,0.94)_50%,rgba(24,20,44,0.96)_100%)] 2xl:rounded-4xl' />

          <div
            key={activeGroup.key}
            className='relative animate-[fadeIn_0.6s_ease]'
          >
            <div className='mb-6 flex items-center gap-2.5 2xl:mb-8 2xl:gap-3'>
              <span className='h-2 w-2 rounded-full bg-white/80 2xl:h-2.5 2xl:w-2.5' />
              <p className='text-xs uppercase tracking-[0.28em] text-neutral-300 2xl:text-sm 2xl:tracking-[0.3em]'>
                {activeGroup.title}
              </p>
            </div>

            <div className='flex flex-wrap gap-2.5 2xl:gap-3'>
              {activeGroup.items.map((item) => (
                <span
                  key={`${activeGroup.key}-${item}`}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)] px-3 py-2.5 text-xs font-medium text-white transition-all duration-300 sm:px-4 2xl:gap-2 2xl:rounded-2xl 2xl:px-7 2xl:py-4 2xl:text-lg ${badgeAccent}`}
                >
                  <span className='text-sm opacity-80 2xl:text-base'>
                    {techIcons[item]}
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
