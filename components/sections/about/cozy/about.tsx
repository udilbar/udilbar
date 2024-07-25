import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';

function About() {
  return (
    <MotionWrap className="w-full pt-24 lg:pt-32" id="about">
      {/* TODO: Redesign for horizontal */}
      <div className="items-center justify-between gap-12 space-y-4 px-4 md:px-6 lg:flex lg:space-y-10">
        <div className="flex w-full flex-col text-center lg:text-left">
          <div className="flex flex-col items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:mb-4 lg:text-6xl lg:leading-tight">
                About Me
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden max-w-[500px] text-gray-500 dark:text-gray-400 lg:mt-0 lg:block">
            Here&apos;s where I share my journey through tech, highlighting the
            experiences and passions that drive my innovative pursuits.
          </p>
        </div>
        <div className="space-y-4">
          <p className="max-w-[1200px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I am your go-to frontend web developer for small and medium-sized
            businesses.
            <br />
            I am passionate about delivering results that endure:
            <br />
            - 🚀 Velocity
            <br />
            - 🔒 Veracity
            <br />
            - 💼 Value
            <br />I specialize in crafting precise, adaptive, custom web
            applications that empower clients to excel in their markets. Major
            corporations have seen profit boosts with my assistance.
          </p>
          <Button asChild>
            <Link
              href="https://docs.google.com/document/d/1kJ-gtaNaCdVBo_FzHJFN-Tx6oWeazq9zlw6Ey7dOVBI/edit?usp=sharing"
              target="_blank"
            >
              View Resume <ArrowUpRightIcon className="ml-2 size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
