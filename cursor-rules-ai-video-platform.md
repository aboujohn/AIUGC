# Cursor Rules for AI Video Marketing Platform

## 🎯 General Development Principles

### Code Quality & Structure
- Only modify code directly relevant to the specific request. Avoid changing unrelated functionality
- Never replace code with placeholders like `// ... rest of the processing ...`. Always include complete code
- Break problems into smaller steps. Think through each step separately before implementing
- Always provide a complete PLAN with REASONING based on evidence from code and logs before making changes
- Explain your OBSERVATIONS clearly, then provide REASONING to identify the exact issue
- Add console logs when needed to gather more information
- Maintain consistent code style using ESLint and Prettier configurations
- Use TypeScript for all new code with proper type definitions

### Architecture Adherence
- Follow the established layered architecture: Client → Frontend → API → Service → Data layers
- Implement proper separation of concerns between layers
- Use the established provider abstraction pattern for external services
- Maintain the MCP integration structure as defined in the project

## 🌐 Multilingual & Internationalization

### RTL Language Support
- Always test UI changes with both LTR (English) and RTL (Hebrew/Arabic) languages
- Use logical CSS properties (margin-inline-start/end) instead of directional properties when applicable
- Implement proper text alignment and layout direction switching
- Ensure all icons and UI elements flip appropriately for RTL languages

### i18n Implementation
- Use i18next framework with Next.js integration
- Store translations in `/public/locales/{language}/` directory structure
- Always wrap user-facing strings with translation functions
- Test language switching functionality after any UI changes
- Preserve language-specific formatting and cultural nuances in AI-generated content

### Content Localization
- Ensure OpenAI API calls include language context for script generation
- Implement language tagging for all generated content
- Support UTF-8 encoding for all text data storage and processing

## 🤖 AI Integration & API Management

### OpenAI API Usage
- Always include language context in prompts for multilingual script generation
- Implement proper error handling for API rate limits and failures
- Use structured prompts that maintain consistency across different languages
- Log API usage for monitoring and cost optimization
- Never hardcode API keys - use environment variables

### Video Generation Abstraction
- Always use the provider abstraction layer - never call video generation APIs directly
- Implement new providers by creating adapters that conform to the `VideoProviderAdapter` interface
- Include fallback logic when primary providers fail
- Track provider performance metrics for optimization decisions
- Handle provider-specific error codes through the abstraction layer

### External API Best Practices
- Implement exponential backoff for retry logic
- Use proper authentication methods (JWT, OAuth 2.0, API keys) as specified per service
- Validate all external API responses before processing
- Log external API calls for debugging and monitoring

## 💾 Database & Data Management

### Supabase Integration
- Use the Supabase MCP for database operations when available
- Implement proper row-level security (RLS) policies for all tables
- Use database migrations for schema changes
- Ensure proper indexing for performance-critical queries
- Follow the established data model relationships

### Data Privacy & Security
- Never log sensitive user data (passwords, payment info, API keys)
- Implement proper data encryption for sensitive fields
- Follow GDPR compliance requirements for user data handling
- Use parameterized queries to prevent SQL injection
- Validate and sanitize all user inputs

### Caching Strategy
- Use Redis for performance-critical caching
- Implement cache invalidation strategies for user-specific data
- Cache external API responses when appropriate
- Monitor cache hit rates and optimize accordingly

## 🎨 Frontend Development

### React/Next.js Best Practices
- Use functional components with hooks
- Implement proper error boundaries for component error handling
- Use React Query for data fetching and caching
- Follow the established Redux Toolkit patterns for state management
- Ensure components are responsive across all device sizes

### UI/UX Requirements
- Follow WCAG 2.1 AA accessibility standards
- Implement proper keyboard navigation
- Ensure minimum 4.5:1 color contrast ratios
- Use semantic HTML elements with proper ARIA attributes
- Test with screen readers when implementing new UI components

### Performance Optimization
- Implement code splitting and lazy loading for large components
- Optimize images and assets for web delivery
- Use Next.js Image component for optimized image loading
- Maintain 60fps for animations and interactions
- Keep initial page load under 2 seconds

## 🔐 Security & Authentication

### Authentication Flow
- Use JWT tokens with proper expiration and refresh mechanisms
- Implement role-based access control (RBAC) for different user types
- Never store sensitive data in localStorage or sessionStorage
- Use secure HTTP-only cookies for authentication tokens
- Implement proper session management and logout functionality

### Input Validation
- Validate all user inputs on both client and server sides
- Use Joi or Zod schemas for request validation
- Sanitize outputs to prevent XSS attacks
- Implement proper CSRF protection
- Use rate limiting to prevent abuse

### Data Protection
- Encrypt sensitive data at rest and in transit
- Use TLS 1.3 for all communications
- Implement proper backup and recovery procedures
- Follow data retention policies as defined in requirements

## 💳 Payment & Subscription Handling

### Stripe Integration
- Use the Stripe MCP when available for payment operations
- Implement proper webhook handling for payment events
- Handle failed payments and subscription updates gracefully
- Ensure PCI compliance for payment data handling
- Test payment flows in sandbox environment before production

### Subscription Management
- Implement usage tracking for subscription limits
- Handle subscription upgrades/downgrades properly
- Implement grace periods for payment failures
- Provide clear billing information to users

## 🔗 Social Media Integration

### Platform-Specific Handling
- Implement platform-specific video format optimizations
- Handle OAuth flows for each social media platform
- Store and refresh social media tokens securely
- Implement proper error handling for failed posts
- Test sharing functionality across all supported platforms

### Content Optimization
- Automatically adjust video aspect ratios for each platform
- Include platform-specific metadata and tags
- Handle character limits for captions and descriptions
- Implement scheduling functionality for optimal posting times

## 🧪 Testing & Quality Assurance

### Testing Strategy
- Write unit tests for all business logic with minimum 80% coverage
- Implement integration tests for API endpoints
- Use Cypress for end-to-end testing of critical user flows
- Test multilingual functionality across all supported languages
- Test accessibility features with assistive technologies

### Error Handling
- Implement comprehensive error logging with appropriate detail levels
- Use structured logging for easier debugging
- Implement user-friendly error messages
- Create fallback UI states for error conditions
- Monitor error rates and implement alerts for critical failures

### Performance Testing
- Regularly test API response times and database query performance
- Monitor video generation times and optimize when necessary
- Test application performance under load
- Monitor memory usage and optimize for efficiency

## 🚀 Deployment & DevOps

### CI/CD Pipeline
- Ensure all tests pass before deployment
- Use feature flags for gradual rollouts
- Implement proper rollback procedures
- Monitor deployment health after releases
- Use blue-green deployments for zero-downtime updates

### Environment Management
- Use environment-specific configuration files
- Never commit secrets or API keys to version control
- Use proper secrets management (AWS Secrets Manager, etc.)
- Maintain separate environments for development, staging, and production

### Monitoring & Alerting
- Implement comprehensive logging for all application layers
- Set up alerts for critical system metrics
- Monitor business metrics (user registrations, video generations, etc.)
- Use Datadog for system monitoring and performance tracking

## 🔧 MCP Integration Guidelines

### MCP Server Usage
- Prioritize MCP servers in this order:
  1. Supabase MCP (database operations)
  2. GitHub MCP (development workflow)
  3. Puppeteer MCP (UI testing)
  4. Stripe MCP (payment processing)
  5. Google Ads MCP (marketing integration)
  6. Other MCPs as needed

### MCP Configuration
- Maintain both project-specific (`.cursor/mcp.json`) and global (`~/.cursor/mcp.json`) configurations
- Use environment variables for MCP server credentials
- Test MCP server connectivity regularly
- Document MCP usage patterns for team consistency

### MCP Best Practices
- Use stdio transport for local development
- Implement SSE transport for team-wide access when needed
- Monitor MCP server performance and optimize usage
- Keep MCP configurations synchronized across team members

## 📊 Analytics & Reporting

### Data Collection
- Implement proper event tracking for user actions
- Use Amplitude for product usage analytics
- Ensure GDPR compliance for analytics data collection
- Track business metrics (conversions, retention, usage patterns)

### Performance Monitoring
- Monitor API response times and error rates
- Track video generation success rates and performance
- Monitor system resource usage and scaling needs
- Implement custom dashboards for key business metrics

## 🎯 Feature Development Guidelines

### MVP Development
- Focus on core functionality first: script generation, avatar selection, video generation
- Implement basic user management and payment processing
- Ensure solid foundation before adding advanced features
- Test thoroughly before moving to next development phase

### Feature Implementation Order
1. Core video generation pipeline
2. User authentication and management
3. Payment and subscription system
4. Multilingual support and RTL handling
5. Social media integration
6. Advanced customization features
7. Analytics and reporting
8. Enterprise features

### Code Review Checklist
- ✅ Follows established architecture patterns
- ✅ Includes proper error handling
- ✅ Has appropriate test coverage
- ✅ Handles multilingual scenarios
- ✅ Follows security best practices
- ✅ Includes proper logging
- ✅ Optimized for performance
- ✅ Accessible and responsive design
- ✅ Proper documentation and comments

## ⚠️ Critical Don'ts

- ❌ Never hardcode API keys, secrets, or credentials
- ❌ Don't bypass the video provider abstraction layer
- ❌ Never ignore error handling for external API calls
- ❌ Don't implement features without considering multilingual support
- ❌ Never commit sensitive data or logs containing PII
- ❌ Don't skip accessibility considerations in UI development
- ❌ Never deploy without proper testing in staging environment
- ❌ Don't ignore performance implications of new features
- ❌ Never modify database schema without proper migrations
- ❌ Don't implement payment features without thorough testing

## 🔍 Debugging & Troubleshooting

### Systematic Approach
1. **OBSERVE**: Clearly describe what you see in logs, errors, or behavior
2. **ANALYZE**: Identify the specific component or layer where the issue occurs
3. **REASON**: Explain your hypothesis about the root cause
4. **PLAN**: Outline step-by-step approach to fix the issue
5. **IMPLEMENT**: Make targeted changes with proper logging
6. **VERIFY**: Test the fix thoroughly and monitor for side effects

### Common Issues & Solutions
- **API Rate Limits**: Implement exponential backoff and provider switching
- **Multilingual Issues**: Check language context in prompts and UI translations
- **Performance Problems**: Profile database queries and API calls
- **Authentication Failures**: Verify token expiration and refresh mechanisms
- **Payment Issues**: Check webhook handling and Stripe configuration

Remember: Always think holistically about the impact of changes on the entire system, especially considering the multilingual, multi-provider, and scalable nature of this platform.