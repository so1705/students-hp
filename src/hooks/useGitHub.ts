import { useState, useEffect } from 'react';

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

interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

interface GitHubCommit {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      email: string;
      date: string;
    };
  };
  author: {
    login: string;
    avatar_url: string;
  } | null;
  html_url: string;
}

/**
 * Custom hook for fetching GitHub data
 * Supports repositories, user profiles, and commit history
 */
export function useGitHub(
  owner: string,
  repo?: string,
  type: 'repositories' | 'user' | 'commits' = 'repositories'
): { data: GitHubRepository[] | GitHubUser | GitHubCommit[] | null; loading: boolean; error: string | null } {
  const [data, setData] = useState<GitHubRepository[] | GitHubUser | GitHubCommit[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        let url = '';

        switch (type) {
          case 'repositories':
            url = `https://api.github.com/users/${owner}/repos?sort=updated&per_page=10`;
            break;
          case 'user':
            url = `https://api.github.com/users/${owner}`;
            break;
          case 'commits':
            if (!repo) throw new Error('Repository name is required for commits');
            url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=10`;
            break;
        }

        const response = await fetch(url, {
          headers: {
            'Accept': 'application/vnd.github.v3+json',
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to fetch GitHub data';
        setError(errorMessage);
        console.error('GitHub Hook Error:', errorMessage);
      } finally {
        setLoading(false);
      }
    };

    if (owner) {
      fetchData();
    }
  }, [owner, repo, type]);

  return { data, loading, error } as const;
}

/**
 * Utility function to format GitHub data for display
 */
export function formatGitHubDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Utility function to get language color
 */
export function getLanguageColor(language: string | null): string {
  const colors: Record<string, string> = {
    'TypeScript': '#3178c6',
    'JavaScript': '#f7df1e',
    'Python': '#3776ab',
    'Java': '#007396',
    'C++': '#00599c',
    'Go': '#00add8',
    'Rust': '#ce422b',
    'React': '#61dafb',
    'Vue': '#4fc08d',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
  };

  return colors[language || ''] || '#858585';
}
