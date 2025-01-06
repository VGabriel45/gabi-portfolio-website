import { Fragment } from 'react';

type Talk = {
    title: string;
    event: string;
    location: string;
    date: string;
    description: string;
    topics: string[];
    slides?: string;
    video?: string;
};

const talks: Talk[] = [
    {
        title: "AI & Account Abstraction",
        event: "ETH Rome",
        video: "https://www.youtube.com/watch?v=DQPn9fBNdO8&t=292s",
        location: "Rome, Italy",
        date: "2024",
        description: "Explored the intersection of Account Abstraction and Artificial Intelligence in Web3, discussing how these technologies are shaping the future of blockchain interactions and user experience.",
        topics: ["Account Abstraction", "AI", "Web3", "Blockchain", "Smart Contracts"],
    },
];

const TalkCard = ({ talk }: { talk: Talk }) => {
    return (
        <div className="mb-12">
            <div className="mb-4">
                <h2 className="font-medium text-xl mb-2">{talk.title}</h2>
                <div className="flex flex-wrap gap-x-4 text-gray-600 dark:text-gray-400">
                    <span>{talk.event}</span>
                    <span>•</span>
                    <span>{talk.location}</span>
                    <span>•</span>
                    <span>{talk.date}</span>
                </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
                {talk.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {talk.topics.map((topic, index) => (
                    <span
                        key={`topic-${index}`}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                        {topic}
                    </span>
                ))}
            </div>

            <div className="flex gap-4">
                {talk.slides && (
                    <a
                        href={talk.slides}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        aria-label={`View slides for ${talk.title}`}
                    >
                        View Slides →
                    </a>
                )}
                {talk.video && (
                    <a
                        href={talk.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                        aria-label={`Watch video for ${talk.title}`}
                    >
                        Watch Video →
                    </a>
                )}
            </div>
        </div>
    );
};

export const metadata = {
    title: 'Talks',
    description: 'My speaking engagements and conference talks about Web3, Account Abstraction, and AI.',
};

export default function Talks() {
    return (
        <section className="max-w-3xl mx-auto px-4 py-8">
            <div className="space-y-8">
                {talks.map((talk, index) => (
                    <Fragment key={`talk-${index}`}>
                        <TalkCard talk={talk} />
                        {index < talks.length - 1 && (
                            <hr className="border-gray-200 dark:border-gray-800" />
                        )}
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
