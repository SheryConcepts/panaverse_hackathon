export default function({ children }: { children: React.ReactNode }) {
  return <div className="absolute top-0 left-0 w-screen h-screen">{children}</div>
}
