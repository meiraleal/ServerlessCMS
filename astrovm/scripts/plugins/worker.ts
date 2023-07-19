// This plugin lets you use web worker scripts the same way you do with Webpack's worker-loader.
// Based on https://github.com/endreymarcell/esbuild-plugin-webworker/
import path from 'path';
import esbuild from 'esbuild';

const { join, dirname, basename } = path;
export const WEB_WORKER = () => {
  /**
   * @type {import('esbuild').Plugin}
   */
  return {
    name: 'worker',
    setup(build) {
      build.onResolve({ filter: /^worker\:/ }, (args) => {
        // Feel free to remove this logline once you verify that the plugin works for your setup
        console.debug(`The web worker plugin matched an import to ${args.path} from ${args.importer}`);
        return {
          path: args.path.replace(/^worker\:/, ''),
          namespace: 'worker',
          pluginData: { importer: args.importer },
        };
      });
      build.onLoad({ filter: /.*/, namespace: 'worker' }, async (args) => {
        const {
          path: importPath,
          pluginData: { importer },
        } = args;

        const workerWithFullPath = join(dirname(importer), importPath);
        const workerFileName = basename(workerWithFullPath);

        // You only need this for TypeScript
        // because the import will refer to a .ts file
        // but the web worker will need to point to a .js file
        const outFileName = workerFileName.replace(/\.ts$/, '.worker.js');

        // This one depends on your file structure
        const outFileWithRelativePath = join('dist', 'play', 'workers', outFileName);

        try {
          await esbuild.build({
            target: ['es2018'],

            entryPoints: [workerWithFullPath],
            outfile: outFileWithRelativePath,
            loader: { '.ttf': 'file' },

            sourcemap: true,
            assetNames: '[name]',
            // FIX: Firefox and Safari do not support Module workers
            format: 'iife',

            minify: true,
            bundle: true,

            define: {
              global: 'globalThis',
            },
          });

          return {
            contents: `
// This file is generated by esbuild to expose the worker script as a class, like Webpack's worker-loader
export default "/play/workers/${outFileName}"`,
          };
        } catch (e) {
          console.error('Could not build worker script:', e);
        }
      });
    },
  };
};