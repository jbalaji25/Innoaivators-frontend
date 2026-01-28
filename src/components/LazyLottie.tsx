import { useEffect, useRef, useState } from 'react';

interface LazyLottieProps {
    animationPath: string;
    className?: string;
    style?: React.CSSProperties;
    loop?: boolean;
    autoplay?: boolean;
}

export function LazyLottie({
    animationPath,
    className = '',
    style = {},
    loop = true,
    autoplay = true,
}: LazyLottieProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [Lottie, setLottie] = useState<any>(null);
    const [animationData, setAnimationData] = useState<any>(null);

    // Intersection Observer to detect when component is in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            {
                rootMargin: '50px', // Start loading 50px before entering viewport
                threshold: 0.1,
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
    }, [isVisible]);

    // Load Lottie library and animation data when visible
    useEffect(() => {
        if (!isVisible) return;

        const loadLottie = async () => {
            try {
                // Dynamically import Lottie library
                const LottieModule = await import('lottie-react');
                setLottie(() => LottieModule.default);

                // Dynamically import animation data
                const animationModule = await import(`../assets/animations/${animationPath}`);
                setAnimationData(animationModule.default);
            } catch (error) {
                console.error('Failed to load Lottie animation:', error);
            }
        };

        loadLottie();
    }, [isVisible, animationPath]);

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
