import React from 'react';
import Dropzone from '@/components/dropzone';
import Card from '@/components/Card'; // Adjust the path based on your project structure
import Footer from '@/components/Footer';
const _3gp: React.FC = () => {
  return (
    <div className="container mx-auto">
      {/* Title + Desc */}
      <div className="space-y-6 text-center">
        <h1 className="text-2xl md:text-5xl font-bold">
          Convert from 3GP
        </h1>
        <p className="text-gray-400 text-md md:text-lg md:px-24 xl:px-44 2xl:px-52">
          Convert any file from one format to another in seconds for free
        </p>
      </div>

      {/* Upload Box */}
      <br />
      <Dropzone />
 
      
{/* Footer */}
<Footer />
    </div>
  );
}

export default _3gp;
