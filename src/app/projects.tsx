import Image from 'next/image';

// My Projects

const projects = [
  {
    title: "RESUME BUILDER",
    artist: "HTML CSS Typescript",
    imageUrl: "/resume.png",
    link: "https://milestone-05-unique-path-and-shareable-link-my-muhammad-shezan.vercel.app/",
  },
  {
    title: "Car Catalogue Website",
    artist: "NextJS + Tailwind",
    imageUrl: "/car.png",
    link: "https://car-catalogue-website.vercel.app/",
  },
  {
    title: "Coffee Website",
    artist: "NextJS + Tailwind",
    imageUrl: "/coffee.png",
    link: "https://coffee-website-inky.vercel.app/",
  },
  {
    title: "Random Webpage Clone",
    artist: "HTML CSS Javascript",
    imageUrl: "/web.png",
    link: "https://webpage-clone-black.vercel.app/",
  },
  {
    title: "Simple Calculator",
    artist: "HTML CSS Javascript",
    imageUrl: "/calc.png",
    link: "https://simple-calculator-javascript.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">My Latest Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src={project.imageUrl}
                alt={project.title}
                layout="responsive"
                width={300}
                height={300}
                quality={100}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-2 text-lg font-semibold">{project.title}</h2>
            <p className="text-gray-600">{project.artist}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
