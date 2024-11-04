1. Run `docker compose up`
2. Open browser `http://localhost:4001/cubejs-api/v1/meta`


```
{
  "error": "Error: Compile errors:
  TypeError: Cannot read properties of null (reading 'declarations')
      at NodePath._getKey (/cube/node_modules/@babel/traverse/src/path/family.ts:419:25)
      at NodePath.get (/cube/node_modules/@babel/traverse/src/path/family.ts:404:17)
      at call (/cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/transpilers/ImportExportTranspiler.ts:60:41)
      at NodePath._call (/cube/node_modules/@babel/traverse/src/path/context.ts:35:20)
      at NodePath.call (/cube/node_modules/@babel/traverse/src/path/context.ts:20:17)
      at NodePath.visit (/cube/node_modules/@babel/traverse/src/path/context.ts:94:31)
      at TraversalContext.visitQueue (/cube/node_modules/@babel/traverse/src/context.ts:147:16)
      at TraversalContext.visitMultiple (/cube/node_modules/@babel/traverse/src/context.ts:98:17)
      at TraversalContext.visit (/cube/node_modules/@babel/traverse/src/context.ts:177:19)
      at traverseNode (/cube/node_modules/@babel/traverse/src/traverse-node.ts:40:17)
      at NodePath.visit (/cube/node_modules/@babel/traverse/src/path/context.ts:101:33)
      at TraversalContext.visitQueue (/cube/node_modules/@babel/traverse/src/context.ts:147:16)
      at TraversalContext.visitSingle (/cube/node_modules/@babel/traverse/src/context.ts:108:19)
      at TraversalContext.visit (/cube/node_modules/@babel/traverse/src/context.ts:179:19)
      at traverseNode (/cube/node_modules/@babel/traverse/src/traverse-node.ts:40:17)
      at traverse (/cube/node_modules/@babel/traverse/src/index.ts:82:15)
      at /cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:154:22
      at Array.forEach (\u003Canonymous\u003E)
      at DataSchemaCompiler.transpileJsFile (/cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:152:24)
      at DataSchemaCompiler.transpileFile (/cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:135:19)
      at /cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:91:53
      at Array.map (\u003Canonymous\u003E)
  Required import for shared_utils/utils.js is not found",
  "stack": "Error: Compile errors:
  TypeError: Cannot read properties of null (reading 'declarations')
      at NodePath._getKey (/cube/node_modules/@babel/traverse/src/path/family.ts:419:25)
      at NodePath.get (/cube/node_modules/@babel/traverse/src/path/family.ts:404:17)
      at call (/cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/transpilers/ImportExportTranspiler.ts:60:41)
      at NodePath._call (/cube/node_modules/@babel/traverse/src/path/context.ts:35:20)
      at NodePath.call (/cube/node_modules/@babel/traverse/src/path/context.ts:20:17)
      at NodePath.visit (/cube/node_modules/@babel/traverse/src/path/context.ts:94:31)
      at TraversalContext.visitQueue (/cube/node_modules/@babel/traverse/src/context.ts:147:16)
      at TraversalContext.visitMultiple (/cube/node_modules/@babel/traverse/src/context.ts:98:17)
      at TraversalContext.visit (/cube/node_modules/@babel/traverse/src/context.ts:177:19)
      at traverseNode (/cube/node_modules/@babel/traverse/src/traverse-node.ts:40:17)
      at NodePath.visit (/cube/node_modules/@babel/traverse/src/path/context.ts:101:33)
      at TraversalContext.visitQueue (/cube/node_modules/@babel/traverse/src/context.ts:147:16)
      at TraversalContext.visitSingle (/cube/node_modules/@babel/traverse/src/context.ts:108:19)
      at TraversalContext.visit (/cube/node_modules/@babel/traverse/src/context.ts:179:19)
      at traverseNode (/cube/node_modules/@babel/traverse/src/traverse-node.ts:40:17)
      at traverse (/cube/node_modules/@babel/traverse/src/index.ts:82:15)
      at /cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:154:22
      at Array.forEach (\u003Canonymous\u003E)
      at DataSchemaCompiler.transpileJsFile (/cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:152:24)
      at DataSchemaCompiler.transpileFile (/cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:135:19)
      at /cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:91:53
      at Array.map (\u003Canonymous\u003E)
  Required import for shared_utils/utils.js is not found
      at ErrorReporter.throwIfAny (/cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/ErrorReporter.ts:133:13)
      at DataSchemaCompiler.throwIfAnyErrors (/cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:212:23)
      at /cube/node_modules/@cubejs-backend/schema-compiler/src/compiler/DataSchemaCompiler.js:107:16
      at CompilerApi.compileSchema (/cube/node_modules/@cubejs-backend/server-core/src/core/CompilerApi.js:80:25)
      at CompilerApi.metaConfig (/cube/node_modules/@cubejs-backend/server-core/src/core/CompilerApi.js:495:23)
      at ApiGateway.meta (/cube/node_modules/@cubejs-backend/api-gateway/src/gateway.ts:554:26)
      at /cube/node_modules/@cubejs-backend/api-gateway/src/gateway.ts:368:11",
  "requestId": "906801a0-8d2c-4625-aefb-fccfbb61de3b-span-1",
  "plainError": ""
}
```