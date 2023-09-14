// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import("prettier").Config} */
module.exports = {
  arrowParens: "avoid",
  trailingComma: "none",
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
};
