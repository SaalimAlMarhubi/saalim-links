# saalim-links

Link-in-bio page for [saalim.dev](https://saalim.dev). Built with Next.js, Tailwind CSS v4, and TypeScript.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static files are output to the `out/` directory.

## Deploy to Cloudflare Pages

1. Connect your GitHub repo to Cloudflare Pages
2. Set the build command: `npm run build`
3. Set the output directory: `out`
4. Deploy

Alternatively, deploy manually:

```bash
npm run build
npx wrangler pages deploy out --project-name=saalim-links
```

## Updating links

Edit `src/lib/links.ts` — all link data is typed and hardcoded there.
