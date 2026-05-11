import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                新功能
              </span>
              <span>全新 AI 工作流引擎发布</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="block">智能工作流</span>
            <span className="block mt-2 bg-gradient-to-r from-primary to-cyan-500 bg-clip-text text-transparent">
              自动化平台
            </span>
          </h1>
          
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
            使用 AI 驱动的自动化工具，帮助您的团队提升效率，简化复杂的工作流程。
            <span className="text-foreground"> 让重复性工作交给智能助手处理。</span>
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#"
              className="w-full sm:w-auto rounded-lg bg-foreground px-8 py-3 text-base font-medium text-background hover:bg-foreground/90 transition-colors"
            >
              免费开始
            </Link>
            <Link
              href="#"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-3 text-base font-medium text-foreground hover:bg-secondary transition-colors"
            >
              观看演示
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <p className="mt-6 text-sm text-muted-foreground">
            无需信用卡 · 免费额度 · 随时取消
          </p>
        </div>
        
        <div className="mt-16 lg:mt-24">
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
            <div className="rounded-xl border border-border bg-card p-2 shadow-2xl">
              <div className="rounded-lg bg-secondary/50 p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="rounded-lg bg-card border border-border p-4">
                    <div className="h-2 w-16 bg-primary/30 rounded mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-border rounded" />
                      <div className="h-2 w-3/4 bg-border rounded" />
                    </div>
                  </div>
                  <div className="rounded-lg bg-card border border-border p-4">
                    <div className="h-2 w-20 bg-primary/30 rounded mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-border rounded" />
                      <div className="h-2 w-1/2 bg-border rounded" />
                    </div>
                  </div>
                  <div className="rounded-lg bg-card border border-border p-4">
                    <div className="h-2 w-14 bg-primary/30 rounded mb-3" />
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-border rounded" />
                      <div className="h-2 w-2/3 bg-border rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
