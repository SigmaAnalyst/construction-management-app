
import * as React from "react";
import clsx from "clsx";
export function Card(p: React.HTMLAttributes<HTMLDivElement>) { return <div {...p} className={clsx("bg-white border border-neutral-200", p.className)} />; }
export function CardHeader(p: React.HTMLAttributes<HTMLDivElement>) { return <div {...p} className={clsx("p-4 border-b border-neutral-200", p.className)} />; }
export function CardTitle(p: React.HTMLAttributes<HTMLHeadingElement>) { return <h3 {...p} className={clsx("text-lg font-semibold", p.className)} />; }
export function CardDescription(p: React.HTMLAttributes<HTMLParagraphElement>) { return <p {...p} className={clsx("text-sm text-neutral-500", p.className)} />; }
export function CardContent(p: React.HTMLAttributes<HTMLDivElement>) { return <div {...p} className={clsx("p-4", p.className)} />; }
