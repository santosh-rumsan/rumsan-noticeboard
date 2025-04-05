import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 py-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-4xl font-bold">Rumsan R&D</header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Link legacyBehavior href="/ai-camera">
          <a className="block w-full h-full">
            <Card className="w-full max-w-md shadow-lg">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image src="/globe.svg" alt="AI Camera Icon" width={50} height={50} />
                </div>
                <CardTitle>AI Camera</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-600">
                  Explore our AI-powered camera to detect and analyze video streams in real-time.
                </p>
              </CardContent>
            </Card>
          </a>
        </Link>

        <Link legacyBehavior href="/pixel-image">
          <a className="block w-full h-full">
            <Card className="w-full max-w-md shadow-lg">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image src="/file.svg" alt="Pixel Image Icon" width={50} height={50} />
                </div>
                <CardTitle>Pixel Image</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-gray-600">
                  Create and upload your own pixel art using our DotMatrix screen.
                </p>
              </CardContent>
            </Card>
          </a>
        </Link>
      </main>
    </div>
  );
}
