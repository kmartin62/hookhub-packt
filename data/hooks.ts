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
    description: "Automatically commits changes with a generated message after Gemini CLI tool use.",
    githubUrl: "https://github.com/gemini-hooks/git-auto-commit"
  },
  {
    id: "2",
    name: "TypeScript Formatter",
    category: "Formatting",
    description: "Runs Prettier on modified files before Gemini CLI finishes a task.",
    githubUrl: "https://github.com/gemini-hooks/ts-formatter"
  },
  {
    id: "3",
    name: "PR Description Generator",
    category: "Docs",
    description: "Generates a detailed PR description for the Gemini CLI based on the changes made.",
    githubUrl: "https://github.com/gemini-hooks/pr-gen"
  },
  {
    id: "4",
    name: "Linter Runner",
    category: "CI/CD",
    description: "Triggers ESLint check on every post-tool event in Gemini CLI to ensure code quality.",
    githubUrl: "https://github.com/gemini-hooks/linter"
  },
  {
    id: "5",
    name: "Environment Checker",
    category: "DevOps",
    description: "Verifies that required environment variables are set before Gemini CLI starts a task.",
    githubUrl: "https://github.com/gemini-hooks/env-check"
  },
  {
    id: "6",
    name: "Test Coverage Reporter",
    category: "Testing",
    description: "Reports unit test coverage after Gemini CLI modifications to source files.",
    githubUrl: "https://github.com/gemini-hooks/coverage"
  }
];
