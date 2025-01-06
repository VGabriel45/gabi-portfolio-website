import { BlogPosts } from 'app/components/posts'
import GitHubCalendarWrapper from './components/githubCalendarWrapper'

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold tracking-tighter">
        Vasile Gabriel Marian
      </h1>
      <span className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1 sm:mt-0">
        <a href="https://mee.biconomy.io/" target="_blank" rel="noopener noreferrer" className="hover:underline">
          @Biconomy
        </a>
        <img src="biconomyLogo.png" alt="Biconomy Logo" className="ml-1 w-4 h-4 mr-1" />
      </span>
      <p className="mb-4 mt-8">
        {`I'm a Senior Software Engineer with a passion and focus for Blockchain & Web3 Development. 
          I have been working in the Web3 Industry for the past 4 years, my experience spans across multiple 
          areas of the industry, DeFi, NFTs, Gaming, SocialFi, DAOs, Account Abstraction, Chain Abstraction and more.
          My passion for tech makes me get out of my comfort zone and try new things, I created an Udemy course and educational Youtube Videos while also being an active 
          writer on platforms like X, Medium and LinkedIn.`}
      </p>
      <GitHubCalendarWrapper />
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
