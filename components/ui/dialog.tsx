
import * as React from "react";
export function Dialog({children}:{children:React.ReactNode}){ return <div>{children}</div>; }
export function DialogTrigger({asChild,children}:any){ return <>{children}</>; }
export function DialogContent({className,children}:any){ return <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"><div className={(className?className+' ':"")+"bg-white rounded-2xl p-4 w-[90%] max-w-[720px]"}>{children}</div></div>; }
export function DialogHeader({children}:any){ return <div className="mb-2">{children}</div>; }
export function DialogTitle({children}:any){ return <h3 className="text-lg font-semibold">{children}</h3>; }
export function DialogDescription({children}:any){ return <p className="text-sm text-neutral-500">{children}</p>; }
