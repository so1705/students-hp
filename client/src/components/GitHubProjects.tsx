import { motion } from 'framer-motion';
import { useGitHub, formatGitHubDate, getLanguageColor } from '@/hooks/useGitHub';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

interface GitHubRepository {
  id: number;
  name: string;
  description: string | null;
  url: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  license: {
    name: string;
  } | null;
}

interface GitHubProjectsProps {
  owner: string;
  title?: string;
  description?: string;
}

/**
 * Component to display GitHub repositories
 * Fetches and displays project data from GitHub API
 */
export default function GitHubProjects({
  owner,
  title = 'Our Projects',
  description = 'Check out our latest projects on GitHub',
}: GitHubProjectsProps) {
  const { data: repositories, loading, error } = useGitHub(owner, undefined, 'repositories');
  const repos = (Array.isArray(repositories) ? repositories : []) as GitHubRepository[];

  if (error) {
    return (
      <section className="py-20 md:py-32 px-4 md:px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 text-red-400 bg-red-950/30 px-4 py-2 rounded-lg">
              <Github size={20} />
              <span>Failed to load GitHub projects: {error}</span>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 px-4 md:px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
            style={{ fontFamily: "'Noto Serif JP', serif" }}
          >
            <span className="text-white">{title}</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">{description}</p>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin">
                <Github className="text-yellow-500" size={40} />
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, index) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group p-6 bg-black border border-gray-800 hover:border-yellow-500 transition-all rounded-lg flex flex-col"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between mb-3">
                      <h3
                        className="text-lg font-bold text-yellow-500 group-hover:text-yellow-400 transition-colors flex-1"
                        style={{ fontFamily: "'Noto Serif JP', serif" }}
                      >
                        {repo.name}
                      </h3>
                      <ExternalLink
                        size={18}
                        className="text-gray-600 group-hover:text-yellow-500 transition-colors ml-2 flex-shrink-0"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {repo.description || 'No description available'}
                    </p>

                    {/* Language and Stats */}
                    <div className="space-y-3">
                      {repo.language && (
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(repo.language) }}
                          />
                          <span className="text-xs text-gray-400">{repo.language}</span>
                        </div>
                      )}

                      {/* Stats */}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Star size={14} />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork size={14} />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>

                      {/* Updated date */}
                      <p className="text-xs text-gray-600">
                        Updated {formatGitHubDate(repo.updated_at)}
                      </p>
                    </div>
                  </motion.a>
                ))}
            </div>
          )}

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href={`https://github.com/${owner}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all"
            >
              <Github size={18} />
              View all on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
