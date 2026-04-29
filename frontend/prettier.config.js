export default {
  endOfLine: 'lf',
  printWidth: 100,
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: ['^react$', '<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
}
