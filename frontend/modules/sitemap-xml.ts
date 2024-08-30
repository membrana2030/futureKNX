import { mkdirSync, writeFileSync } from 'fs'
import { Readable } from 'stream'
import { dirname } from 'path'
import { SitemapStream, streamToPromise } from 'sitemap'
import { defineNuxtModule, createResolver } from '@nuxt/kit'
import { nav } from "../helpers/sitemap";

export default defineNuxtModule({
    meta: {
        name: 'sitemap',
        version: '0.0.1',
        configKey: 'sitemap',
        compatibility: { nuxt: '^3.0.0-rc.11' },
    },
    defaults: {
        hostname: 'http://localhost:3000',
    },
    async setup(options, nuxt) {
        function getRoutes(routes, sitemapRoutes = []) {
            if (Array.isArray(routes)) routes.forEach((r) => {
                if (r.to) sitemapRoutes.push(r.to);
                if (r.path && r.path.indexOf(":") < 0 && sitemapRoutes.indexOf(r.path) < 0) sitemapRoutes.push(r.path)
                if (r.items && Array.isArray(r.items)) getRoutes(r.items, sitemapRoutes);
                if (r.children && Array.isArray(r.children)) getRoutes(r.children, sitemapRoutes);
            })

            return sitemapRoutes;
        }
        async function generateSitemap(routes) {
            const sitemapRoutes = routes.map((r) => ({ url: r, changefreq: 'weekly', lastmod: new Date().toISOString() }))

            // https://github.com/ekalinin/sitemap.js#generate-a-one-time-sitemap-from-a-list-of-urls
            const stream = new SitemapStream({
                hostname: options.hostname,
                xslUrl: "/sitemap.xsl"
            })
            return streamToPromise(Readable.from(sitemapRoutes).pipe(stream)).then(data =>
                data.toString()
            )
        }

        function createSitemapFile(sitemap, filepath) {
            const dirPath = dirname(filepath)
            mkdirSync(dirPath, { recursive: true })
            writeFileSync(filepath, sitemap)
        }

        const resolver = createResolver(import.meta.url)
        const filePath = resolver.resolve(
            nuxt.options.srcDir,
            'node_modules/.cache/.sitemap/sitemap.xml'
        )

        nuxt.options.nitro.publicAssets = nuxt.options.nitro.publicAssets || []
        nuxt.options.nitro.publicAssets.push({
            baseURL: '/',
            dir: dirname(filePath),
        })

        //const sitemap = await generateSitemap(nav);
        //createSitemapFile(sitemap, filePath)

        nuxt.hook('pages:extend', async (pages) => {
            const sitemapRoutes = getRoutes([...nav, ...pages]);
            const sitemap = await generateSitemap(sitemapRoutes);
            createSitemapFile(sitemap, filePath);
        })

        /* nuxt.hook('pages:extend', async pages => {
            const sitemap = await generateSitemap(pages)
            createSitemapFile(sitemap, filePath)
            // Added output to confirm that the sitemap has been created at the end of the build process
            console.log('Sitemap created')
        }) */
    },
})