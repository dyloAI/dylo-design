# Releasing theme / brand changes

Product apps do not pull from this repo automatically. After a change that
affects tokens, the Catalyst remap, fonts, brand-assets, or agent-rules:

1. Land the change on `main`.
2. Tag a semver release: `git tag vX.Y.Z && git push origin vX.Y.Z`.
3. In **dylo-starter** and each template under `dylo-templates/*`, re-install
   with the pin (adjust paths if `components.json` targets differ):

   ```bash
   pnpm dlx shadcn@latest add dyloAI/dylo-design/theme#vX.Y.Z
   pnpm dlx shadcn@latest add dyloAI/dylo-design/catalyst-theme#vX.Y.Z
   ```

4. Open PRs in those template repos. Run each template’s typecheck / lint.
5. **Do not** open sync PRs against already-cloned client apps unless the client
   asks.

## Product UI (Catalyst, auth, shell)

Those files are owned by **dylo-starter**, not this repo. After changing them:

1. Land in `dylo-starter`.
2. From **dylo-starter**, run `node scripts/sync-from-starter.mjs <name>` for
   each sibling template (see [TEMPLATE.md](https://github.com/dyloAI/dylo-starter/blob/main/TEMPLATE.md)).
3. Open PRs in the template repos.

## What not to release as product UI

Foundry `auth-kit` and `app-shell` are docs / marketing demos. Do not treat a
registry bump of those items as a template upgrade.
