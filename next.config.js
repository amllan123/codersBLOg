

const nextConfig = {
  reactStrictMode: true,images:{
    domains:['localhost']
  },
  env:{
    API_URL:process.env.API_URL

  },

  swcMinify: true,
  
}

module.exports = nextConfig
