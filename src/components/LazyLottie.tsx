import { useEffect, useRef, useState } from 'react';

interface LazyLottieProps {
    animationPath: string;
    className?: string;
    style?: React.CSSProperties;
    loop?: boolean;
    autoplay?: boolean;
}

// Pre-import all animations as URLs using Vite's glob import
const animations = import.meta.glob('../assets/animations/*.json', { as: 'url', eager: true });

// Memory cache for animation data
const animationCache: Record<string, any> = {};

export function LazyLottie({
    animationPath,
    className = '',
    style = {},
    loop = true,
    autoplay = true,
    priority = false, // New priority prop
}: LazyLottieProps & { priority?: boolean }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(priority); // Initialize as visible if priority is true
    const [Lottie, setLottie] = useState<any>(null);
    const [animationData, setAnimationData] = useState<any>(null);

    // Intersection Observer to detect when component is in viewport
    useEffect(() => {
        if (priority) return; // Skip observer if priority is true

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            {
                rootMargin: '400px', // Start loading much earlier (was 50px)
                threshold: 0.01,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [isVisible, priority]);

    // Load Lottie library and animation data when visible
    useEffect(() => {
        if (!isVisible) return;

        const loadLottie = async () => {
            try {
                // Pre-calculate keys
                const sanitizedPath = animationPath.replace(/\.json$/, '');
                const key = `../assets/animations/${sanitizedPath}.json`;
                const assetUrl = animations[key];

                if (!assetUrl) {
                    console.error(`Animation not found: ${key}`);
                    return;
                }

                // Dynamically import Lottie library (if not already loaded)
                if (!Lottie) {
                    const LottieModule = await import('lottie-react');
                    setLottie(() => LottieModule.default);
                }

                // Check cache first
                if (animationCache[key]) {
                    setAnimationData(animationCache[key]);
                    return;
                }

                // Fetch animation data
                const response = await fetch(assetUrl as string);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();

                // Save to cache and state
                animationCache[key] = data;
                setAnimationData(data);
            } catch (error) {
                console.error('Failed to load Lottie animation:', error);
            }
        };

        loadLottie();
    }, [isVisible, animationPath, Lottie]);

    return (
        <div ref={containerRef} className={className} style={style}>
            {!isVisible || !Lottie || !animationData ? (
                // Loading skeleton
                <div className="w-full h-full bg-white/5 animate-pulse rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-white/20 border-t-white/60 rounded-full animate-spin" />
                </div>
            ) : (
                // Render Lottie animation
                <Lottie
                    animationData={animationData}
                    loop={loop}
                    autoplay={autoplay}
                    className={className}
                    style={style}
                />
            )}
        </div>
    );
}
