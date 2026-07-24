export function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center pt-20">
      <div className="flex flex-col items-center gap-4">
        <div className="h-9 w-9 rounded-full border-2 border-border border-t-orange-500 animate-spin" />
        <span className="text-xs uppercase tracking-[0.2em] text-gray">Castillo</span>
      </div>
    </div>
  )
}
