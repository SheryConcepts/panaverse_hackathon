export default function({ children }: { children: React.ReactNode }) {
  return <div className="z-10 absolute top-0 left-0 w-screen min-screen">{children}</div>
}
