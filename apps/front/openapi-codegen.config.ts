import {
  generateSchemaTypes,
  generateReactQueryComponents,
} from '@openapi-codegen/typescript';
import { defineConfig } from '@openapi-codegen/cli';
export default defineConfig({
  api: {
    from: {
      source: 'url',
      url: 'http://127.0.0.1:3001/swagger.yaml',
    },
    outputDir: './src/shared/api',
    to: async (context) => {
      const filenamePrefix = 'api';
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateReactQueryComponents(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
