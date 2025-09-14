import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://goldenboytonework.com'

  // Major Texas cities
  const texasCities = [
    'austin', 'san-antonio', 'houston', 'dallas', 'fort-worth', 'el-paso',
    'arlington', 'corpus-christi', 'plano', 'laredo', 'lubbock', 'garland',
    'irving', 'amarillo', 'grand-prairie', 'brownsville', 'pasadena', 'mesquite',
    'mckinney', 'mcallen', 'killeen', 'carrollton', 'beaumont', 'abilene',
    'round-rock', 'richardson', 'midland', 'odessa', 'waco', 'denton',
    'tyler', 'wichita-falls', 'college-station', 'san-angelo', 'bryan',
    'lewisville', 'sugar-land', 'pearland', 'baytown', 'missouri-city',
    'flower-mound', 'temple', 'cedar-park', 'pflugerville', 'georgetown',
    'kyle', 'buda', 'dripping-springs', 'lakeway', 'westlake', 'bee-cave',
    'leander', 'liberty-hill', 'marble-falls', 'bastrop', 'elgin'
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/our-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // City-specific service pages
    ...texasCities.map((city) => ({
      url: `${baseUrl}/services/${city}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Service-specific pages
    {
      url: `${baseUrl}/services/custom-pools`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/stonework`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/outdoor-kitchens`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/fire-pits`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}