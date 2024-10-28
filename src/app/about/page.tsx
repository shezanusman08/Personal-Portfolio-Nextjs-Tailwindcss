import Image from 'next/image';

export default function About() {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md md:max-w-2xl flex flex-col md:flex-row items-center">
        <div className="w-32 h-32 md:w-32 md:h-32 mb-4 md:mb-0">
          <Image
            src="/shezan2.jpg" 
            alt="shezan"
            width={128}
            height={128}
            className="rounded-full object-cover"
          />
        </div>
        <div className="md:ml-6 text-center md:text-left">
          <h2 className="text-xl font-semibold">Meet! Shezan</h2>
          <p className="text-gray-500">Emerging developer</p>
          <div className="mt-4 text-gray-700">
            <p><strong>Bio:</strong></p>
            <p>
              Currently studied certified cloud computing at GIAIC
            </p>
            <p>
              With an intermediate education background and current studies in cloud computing at GIAIC, I&apos;m also diving into the world of React and Next.js. Passionate about technology, I&apos;m ready to bring ideas to life by building modern, scalable applications. I&rsquo;m always inspired by new learning experiences and excited about creating impactful solutions in the digital space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
