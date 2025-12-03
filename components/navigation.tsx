"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  const router = useRouter();
  return (
    <nav>
      <SidebarItem title="Home" onClick={() => {router.push("/")}} onMouseEnter={() => router.prefetch('/')} active={path === "/"}/>
      <SidebarItem title="Pricing" onClick={() => {router.push("/pricing")}} onMouseEnter={() => router.prefetch('/pricing')} active={path === "/pricing"}/>
      <SidebarItem title="Labs" onClick={() => {router.push("/labs")}} onMouseEnter={() => router.prefetch('/labs')} active={path === "/labs"}/>
    </nav>
  )
}

// borrowed from Keystone
function SidebarItem({ title, onClick, onMouseEnter, active }: { title: string, onClick: () => void, onMouseEnter: () => void, active: boolean }) {
  return (
    <button className={"sidebar-item" + (active ? " sidebar-item-active": "")} onClick={onClick} onMouseEnter={onMouseEnter}>{title}</button>
  );
}