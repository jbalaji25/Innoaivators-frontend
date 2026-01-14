
import { Link } from 'react-router-dom';
import { ArrowRightIcon, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient: string;
  backgroundImage: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  link,
  gradient,
  backgroundImage
}: ServiceCardProps) {
  return (
    <Link to={link} className="group">
      <div
        className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border border-secondary-silver bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-70 transition-all duration-300"></div>
        <div className="relative z-10 p-6 h-full flex flex-col">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{description}</p>
          <div className="flex items-center text-secondary-silver font-semibold group-hover:gap-2 transition-all mt-auto">
            <span>Learn More</span>
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
}