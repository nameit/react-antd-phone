module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "parser": "babel-eslint",
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "linebreak-style": [0],
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/react-in-jsx-scope": 2,
        "comma-dangle": [2, "never"],
        "class-methods-use-this": 0,
        "no-console": "off",
    },
    "extends": ["airbnb-base"],
    "plugins": [
        "react"
    ]
};