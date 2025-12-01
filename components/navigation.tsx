export default function Navigation() {
  return (
    <nav className="[&>button]:cursor-pointer [&>button]:px-3 [&>button]:py-1 [&>button]:mr-4">
      <button className="bg-(--lesser-background)"><a>Home</a></button>
      <button><a>Pricing</a></button>
      <button><a>Information</a></button>
    </nav>
  )
}