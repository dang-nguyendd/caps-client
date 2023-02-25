{
  "root": true,
  "extends": [
    "next/core-web-vitals",
    "next",
    "prettier"
  ],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": [
      "error",
      {
        "htmlWhitespaceSensitivity": "css",
        "semi": true,
        "endOfLine": "auto",
        "singleQuote": false
      }
    ]
  }
}