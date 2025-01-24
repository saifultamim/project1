
import React from 'react';
import Image from 'next/image';

import angular from '@/public/images/technologies/angular.png';
import js from '@/public/images/technologies/js.png';
import next from '@/public/images/technologies/nextjs.png';
import nest from '@/public/images/technologies/nestjs.png';
import bootstrap from '@/public/images/technologies/bootstrap.png';
import c1 from '@/public/images/technologies/csharp.png';
import html from '@/public/images/technologies/html.png';
import css from '@/public/images/technologies/css.png';
import figma from '@/public/images/technologies/figma.png';
import postgresql from '@/public/images/technologies/postgresql.png';
import tailwind from '@/public/images/technologies/tailwind.png';
import firebase from '@/public/images/technologies/firebase.png';
import express from '@/public/images/technologies/express.png';
import mongoose from '@/public/images/technologies/mongoose.jpg';
import node from '@/public/images/technologies/nodejs.png';
import react from '@/public/images/technologies/react.png';
import googleCloud from '@/public/images/technologies/googlecloud.png';
import php from '@/public/images/technologies/php.png';
import vsCode from '@/public/images/technologies/vscode.png';
import typescript from '@/public/images/technologies/typescript.png';

const technology = [
  { technology: 'js', technologyImage: js },
  { technology: 'angular', technologyImage: angular },
  { technology: 'next', technologyImage: next },
  { technology: 'nest', technologyImage: nest },
  { technology: 'bootstrap', technologyImage: bootstrap },
  { technology: 'csharp', technologyImage: c1 },
  { technology: 'html', technologyImage: html },
  { technology: 'css', technologyImage: css },
  { technology: 'figma', technologyImage: figma },
  { technology: 'postgresql', technologyImage: postgresql },
  { technology: 'tailwind', technologyImage: tailwind },
  { technology: 'firebase', technologyImage: firebase },
  { technology: 'express', technologyImage: express },
  { technology: 'mongoose', technologyImage: mongoose },
  { technology: 'node', technologyImage: node },
  { technology: 'react', technologyImage: react },
  { technology: 'googleCloud', technologyImage: googleCloud },
  { technology: 'php', technologyImage: php },
  { technology: 'vsCode', technologyImage: vsCode },
  { technology: 'typescript', technologyImage: typescript },
];
const TechnologyUse = () => {
    return (
       <div className='bg-zinc-200 '> 
           <div className="w-full md:w-10/12 lg:w-10/12 mx-auto px-6 md:px-16 lg:px-24 py-16  ">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-800 jaro">
            Technologies We Use
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            To provide your company with top-notch software solutions, we bring <br/>
            together cutting-edge technologies and knowledgeable resources.
          </p>
        </div>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 mt-16">
          {technology.map((param, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
              <Image
                src={param.technologyImage}
                alt={param.technology}
                height={100}
                width={100}
                className="w-20 h-20 object-contain"
              />
              <p className=" text-sm md:text-md lg:text-md  font-bold ">
                {param.technology}
              </p>
            </div>
          ))}
        </div>
      </div>
       </div>
    );
};

export default TechnologyUse;