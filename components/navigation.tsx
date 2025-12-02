"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  const router = useRouter();
  return (
    <nav className="[&>button]:mr-4 [&>button:active]:bg-(--lesser-background)">
      <SidebarItem title="Home" onClick={() => {router.push("/")}} active={path === "/"}/>
      <SidebarItem title="Pricing" onClick={() => {router.push("/pricing")}} active={path === "/pricing"}/>
      <SidebarItem title="Labs" onClick={() => {router.push("/labs")}} active={path === "/labs"}/>
    </nav>
  )
}

// borrowed from Keystone
function SidebarItem({ title, onClick, active }: { title: string, onClick: () => void, active: boolean }) {
  return (
    <button className={"sidebar-item" + (active ? " sidebar-item-active": "")} onClick={onClick}>{title}</button>
  );
}