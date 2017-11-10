module.exports = {
    "extends": [
        "airbnb",
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    "plugins": [
        "react",
        "jsx-a11y"
    ],
    rules: {
        "comma-dangle": ["error", "never"],
        "indent": ["error", 4],
        "jsx-a11y/label-has-for": "off",
        "jsx-a11y/href-no-hash": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/prop-types": "off",
    },
    "env": {
        "browser": true,
    },
    "globals": {
        "suite": true,
        "benchmark": true,
    }
};

