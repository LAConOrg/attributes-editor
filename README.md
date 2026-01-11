# Attributes editor

Allows people to paste in the attributes YAML from Authentik, edit it using
an HTML form, and then paste the YAML back in. This means they don't need to
worry about proper escaping and quoting in the YAML.

## Development

`pnpm dev`

## Deployment

Changes to the `main` branch are built using a GitHub action and hosted on
https://laconorg.github.io/attributes-editor/
