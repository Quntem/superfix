import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex flex-row gap-3 items-center">
      <Logo/>
      <div className="flex flex-row gap-2 items-end">
        <p className="font-bold text-3xl">Superfix</p>
        <p className="mb-0.5 text-sm">by <a href="https://quntemlabs.org/">Quntem Labs</a></p>
      </div>
    </header>
  )
}