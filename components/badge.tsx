export default function Badge({ Icon, Text }: { Icon: React.JSX.ElementType, Text: string }) {
  return (
    <div className="flex flex-row items-center gap-1 px-4 py-2.5 bg-(--lesser-background-50) w-fit rounded-full text-sm">
      <Icon size="16"/>
      {Text}
    </div>
  )
}