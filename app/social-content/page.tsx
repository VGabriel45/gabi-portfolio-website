import { Fragment } from 'react';

type ContentPlatform = {
    type: 'youtube' | 'udemy' | 'medium';
    title: string;
    description: string;
    link: string;
    image?: string;
    stats?: {
        views?: string;
        students?: string;
        claps?: string;
    };
    date: string;
};

const content: ContentPlatform[] = [
    {
        type: 'medium',
        title: "ERC-7710: A Deep Dive into Smart Contract Delegation Interfaces",
        description: "An in-depth exploration of ERC-7710, a groundbreaking standard for smart contract delegation interfaces. This article examines how this standard enhances blockchain interoperability and simplifies delegation mechanisms in smart contracts.",
        link: "https://medium.com/@vgabrielmarian21/erc-7710-a-deep-dive-into-smart-contract-delegation-interfaces-31ccd70a26f2",
        date: "2024"
    },
    {
        type: 'youtube',
        title: "Web3 Development Channel",
        description: "Educational content focused on blockchain development, smart contracts, and Web3 technologies. Regular uploads covering Account Abstraction, DeFi, and blockchain architecture.",
        link: "https://youtube.com/@YourChannel",
        stats: {
            views: "50K+"
        },
        date: "2023 - Present"
    },
    {
        type: 'udemy',
        title: "Complete Web3 Development Course",
        description: "Comprehensive course covering blockchain fundamentals, smart contract development, and building decentralized applications. Learn Account Abstraction, Web3 integration, and more.",
        link: "https://udemy.com/your-course",
        stats: {
            students: "1,000+"
        },
        date: "2023"
    }
];

const PlatformIcon = ({ type }: { type: ContentPlatform['type'] }) => {
    const iconClasses = "w-6 h-6";

    switch (type) {
        case 'youtube':
            return (
                <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
            );
        case 'udemy':
            return (
                <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0L5.81 3.573v3.574l6.189-3.574 6.191 3.574V3.573z M5.81 10.148v3.574L12 17.295l6.191-3.573v-3.574L12 13.721z M5.81 16.722v3.574L12 24l6.191-3.574v-3.574L12 20.295z" />
                </svg>
            );
        case 'medium':
            return (
                <svg className={iconClasses} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
            );
    }
};

const ContentCard = ({ item }: { item: ContentPlatform }) => {
    return (
        <div className="mb-12">
            <div className="flex items-start gap-4 mb-4">
                <div className="text-gray-600 dark:text-gray-400 mt-1">
                    <PlatformIcon type={item.type} />
                </div>
                <div className="flex-1">
                    <h2 className="font-medium text-xl mb-2">{item.title}</h2>
                    <div className="flex flex-wrap gap-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {item.stats && Object.entries(item.stats).map(([key, value]) => (
                            <span key={key} className="capitalize">
                                {value} {key}
                            </span>
                        ))}
                        <span>{item.date}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                    </p>
                    <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        aria-label={`Visit ${item.title}`}
                    >
                        View Content →
                    </a>
                </div>
            </div>
        </div>
    );
};

export const metadata = {
    title: 'Social Content',
    description: 'My educational content, courses, and articles about Web3 development and blockchain technology.',
};

export default function SocialContent() {
    return (
        <section className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                Educational Content & Publications
            </h1>

            <div className="space-y-8">
                {content.map((item, index) => (
                    <Fragment key={`content-${index}`}>
                        <ContentCard item={item} />
                        {index < content.length - 1 && (
                            <hr className="border-gray-200 dark:border-gray-800" />
                        )}
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
