
import * as React from "react";
export function Select({ value, onValueChange, children }: any){ return <div data-value={value}>{children}</div>; }
export function SelectTrigger({ children, className }: any){ return <button className={(className?className+' ':"")+"h-10 px-3 border rounded-md w-full text-left"}>{children}</button>; }
export function SelectValue({ placeholder }: any){ return <span>{placeholder}</span>; }
export function SelectContent({ children }: any){ return <div className="mt-2 p-2 border rounded-md bg-white">{children}</div>; }
export function SelectItem({ value, children }: any){ return <div data-value={value} className="px-2 py-1 hover:bg-neutral-100 rounded">{children}</div>; }
