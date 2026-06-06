export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
            {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-800">

        <h1 className="text-2xl font-bold">
          AI Commerce OS
        </h1>

        <div className="flex gap-6 text-gray-400">
          <a href="#agents">Agents</a>
<a href="#workflow">Workflow</a>
<a href="#dashboard">Dashboard</a>
          <a href="/cart">Cart</a>
          <a href="#">Contact</a>
        </div>

      </nav>
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center text-center px-6">
        <h1 className="text-7xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          AI Commerce OS
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mb-8">
          AI-Powered Ecommerce Automation Platform with Intelligent Agents for
          Marketing, Sales, Support, Finance and Business Operations.
        </p>

        <a
          href="/products"
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300"
        >
          Explore Products
        </a>
      </section>
            {/* AI Agents Section */}
      <section id="agents" className="py-20 px-6 bg-zinc-950">  
        <h2 className="text-4xl font-bold text-center mb-12">
          AI Agents
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3">🧠 CEO Agent</h3>
            <p className="text-gray-400">
              Acts as the central brain and orchestrates all business operations.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3">📢 Marketing Agent</h3>
            <p className="text-gray-400">
              Creates campaigns, content and promotional strategies.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3">💰 Sales Agent</h3>
            <p className="text-gray-400">
              Handles leads, outreach and customer acquisition.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3">🎧 Support Agent</h3>
            <p className="text-gray-400">
              Provides customer assistance and issue resolution.
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-3">📊 Finance Agent</h3>
            <p className="text-gray-400">
              Tracks revenue, transactions and business reports.
            </p>
          </div>

        </div>
      </section>
            {/* Workflow Section */}
      <section id="workflow" className="py-20 px-6 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">
          Workflow Automation
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">

          <div className="bg-blue-900 px-6 py-4 rounded-xl">
            Business Goal Input
          </div>

          <div>↓</div>

          <div className="bg-purple-900 px-6 py-4 rounded-xl">
            CEO Agent
          </div>

          <div>↓</div>

          <div className="grid md:grid-cols-4 gap-4 w-full">

            <div className="bg-zinc-900 p-4 rounded-xl">
              Marketing Agent
            </div>

            <div className="bg-zinc-900 p-4 rounded-xl">
              Sales Agent
            </div>

            <div className="bg-zinc-900 p-4 rounded-xl">
              Support Agent
            </div>

            <div className="bg-zinc-900 p-4 rounded-xl">
              Finance Agent
            </div>

          </div>

          <div>↓</div>

          <div className="bg-green-900 px-6 py-4 rounded-xl">
            Dashboard Summary
          </div>

        </div>
      </section>
            {/* Dashboard Preview */}
      <section id="dashboard" className="py-20 px-6 bg-zinc-950">
        <h2 className="text-4xl font-bold text-center mb-12">
          CEO Dashboard
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-gray-400">Total Orders</h3>
            <p className="text-3xl font-bold mt-2">1,248</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-gray-400">Revenue</h3>
            <p className="text-3xl font-bold mt-2">$52,430</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-gray-400">Customers</h3>
            <p className="text-3xl font-bold mt-2">842</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-gray-400">AI Efficiency</h3>
            <p className="text-3xl font-bold mt-2">96%</p>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-8 bg-zinc-900 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            AI Business Summary
          </h3>

          <p className="text-gray-400">
            Sales increased by 12% this week. Marketing campaigns generated
            higher engagement and customer support response time improved by 18%.
          </p>
        </div>
      </section>
            {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-gray-500">
        <p>© 2026 AI Commerce OS. All rights reserved.</p>
        <p className="mt-2">
          Powered by AI Agents and Intelligent Automation
        </p>
      </footer>
    </main>
  );
}