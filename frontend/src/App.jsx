import React, { useState, useEffect } from 'react';
import { Rocket, Shield, Code, GitBranch, Container, CheckCircle, Clock, TrendingUp, Users, Github, Server } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [apiHealth, setApiHealth] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  useEffect(() => {
    console.log("API URL:", API_URL);
    fetch(`${API_URL}/health`)
      .then(res => res.json())
      .then(data => setApiHealth(data))
      .catch(err => console.error('API not reachable:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="border-b border-purple-500/30 backdrop-blur-sm bg-slate-900/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Rocket className="w-8 h-8 text-purple-400" />
              <div>
                <h1 className="text-2xl font-bold">AI-Enhanced CI/CD Pipeline</h1>
                <p className="text-sm text-purple-300">Full-Stack Application</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg">
                <Server className="w-4 h-4" />
                <span className="text-sm">API:</span>
                {apiHealth ? (
                  <span className="text-green-400 text-sm">● Online</span>
                ) : (
                  <span className="text-red-400 text-sm">● Offline</span>
                )}
              </div>
              <a 
                href="https://github.com/bayarmaa01/devops-project" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm mb-6">
          Production-Grade Full-Stack Application
        </div>
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Deploy in 3 Minutes<br />Instead of 60
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Full-stack application with React frontend and Express.js backend,
          featuring AI-powered CI/CD pipeline and automated deployments.
        </p>

        {apiHealth && (
          <div className="max-w-2xl mx-auto mb-8 p-6 bg-slate-800/50 rounded-xl border border-green-500/30">
            <h3 className="text-lg font-semibold mb-4 text-green-400">✓ Live Backend Connection</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <span className="text-gray-400">Status:</span>
                <span className="ml-2 text-white">{apiHealth.status}</span>
              </div>
              <div className="text-left">
                <span className="text-gray-400">Environment:</span>
                <span className="ml-2 text-white">{apiHealth.environment}</span>
              </div>
              <div className="text-left">
                <span className="text-gray-400">Uptime:</span>
                <span className="ml-2 text-white">{Math.floor(apiHealth.uptime)}s</span>
              </div>
              <div className="text-left">
                <span className="text-gray-400">Version:</span>
                <span className="ml-2 text-white">{apiHealth.version}</span>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-4 justify-center flex-wrap">
          <div className="px-6 py-3 bg-green-500/20 rounded-lg border border-green-500/30">
            <div className="text-3xl font-bold text-green-400">91%</div>
            <div className="text-sm text-gray-300">Faster Deployments</div>
          </div>
          <div className="px-6 py-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
            <div className="text-3xl font-bold text-blue-400">70%</div>
            <div className="text-sm text-gray-300">Fewer False Positives</div>
          </div>
          <div className="px-6 py-3 bg-purple-500/20 rounded-lg border border-purple-500/30">
            <div className="text-3xl font-bold text-purple-400">82%</div>
            <div className="text-sm text-gray-300">Test Coverage</div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-8">
        <div className="flex gap-2 bg-slate-800/50 p-2 rounded-lg overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview', icon: Rocket },
            { id: 'features', label: 'Features', icon: CheckCircle },
            { id: 'results', label: 'Results', icon: TrendingUp },
            { id: 'team', label: 'Team', icon: Users }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition whitespace-nowrap ${
                  activeTab === tab.id ? 'bg-purple-600 text-white' : 'hover:bg-slate-700 text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-16">
        {activeTab === 'overview' && (
          <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-purple-400">Frontend</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• React 18 + Vite</li>
                  <li>• Tailwind CSS</li>
                  <li>• Lucide React Icons</li>
                  <li>• Real-time API Connection</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-green-400">Backend</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Express.js REST API</li>
                  <li>• Docker Containerized</li>
                  <li>• Jest Testing</li>
                  <li>• GitHub Actions CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'AI Security', icon: Shield, desc: 'Snyk AI with 70% fewer false positives' },
              { title: 'Automated Testing', icon: CheckCircle, desc: '82% code coverage with Jest' },
              { title: 'Docker Deploy', icon: Container, desc: 'Multi-stage builds, optimized images' },
              { title: 'GitHub Copilot', icon: Code, desc: '30% faster development with AI' }
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20">
                  <Icon className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                  <p className="text-gray-300">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        )}

        {activeTab === 'results' && (
          <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6">Measurable Results</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Deployment Time', before: '30-60 min', after: '3-5 min', improvement: '91% faster' },
                { label: 'Security Scan', before: '5-10 min', after: '30-60 sec', improvement: '90% faster' },
                { label: 'False Positives', before: '25-30%', after: '5-10%', improvement: '70% reduction' }
              ].map((result, idx) => (
                <div key={idx} className="bg-slate-900/50 p-6 rounded-lg">
                  <div className="text-sm text-gray-400 mb-2">{result.label}</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-gray-500 line-through">{result.before}</span>
                    <span className="text-2xl font-bold">{result.after}</span>
                  </div>
                  <div className="text-green-400 font-semibold">✓ {result.improvement}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="bg-slate-800/50 rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-6">Team Members</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Bayarmaa Bumandroj', regno: '12222441', roll: '13', role: 'CI/CD & Architecture' },
                { name: 'Munkh-Erdene Khurtsbileg', regno: '12221525', roll: '3', role: 'AI Integration & Security' },
                { name: 'Khosbayar Baatarsaikhan', regno: '12222747', roll: '12', role: 'Development & Documentation' }
              ].map((member, idx) => (
                <div key={idx} className="bg-slate-900/50 p-6 rounded-lg text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    {member.name[0]}
                  </div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <div className="text-sm text-gray-400 mb-2">Reg: {member.regno} | Roll: {member.roll}</div>
                  <div className="text-sm text-purple-300">{member.role}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <footer className="border-t border-purple-500/30 bg-slate-900/50 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 AI-Enhanced CI/CD Pipeline | Full-Stack Application
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
