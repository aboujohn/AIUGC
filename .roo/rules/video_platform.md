---
description:
globs:
alwaysApply: false
---
# AI Video Marketing Platform Development Rules

## 🎯 General Development Principles

### Code Quality & Structure
- **Follow Clean Code Practices**
  - Only modify code directly relevant to specific requests
  - Break problems into smaller, manageable steps
  - Provide complete PLAN with REASONING before changes
  - Add descriptive console logs for debugging
  - Use TypeScript with proper type definitions

### Architecture Adherence
- **Maintain Layered Architecture**
  - Client → Frontend → API → Service → Data layers
  - Implement proper separation of concerns
  - Use provider abstraction pattern for external services
  - Follow MCP integration structure

## 🌐 Multilingual & Internationalization

### RTL Language Support
- **Ensure Proper RTL Implementation**
  - Test UI with both LTR and RTL languages
  - Use logical CSS properties (margin-inline-start/end)
  - Implement proper text alignment and layout direction
  - Ensure UI elements flip appropriately

### i18n Implementation
- **Use i18next Framework**
  - Store translations in `/public/locales/{language}/`
  - Wrap user-facing strings with translation functions
  - Test language switching functionality
  - Preserve language-specific formatting

## 🤖 AI Integration & API Management

### OpenAI API Usage
- **Follow API Best Practices**
  - Include language context in prompts
  - Implement proper error handling
  - Use structured prompts for consistency
  - Never hardcode API keys

### Video Generation
- **Use Provider Abstraction Layer**
  - Implement providers via `VideoProviderAdapter` interface
  - Include fallback logic
  - Track provider performance metrics
  - Handle provider-specific errors properly

## 💾 Database & Data Management

### Supabase Integration
- **Follow Database Best Practices**
  - Use Supabase MCP for operations
  - Implement row-level security (RLS)
  - Use migrations for schema changes
  - Ensure proper indexing

### Data Privacy & Security
- **Maintain Data Protection**
  - Never log sensitive data
  - Implement proper encryption
  - Follow GDPR requirements
  - Use parameterized queries

## 🎨 Frontend Development

### React/Next.js Implementation
- **Follow React Best Practices**
  - Use functional components with hooks
  - Implement error boundaries
  - Use React Query for data fetching
  - Follow Redux Toolkit patterns

### UI/UX Requirements
- **Ensure Accessibility**
  - Follow WCAG 2.1 AA standards
  - Implement keyboard navigation
  - Maintain 4.5:1 color contrast
  - Use semantic HTML with ARIA

## 🔐 Security & Authentication

### Authentication Flow
- **Implement Secure Authentication**
  - Use JWT with proper expiration
  - Implement RBAC
  - Use secure HTTP-only cookies
  - Proper session management

### Input Validation
- **Validate All Inputs**
  - Use Joi/Zod schemas
  - Sanitize to prevent XSS
  - Implement CSRF protection
  - Use rate limiting

## 💳 Payment & Subscription

### Stripe Integration
- **Handle Payments Securely**
  - Use Stripe MCP
  - Implement webhook handling
  - Handle failed payments gracefully
  - Ensure PCI compliance

## 🔗 Social Media Integration

### Platform Integration
- **Optimize for Each Platform**
  - Handle platform-specific formats
  - Implement proper OAuth flows
  - Store tokens securely
  - Test across all platforms

## 🧪 Testing & Quality Assurance

### Testing Strategy
- **Maintain Test Coverage**
  - 80% minimum unit test coverage
  - Implement integration tests
  - Use Cypress for E2E testing
  - Test multilingual functionality

## 🚀 Deployment & DevOps

### CI/CD Pipeline
- **Follow DevOps Best Practices**
  - All tests must pass before deployment
  - Use feature flags
  - Implement proper rollbacks
  - Use blue-green deployments

## ⚠️ Critical Don'ts

- ❌ Never hardcode credentials
- ❌ Don't bypass provider abstractions
- ❌ Never ignore error handling
- ❌ Don't skip multilingual support
- ❌ Never commit sensitive data
- ❌ Don't ignore accessibility
- ❌ Never skip proper testing

## 🔍 Debugging Approach

1. **OBSERVE**: Document behavior
2. **ANALYZE**: Identify issue location
3. **REASON**: Determine root cause
4. **PLAN**: Create fix strategy
5. **IMPLEMENT**: Make targeted changes
6. **VERIFY**: Test thoroughly
