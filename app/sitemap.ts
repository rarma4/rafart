import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = 'https://www.rafart.com.br'
  
  return [
    {
      url: `${baseURL}/pt`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': `${baseURL}/pt`,
          en: `${baseURL}/en`
        }
      }
    },
    {
      url: `${baseURL}/en`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: {
          'pt-BR': `${baseURL}/pt`,
          en: `${baseURL}/en`
        }
      }
    },
    {
      url: `${baseURL}/pt/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'pt-BR': `${baseURL}/pt/learn`,
          en: `${baseURL}/en/learn`
        }
      }
    },
    {
      url: `${baseURL}/en/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
      alternates: {
        languages: {
          'pt-BR': `${baseURL}/pt/learn`,
          en: `${baseURL}/en/learn`
        }
      }
    },
  ]
}
