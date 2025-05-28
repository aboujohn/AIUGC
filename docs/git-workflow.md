# Git Workflow Conventions

## Branch Naming Convention
- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - New features (e.g., feature/user-auth)
- `bugfix/*` - Bug fixes (e.g., bugfix/login-error)
- `hotfix/*` - Urgent fixes for production
- `release/*` - Release preparation

## Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

### Example
```
feat(auth): implement JWT authentication

- Add JWT token generation
- Implement token validation middleware
- Add refresh token functionality

Closes #123
```

## Pull Request Process
1. Create branch from `develop`
2. Make changes and commit following conventions
3. Push branch and create PR
4. Ensure PR template is filled
5. Request review from at least one team member
6. Merge after approval and passing CI checks

## Branch Protection Rules
- `main` and `develop` are protected
- Require pull request reviews
- Require status checks to pass
- No direct pushes to protected branches
- Enforce linear history (rebase and merge) 