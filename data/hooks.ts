export interface Hook {
  id: string;
  name: string;
  category: string;
  description: string;
  githubUrl: string;
}

export const hooks: Hook[] = [
  {
    id: "1",
    name: "Git Auto-Commit Hook",
    category: "Git",
    description: "Automatically commits changes with a generated message after tool use.",
    githubUrl: "https://github.com/mcp-hooks/git-auto-commit"
  },
  {
    id: "2",
    name: "TypeScript Formatter",
    category: "Formatting",
    description: "Runs Prettier on modified files before finishing a task.",
    githubUrl: "https://github.com/mcp-hooks/ts-formatter"
  },
  {
    id: "3",
    name: "PR Description Generator",
    category: "Docs",
    description: "Generates a detailed PR description based on the changes made.",
    githubUrl: "https://github.com/mcp-hooks/pr-gen"
  },
  {
    id: "4",
    name: "Linter Runner",
    category: "CI/CD",
    description: "Triggers ESLint check on every post-tool event to ensure code quality.",
    githubUrl: "https://github.com/mcp-hooks/linter"
  },
  {
    id: "5",
    name: "Environment Checker",
    category: "DevOps",
    description: "Verifies that required environment variables are set before starting a task.",
    githubUrl: "https://github.com/mcp-hooks/env-check"
  },
  {
    id: "6",
    name: "Test Coverage Reporter",
    category: "Testing",
    description: "Reports unit test coverage after changes are made to source files.",
    githubUrl: "https://github.com/mcp-hooks/coverage"
  }
];
