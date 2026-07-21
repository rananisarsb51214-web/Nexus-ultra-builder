export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="flex flex-col gap-8 items-center max-w-4xl">
        <h1 className="text-5xl font-bold text-center">
          Nexus Ultra Builder 🚀
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400">
          Enterprise AI platform designed for responsive website creation, workflow automation, content generation, deployment, and team collaboration.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
          <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">AI-Powered Creation</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Leverage artificial intelligence to design and build responsive websites with ease.
            </p>
          </div>
          
          <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Workflow Automation</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Automate repetitive tasks and streamline development processes.
            </p>
          </div>
          
          <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Content Generation</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Utilize AI to generate engaging and relevant content for your websites.
            </p>
          </div>
          
          <div className="p-6 border border-gray-300 dark:border-gray-700 rounded-lg">
            <h2 className="text-2xl font-semibold mb-3">Team Collaboration</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Foster collaboration among team members with a centralized platform.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
