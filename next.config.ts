import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	env: {
		API_YANDEX_MAP: process.env.API_YANDEX_MAP
	}
}

export default nextConfig
