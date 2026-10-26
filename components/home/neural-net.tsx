const LAYERS = [3, 5, 5, 2]
const WIDTH = 400
const HEIGHT = 280

const nodes = LAYERS.map((count, layer) => {
  const x = 40 + (layer * (WIDTH - 80)) / (LAYERS.length - 1)
  const gap = HEIGHT / (count + 1)
  return Array.from({ length: count }, (_, i) => ({ x, y: gap * (i + 1), layer, i }))
})

const edges = nodes.slice(0, -1).flatMap((layer, l) =>
  layer.flatMap((from) => nodes[l + 1].map((to) => ({ from, to, key: `${l}-${from.i}-${to.i}` }))),
)

// A few highlighted paths give a sense of signal moving through the network.
const activePaths = new Set(['0-0-0', '1-0-2', '2-2-0', '0-1-3', '1-3-1', '2-1-1', '0-2-4', '1-4-3', '2-3-0'])

export function NeuralNet() {
  return (
    <div className="float relative overflow-hidden rounded-2xl border border-border bg-card/70 p-4 shadow-2xl shadow-primary/5 sm:p-5">
      <div className="flex items-center justify-between gap-3 border-b border-border pb-3 font-mono text-[11px] text-muted-foreground">
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-primary node-pulse" aria-hidden="true" />
          {'model.fit(X, y)'}
        </span>
        <span className="hidden sm:inline">learning in progress</span>
      </div>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="mt-3 h-auto w-full"
        role="img"
        aria-label="Illustration of a small neural network with four layers"
      >
        {edges.map(({ from, to, key }) => (
          <line
            key={key}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="var(--primary)"
            strokeOpacity={activePaths.has(key) ? 0.75 : 0.12}
            strokeWidth={activePaths.has(key) ? 1.4 : 0.8}
            className={activePaths.has(key) ? 'signal-flow' : undefined}
          />
        ))}
        {nodes.flat().map((node) => {
          const violet = (node.layer + node.i) % 3 === 0 && node.layer < LAYERS.length - 1
          return (
            <g key={`${node.layer}-${node.i}`}>
              <circle cx={node.x} cy={node.y} r={11} fill="var(--background)" stroke="var(--primary)" strokeOpacity={0.45} />
              <circle
                cx={node.x}
                cy={node.y}
                r={4.5}
                fill={violet ? 'var(--violet)' : 'var(--primary)'}
                className="node-pulse"
                style={{ ['--delay' as string]: `${(node.layer * 5 + node.i) * 180}ms` }}
              />
            </g>
          )
        })}
      </svg>
      <ul className="mt-3 grid grid-cols-3 gap-2 border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
        {['Python', 'SQL', 'Scikit-learn'].map((label) => (
          <li key={label} className="truncate rounded-md bg-secondary/70 px-2 py-1.5 text-center">
            {label}
          </li>
        ))}
      </ul>
    </div>
  )
}
