# Component usage hierarchy

When building UI, prefer components in this order:

1. **Design system** (`@/design-system/*`) — always check here first
2. **Component library** — use when the design system has no suitable component for the use case (e.g. a variant or size the design system wrapper doesn't expose)
3. **Plain HTML element** — only when neither of the above fits; style to match the design system as closely as possible
