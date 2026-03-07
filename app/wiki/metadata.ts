import { methods } from './data';

// Derive serializable metadata from the canonical data source
export const methodMeta: Record<string, { name: string; fullName: string; tagline: string; overview: string }> =
  Object.fromEntries(
    methods.map((m) => [
      m.id,
      {
        name: m.name,
        fullName: m.fullName,
        tagline: m.tagline,
        overview: m.overview.slice(0, 200),
      },
    ])
  );
