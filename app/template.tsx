// Templates remount on every navigation, so this CSS entrance replays as a page transition
// without depending on client-side JavaScript.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>
}
