import { CodeIcon, SmartphoneIcon, CpuIcon, BrainCircuitIcon, TrendingUpIcon } from 'lucide-react';
import aiAutomationImage from '../services/ai automation.jpg';
import iotImage from '../services/digital marketting.jpg';
import webDevImage from '../services/web_development_premium.png';

// Navigation Links
export const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
];

// Service Links
export const SERVICE_LINKS = [
    { name: 'Web Development', path: '/web-development', color: 'bg-blue-500' },
    { name: 'App Development', path: '/app-development', color: 'bg-purple-500' },
    { name: 'IoT Development', path: '/iot-development', color: 'bg-emerald-500' },
    { name: 'AI Automations', path: '/ai-automations', color: 'bg-rose-500' },
    { name: 'Digital Marketing', path: '/digital-marketing', color: 'bg-orange-500' },
];

export const ALL_NAV_ITEMS = [
    ...NAV_LINKS,
    ...SERVICE_LINKS
];

// Home Page Data
export const SERVICES_DATA = [
    {
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies for exceptional user experiences.',
        icon: CodeIcon,
        link: '/web-development',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: webDevImage
    },
    {
        title: 'App Development',
        description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
        icon: SmartphoneIcon,
        link: '/app-development',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb'
    },
    {
        title: 'IoT Development',
        description: 'Connected devices and smart solutions that transform physical environments into intelligent ecosystems.',
        icon: CpuIcon,
        link: '/iot-development',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: iotImage
    },
    {
        title: 'AI Automations',
        description: 'Intelligent automation solutions that streamline operations and boost productivity.',
        icon: BrainCircuitIcon,
        link: '/ai-automations',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: aiAutomationImage
    },
    {
        title: 'Digital Marketing',
        description: 'Data-driven marketing strategies that amplify your brand and drive measurable results.',
        icon: TrendingUpIcon,
        link: '/digital-marketing',
        gradient: 'from-gray-700 to-gray-900',
        backgroundImage: 'https://images.unsplash.com/photo-1557862921-37829c790f19'
    }
];

export const TESTIMONIALS_DATA = [
    {
        quote: 'Innoaivators delivered a seamless automation suite that boosted our operational efficiency by 40%.',
        name: 'Aarav Menon',
        role: 'Director of Operations',
        company: 'Vertex Logistics'
    },
    {
        quote: 'The team turned our fragmented data into actionable insights within weeks.',
        name: 'Anika Sharma',
        role: 'Head of Product',
        company: 'NexWave Analytics'
    },
    {
        quote: 'Our app launch timeline was halved without compromising quality or performance.',
        name: 'Rahul Kapoor',
        role: 'CTO',
        company: 'Skyline Fintech'
    },
    {
        quote: 'Their design thinking and engineering excellence set a new bar for our digital initiatives.',
        name: 'Priya Desai',
        role: 'Chief Innovation Officer',
        company: 'Quantum Retail'
    },
    {
        quote: 'We now offer personalized experiences to millions of users thanks to their AI expertise.',
        name: 'Ishaan Verma',
        role: 'VP Customer Experience',
        company: 'Aura Media'
    },
    {
        quote: 'The IoT integration was flawless and future-proof, giving us confidence to scale.',
        name: 'Maya Krishnan',
        role: 'Head of Smart Infrastructure',
        company: 'UrbanGrid'
    },
    {
        quote: 'Their agile delivery ensured every stakeholder stayed aligned and confident.',
        name: 'Vikram Patel',
        role: 'Program Manager',
        company: 'Helios Manufacturing'
    },
    {
        quote: 'We saw a threefold increase in qualified leads after the new digital strategy launched.',
        name: 'Sneha Rao',
        role: 'Marketing Lead',
        company: 'Pulse Healthcare'
    },
    {
        quote: 'Their proactive support keeps our mission-critical systems resilient around the clock.',
        name: 'Rohan Iyer',
        role: 'Head of IT',
        company: 'BlueRiver Ventures'
    }
];

export const STATS_DATA = [
    { value: 500, suffix: '+', label: 'Projects Completed', duration: 2 },
    { value: 200, suffix: '+', label: 'Happy Clients', duration: 2.2 },
    { value: 50, suffix: '+', label: 'Team Members', duration: 2.4 },
    { value: 99, suffix: '%', label: 'Client Satisfaction', duration: 2.6 }
];

export const WHAT_WE_DO_DATA = [
    {
        title: 'Discover',
        description: 'We partner with you to uncover opportunities through market research, competitor analysis, and stakeholder workshops.',
        icon: BrainCircuitIcon
    },
    {
        title: 'Design',
        description: 'We craft human-centered experiences backed by data-informed UX, visual prototyping, and rapid iteration.',
        icon: SmartphoneIcon
    },
    {
        title: 'Build',
        description: 'We engineer scalable platforms using resilient architectures, automation, and rigorous quality practices.',
        icon: CodeIcon
    },
    {
        title: 'Accelerate',
        description: 'We activate growth with targeted launches, intelligent analytics, and ongoing optimization initiatives.',
        icon: TrendingUpIcon
    }
];
