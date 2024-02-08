import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.rafart.com.br/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}