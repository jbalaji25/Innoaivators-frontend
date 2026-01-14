
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
    return (
        <Helmet>
            <title>{title} | Innoaivators</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
        </Helmet>
    );
}
