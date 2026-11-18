import type { NextConfig } from 'next'
import nextra from 'nextra'

const BASE_PATH = process.env.BASE_PATH || "";
const STATIC_EXPORT = process.env.STATIC_EXPORT === "1";

const withNextra = nextra({});

const config: NextConfig = {
  output: STATIC_EXPORT ? "export" : "standalone",
  trailingSlash: STATIC_EXPORT,
  images: {
    unoptimized: true,
  },
  basePath: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.tsx',
    },
  },
};

export default withNextra(config);
