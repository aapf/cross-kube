// eslint-disable-next-line
const micromatch = require('micromatch')

module.exports = {
  'src/**/*.ts': (files) => {
    const match = micromatch.not(files, ['**/*.config.ts'])
    return [
      `prettier --write ${match.join(' ')}`,
      `tslint ${match.join(' ')}`
    ]
  }
}
