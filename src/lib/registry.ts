/** The GitHub source-registry address the shadcn CLI installs from. */
export const REGISTRY = 'dyloAI/dylo-design'

export const REPO_URL = `https://github.com/${REGISTRY}`

export function install(item: string) {
  return `pnpm dlx shadcn@latest add ${REGISTRY}/${item}`
}
