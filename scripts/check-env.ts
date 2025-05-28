import { validateEnv } from '../src/utils/env'

try {
  validateEnv()
  console.log('✅ Environment variables validated successfully')
  process.exit(0)
} catch (err) {
  const error = err instanceof Error ? err : new Error(String(err))
  console.error('❌ Environment validation failed:', error.message)
  process.exit(1)
} 