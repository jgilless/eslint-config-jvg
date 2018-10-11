# eslint-config-jvg

ESLint rules for personal projects.

## Getting Started

```
npm install --save-dev eslint-config-jvg
```

Note: This expects you to have eslint already installed.

Add to your eslint config:

```json
{
    "extends": ["jvg"],
    "rules": {
        // Your rule overrides here
    }
}
```

This already extends `"eslint":"recommended"`, remaining ones are just things that I find annoying and personal opinions.

There's an extra config in here that I did not expose to the default, React! You can add `"jvg/react"` to your `"extends"` array as well to get my react preferences. You could also use it standalone.

```json
{
    "extends": ["jvg/react"]
}
```

You can read more here: [https://eslint.org/docs/user-guide/configuring#extending-configuration-files](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)

## Testing

You can validate most things with `npm run test`, however a few things aren't checked. In some rules you have the ability to set a second parameter of an array value for that rule, something like:

```json
"curly": ["error", "<option>"]
```

We will validate the first index, but the option is not currently validated. There are some that are objects, some that are strings, etc.
