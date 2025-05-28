# API List for AI Video Marketing Platform

## External APIs

### 1. AI and Content Generation APIs
- **OpenAI API**
  - Purpose: Script generation and content creation
  - Endpoints:
    - `/v1/completions` - For text generation
    - `/v1/chat/completions` - For conversational script generation
    - `/v1/edits` - For modifying existing scripts
  - Authentication: API key

- **Video Generation APIs**
  - **Runway ML API**
    - Purpose: Initial video generation provider
    - Key endpoints: Video generation, status checking
    - Authentication: API key
  
  - **Pika Labs API**
    - Purpose: Alternative video generation provider
    - Key endpoints: Video generation, status checking
    - Authentication: API key
  
  - **Google VEO3 API** (Future integration)
    - Purpose: Advanced video generation
    - Key endpoints: TBD based on API availability
    - Authentication: OAuth 2.0

### 2. Payment Processing APIs
- **Stripe API**
  - Purpose: Payment processing and subscription management
  - Key endpoints:
    - `/v1/customers` - Customer management
    - `/v1/subscriptions` - Subscription handling
    - `/v1/payment_intents` - One-time payments
    - `/v1/products` and `/v1/prices` - Product and pricing configuration
    - `/v1/invoices` - Invoice management
    - `/v1/webhook` - Event notifications
  - Authentication: API key and webhook signatures

### 3. Social Media APIs
- **Facebook Graph API**
  - Purpose: Video publishing to Facebook/Instagram
  - Key endpoints: Authentication, page management, video upload
  - Authentication: OAuth 2.0

- **Twitter API v2**
  - Purpose: Video sharing on Twitter
  - Key endpoints: Tweet creation, media upload
  - Authentication: OAuth 2.0

- **LinkedIn API**
  - Purpose: Professional video sharing
  - Key endpoints: Share creation, media upload
  - Authentication: OAuth 2.0

- **TikTok API**
  - Purpose: Short-form video sharing
  - Key endpoints: Video upload, creator authentication
  - Authentication: OAuth 2.0

### 4. Storage and CDN APIs
- **AWS S3 API**
  - Purpose: Asset and video storage
  - Key endpoints: Object operations, bucket management
  - Authentication: AWS credentials

- **AWS CloudFront API**
  - Purpose: Content delivery network for videos
  - Key endpoints: Distribution management, cache invalidation
  - Authentication: AWS credentials

### 5. Analytics APIs
- **Amplitude API**
  - Purpose: Product usage analytics
  - Key endpoints: Event tracking, user properties
  - Authentication: API key

- **Datadog API**
  - Purpose: System monitoring and performance tracking
  - Key endpoints: Metrics, logs, traces
  - Authentication: API key

### 6. Authentication Services
- **Auth0 API** (Optional for advanced scenarios)
  - Purpose: Enterprise authentication and identity management
  - Key endpoints: User management, authentication flows, roles
  - Authentication: OAuth 2.0, API key

## Internal APIs

### 1. User Management API
- **Authentication Endpoints**
  - `POST /api/auth/register` - User registration
  - `POST /api/auth/login` - User login
  - `POST /api/auth/refresh` - Refresh authentication token
  - `POST /api/auth/logout` - User logout
  - `GET /api/auth/me` - Get current user profile

- **User Profile Endpoints**
  - `GET /api/users/:id` - Get user details
  - `PUT /api/users/:id` - Update user profile
  - `GET /api/users/:id/preferences` - Get user preferences
  - `PUT /api/users/:id/preferences` - Update user preferences
  - `GET /api/users/:id/usage` - Get usage statistics

### 2. Script Generation API
- **Script Creation Endpoints**
  - `POST /api/scripts/generate` - Generate script options
  - `GET /api/scripts` - List user's scripts
  - `GET /api/scripts/:id` - Get specific script
  - `PUT /api/scripts/:id` - Update script content
  - `DELETE /api/scripts/:id` - Delete script
  - `POST /api/scripts/:id/regenerate` - Regenerate script variations

- **Script Template Endpoints**
  - `GET /api/script-templates` - List available templates
  - `GET /api/script-templates/:id` - Get specific template
  - `POST /api/script-templates` - Create custom template (admin)
  - `PUT /api/script-templates/:id` - Update template (admin)

### 3. Avatar API
- **Avatar Selection Endpoints**
  - `GET /api/avatars` - List available avatars
  - `GET /api/avatars/:id` - Get avatar details
  - `GET /api/avatars/:id/preview` - Get avatar preview
  - `GET /api/avatars/recommended` - Get recommended avatars based on context

- **Avatar Management Endpoints** (Admin)
  - `POST /api/avatars` - Add new avatar
  - `PUT /api/avatars/:id` - Update avatar
  - `DELETE /api/avatars/:id` - Remove avatar
  - `PUT /api/avatars/:id/metadata` - Update avatar metadata

### 4. Video Generation API
- **Video Creation Endpoints**
  - `POST /api/videos/generate` - Initiate video generation
  - `GET /api/videos/generation/:jobId/status` - Check generation status
  - `GET /api/videos` - List user's videos
  - `GET /api/videos/:id` - Get video details
  - `DELETE /api/videos/:id` - Delete video
  - `POST /api/videos/:id/regenerate` - Regenerate video

- **Video Provider Management** (Admin)
  - `GET /api/video-providers` - List configured providers
  - `POST /api/video-providers` - Add new provider
  - `PUT /api/video-providers/:id` - Update provider
  - `PUT /api/video-providers/:id/status` - Change provider status

### 5. Asset Management API
- **User Asset Endpoints**
  - `POST /api/assets/upload` - Upload new asset
  - `GET /api/assets` - List user's assets
  - `GET /api/assets/:id` - Get asset details
  - `DELETE /api/assets/:id` - Delete asset
  - `POST /api/assets/process` - Process asset (enhancement, background removal)

- **Asset Category Endpoints**
  - `GET /api/asset-categories` - List asset categories
  - `POST /api/asset-categories` - Create category (admin)
  - `PUT /api/asset-categories/:id` - Update category (admin)

### 6. Payment and Subscription API
- **Plan Management Endpoints**
  - `GET /api/payments/plans` - List available subscription plans
  - `POST /api/payments/plans` - Create plan (admin)
  - `PUT /api/payments/plans/:id` - Update plan (admin)

- **Subscription Endpoints**
  - `POST /api/payments/subscribe` - Subscribe to plan
  - `GET /api/payments/subscription` - Get current subscription
  - `PUT /api/payments/subscription` - Update subscription
  - `DELETE /api/payments/subscription` - Cancel subscription

- **Transaction Endpoints**
  - `GET /api/payments/transactions` - List payment transactions
  - `GET /api/payments/invoices` - List invoices
  - `GET /api/payments/invoices/:id` - Get specific invoice

### 7. Social Media Integration API
- **Account Connection Endpoints**
  - `GET /api/social/accounts` - List connected social accounts
  - `POST /api/social/connect/:platform` - Connect social account
  - `DELETE /api/social/disconnect/:platform` - Disconnect social account

- **Sharing Endpoints**
  - `POST /api/social/share` - Share video to social platforms
  - `POST /api/social/schedule` - Schedule social media post
  - `GET /api/social/posts` - List social media posts
  - `DELETE /api/social/posts/:id` - Delete scheduled post

### 8. Analytics API
- **Usage Analytics Endpoints**
  - `GET /api/analytics/usage` - Get platform usage statistics
  - `GET /api/analytics/videos` - Get video performance metrics
  - `GET /api/analytics/generation` - Get generation time metrics

- **Business Analytics Endpoints** (Admin)
  - `GET /api/analytics/users` - Get user statistics
  - `GET /api/analytics/revenue` - Get revenue statistics
  - `GET /api/analytics/providers` - Get provider usage statistics

### 9. Localization API
- **Language Management Endpoints**
  - `GET /api/languages` - List available languages
  - `GET /api/languages/:code/translations` - Get translations for language
  - `PUT /api/languages/:code/translations` - Update translations (admin)

### 10. Quality Management API
- **Quality Preset Endpoints**
  - `GET /api/quality/presets` - List quality presets
  - `GET /api/quality/presets/:id` - Get preset details
  - `POST /api/quality/presets` - Create preset (admin)
  - `PUT /api/quality/presets/:id` - Update preset (admin)

- **Feedback Endpoints**
  - `POST /api/videos/:id/feedback` - Submit video quality feedback
  - `GET /api/feedback` - List feedback (admin)
