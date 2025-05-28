// Minimum required environment variables for initial deployment
const requiredEnvVars = {
  // NextAuth (required for authentication)
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
} as const

// Optional environment variables that can be added later
const optionalEnvVars = {
  // Application
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  
  // NextAuth URL (optional as Vercel sets this automatically)
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,

  // Authentication providers (optional)
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

  // APIs (optional)
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
  REPLICATE_API_KEY: process.env.REPLICATE_API_KEY,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,

  // Storage (optional)
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,

  // Database (optional)
  DATABASE_URL: process.env.DATABASE_URL,

  // Redis (optional)
  REDIS_URL: process.env.REDIS_URL,

  // Stripe (optional)
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,

  // Email (optional)
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM,

  // Monitoring (optional)
  SENTRY_DSN: process.env.SENTRY_DSN,
} as const

export function validateEnv(): void {
  // Skip validation in development mode
  if (process.env.NODE_ENV === 'development') {
    return
  }

  // Only validate in production
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.NEXTAUTH_SECRET) {
      throw new Error('NEXTAUTH_SECRET must be set in production')
    }
  }
}

export function getRequiredServerEnvVar(key: keyof typeof requiredEnvVars): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Required environment variable ${key} is not set`)
  }
  return value
}

// Simple runtime environment check
export function checkEnv() {
  if (process.env.NODE_ENV === 'production' && !process.env.NEXTAUTH_SECRET) {
    console.error('Warning: NEXTAUTH_SECRET is not set in production')
  }
}

/**
 * Environment variable utility functions
 */

// Get a required environment variable
export function getRequiredEnvVar(key: string): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Required environment variable ${key} is not set`)
  }
  return value
}

// Get an optional environment variable
export function getEnvVar(key: string): string | undefined {
  return process.env[key]
}

// Check if we're in production
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production'
}

// Check if we're in development
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development'
}

export function getOptionalEnvVar<T extends keyof typeof optionalEnvVars>(key: T): string | undefined {
  return optionalEnvVars[key]
} 