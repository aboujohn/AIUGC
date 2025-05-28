import { validateEnv } from '../src/utils/env'

console.log('Validating environment variables...')

try {
  validateEnv()
  console.log('✅ Environment variables validation passed')
  process.exit(0)
} catch (error) {
  console.error('❌ Environment variables validation failed:')
  console.error(error.message)
  process.exit(1)
} 