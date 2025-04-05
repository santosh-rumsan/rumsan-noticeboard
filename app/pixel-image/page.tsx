'use client';
import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const CameraAIPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-center text-2xl font-bold my-8">Create your own Pixel image</h1>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <p className="text-center text-sm text-gray-600">This DotMatrix screen is for you to tinker around.<strong>Hack it</strong> and design and upload cool pixel art. Happy Hacking !!!</p>
        </CardHeader>
        <CardContent>
          {isClient && (
            <img
              src="https://github.com/user-attachments/assets/3e337632-a490-4731-a33d-9afb3993f1d8"
              alt="Pixel image placeholder"
              style={{ objectFit: 'cover', height: '260px', width: '100%' }}
            />
          )}
          <p className="text-center text-md font-bold text-gray-600 mt-4 mb-2">Download iDotMatrix App</p>
          <p className="text-center text-sm text-gray-600 bg-gray-100 p-2 m-1">
            <a href="https://play.google.com/store/apps/details?id=com.tech.idotmatrix&hl=en" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.tech.idotmatrix&hl=en</a>
          </p>
          <p className="text-center text-sm text-gray-600 bg-gray-100 p-2 m-1">
            <a href="https://apps.apple.com/us/app/idotmatrix/id1662746768" target="_blank" rel="noopener noreferrer">https://apps.apple.com/us/app/idotmatrix/id1662746768</a>
          </p>
          <p className="text-center text-md font-bold text-gray-600 mt-4 my-2">Few Ideas to try</p>
          <p className="text-center text-sm text-gray-600 bg-blue-100 p-2 m-1">Create one of our logo.</p>
          <p className="text-center text-sm text-gray-600 bg-blue-100 p-2 m-1">Create pixel version of modern Monalisa</p>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-600">
          *** This project is a part of Rumsan's R&D initiative.
        </CardFooter>
      </Card>
    </div>
  );
};

export default CameraAIPage;