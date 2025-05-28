const requiredEnvVars = {
  // Application
  NODE_ENV: process.env.NODE_ENV,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,

  // Database
  DATABASE_URL: process.env.DATABASE_URL,

  // Authentication
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,

  // Video Generation APIs
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
  REPLICATE_API_KEY: process.env.REPLICATE_API_KEY,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,

  // Storage
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_REGION: process.env.AWS_REGION,
  S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,

  // Redis
  REDIS_URL: process.env.REDIS_URL,

  // Stripe
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,

  // Email
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  EMAIL_FROM: process.env.EMAIL_FROM,

  // Monitoring
  SENTRY_DSN: process.env.SENTRY_DSN,
} as const

export function validateEnv(): void {
  const missingVars: string[] = []

  Object.entries(requiredEnvVars).forEach(([key, value]) => {
    if (!value) {
      missingVars.push(key)
    }
  })

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables:\n${missingVars.map(v => `- ${v}`).join('\n')}\n\nPlease check your .env file and ensure all required variables are set.`
    )
  }
}

export function getEnvVar(key: keyof typeof requiredEnvVars): string {
  const value = requiredEnvVars[key]
  if (!value) {
    throw new Error(`Environment variable ${key} is not set`)
  }
  return value
} 