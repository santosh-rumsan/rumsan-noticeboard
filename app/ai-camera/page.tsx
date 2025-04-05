'use client';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

const CameraAIPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
    <h1 className="text-center text-2xl font-bold my-8">Hack this video using AI</h1>
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <p className="text-center text-sm text-gray-600">This is a live stream that is open to all Rumsan Employees to fiddle around with. <strong>Hack it</strong> and make a cool project out of it. <br />Happy Hacking !!!</p>
        </CardHeader>
        <CardContent>
          {isClient && (
            <ReactPlayer
              url="https://camera-ai.rumsan.com.np/hls/index.m3u8"
              playing
              playsinline
              muted
              autoPlay
              controls
              width="100%"
              height="200px"
            />
          )}
          <p className="text-center text-md font-bold text-gray-600 my-2">Few Ideas to try</p>
          <p className="text-center text-sm text-gray-600 bg-blue-100 p-2 m-1">Count number of people eating lunch (those arriving before 11 am) and send the number to Anish or Binita di</p>
          <p className="text-center text-sm text-gray-600 bg-blue-100 p-2 m-1">Detect yourself using AI and send yourself a Hi5 every time.</p>
          <p className="text-center text-sm text-gray-600 bg-blue-100 p-2 m-1">Detect when the gate opens, and send a slack message.</p>

          <p className="text-center text-md font-bold text-gray-600 mt-4 mb-2">Video stream links</p>
          <p className="text-center text-sm text-gray-600 bg-gray-100 p-2 m-1">https://camera-ai.rumsan.com.np/hls/index.m3u8 <br />(10 seconds lag)</p>
          <p className="text-center text-sm text-gray-600 bg-gray-100 p-2 m-1">rtsp://rumsan:T$mp9670@192.168.1.244/stream2 <br />(realtime almost - worldlink)</p>
        </CardContent>
        <CardFooter className="text-center text-sm text-gray-600">
          *** This project is a part of Rumsan's R&D initiative.
        </CardFooter>
      </Card>
    </div>
  );
};

export default CameraAIPage;