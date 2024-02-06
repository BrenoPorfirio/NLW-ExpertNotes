export function NoteCard() {
    return (
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
            <span className="text-sm font-medium text-slate-300">
                há 8 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse itaque velit at tempore quam excepturi impedit, non adipisci, quasi totam, accusamus ad repudiandae. Necessitatibus itaque tenetur ipsum architecto recusandae?
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
        </div>
    )
}