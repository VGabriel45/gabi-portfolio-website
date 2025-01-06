import { Fragment } from 'react';

// Types for our work experience
type WorkExperience = {
    role: string;
    company: string;
    period: string;
    description: string[];
    skills: string[];
};

// Work experience data
const experiences: WorkExperience[] = [
    {
        role: "Fullstack Engineer",
        company: "Biconomy",
        period: "Dec 2023 - Jan 2024",
        description: [
            "Developing and maintaining the Biconomy Account Abstraction SDK's",
            "Creating and updating the Biconomy SDK's documentation",
            `Working on the development of Biconomy's ultimate Smart Account solution, "Nexus"`,
            "Facing clients and providing them with support and the best solutions for their needs",
        ],
        skills: ["Typescript", "NextJS", "Unit & Integration Testing", "Solidity", "Foundry", "Hardhat", "Viem / Ethers"]
    },
    {
        role: "Web3 Development Lead",
        company: "Pop Social",
        period: "Feb 2023 - Nov 2023",
        description: [
            "Developed Solidity smart contracts for ICO, Custom Vesting and NFT Marketplace",
            "Developed and maintained the Pop Social cross platform mobile app using React Native",
            "Integrated smart contract interaction in the Pop Social mobile app",
            "Wrote extensive tests for the smart contracts using Foundry",
        ],
        skills: ["React", "React Native", "Typescript", "TailwindCSS", "Solidity", "Foundry"]
    },
    {
        role: "Fullstack Engineer",
        company: "Weave",
        period: "Jan 2022 - Feb 2023",
        description: [
            "Developed Solidity smart contracts for DeFi integrating with Uniswap V2 and Compound Finance",
            "Developed and maintained the Weave App using React and React Flow",
            "Integrated multiple Web3 wallets like Metamask, Coinbase Wallet, WalletConnect and more",
            "Created a weight splitting algorithm for the Weave App to allow users to split their weight between multiple farming pools",
        ],
        skills: ["React", "React Native", "Typescript", "TailwindCSS", "Solidity", "Foundry"]
    }
];

const ExperienceCard = ({ experience }: { experience: WorkExperience }) => {
    return (
        <div className="mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                <div>
                    <h2 className="font-medium text-xl">{experience.role}</h2>
                    <h3 className="text-gray-600 dark:text-gray-400">{experience.company}</h3>
                </div>
                <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 sm:mt-0">
                    {experience.period}
                </span>
            </div>

            <ul className="list-disc list-inside mb-4 space-y-2">
                {experience.description.map((item, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">
                        {item}
                    </li>
                ))}
            </ul>

            <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

export const metadata = {
    title: 'Work Experience',
    description: 'My professional journey and work experience in software development.',
};

export default function Page() {
    return (
        <section className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
                My Work Experience
            </h1>

            <div className="space-y-8">
                {experiences.map((experience, index) => (
                    <Fragment key={index}>
                        <ExperienceCard experience={experience} />
                        {index < experiences.length - 1 && (
                            <hr className="border-gray-200 dark:border-gray-800" />
                        )}
                    </Fragment>
                ))}
            </div>
        </section>
    );
}
