declare module 'sitemap' {
  export class SitemapStream {
    constructor(options: { hostname: string });
    write(url: {
      url: string;
      changefreq?: string;
      priority?: number;
    }): void;
    end(): void;
  }

  export function streamToPromise(stream: SitemapStream): Promise<Buffer>;
} 