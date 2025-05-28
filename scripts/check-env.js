// Simple environment checker
function checkEnv() {
  // Only check in production
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.NEXTAUTH_SECRET) {
      console.error('❌ NEXTAUTH_SECRET must be set in production')
      process.exit(1)
    }
  }

  console.log('✅ Environment check passed')
  process.exit(0)
}

checkEnv() 