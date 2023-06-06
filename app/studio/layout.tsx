export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute left-0 top-0 h-screen w-screen">{children}</div>
  )
}
