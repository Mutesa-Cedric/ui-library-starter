import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  failOnWarn: false,
  rollup: {
    emitCJS: true,
    dts: {
      compilerOptions: {
        composite: false,
        skipLibCheck: true,
      },
    },
  },
})
