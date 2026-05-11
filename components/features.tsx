import { Zap, Shield, BarChart3, Workflow, Globe, Clock } from "lucide-react";

const features = [
  {
    name: "智能自动化",
    description: "AI 驱动的工作流引擎，自动识别重复任务并提供优化建议，让您的工作更高效。",
    icon: Zap,
  },
  {
    name: "企业级安全",
    description: "端到端加密、SOC 2 合规认证，确保您的数据安全无忧，满足企业安全标准。",
    icon: Shield,
  },
  {
    name: "实时分析",
    description: "直观的数据仪表板，实时追踪工作流性能，帮助您做出数据驱动的决策。",
    icon: BarChart3,
  },
  {
    name: "可视化编排",
    description: "拖拽式工作流设计器，无需编码即可创建复杂的自动化流程，降低使用门槛。",
    icon: Workflow,
  },
  {
    name: "多平台集成",
    description: "支持 200+ 应用集成，包括 Slack、钉钉、企业微信等主流办公软件。",
    icon: Globe,
  },
  {
    name: "定时调度",
    description: "灵活的任务调度系统，支持 Cron 表达式，让自动化任务按时准确执行。",
    icon: Clock,
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            强大功能，简单易用
          </h2>
          <p className="mt-4 text-lg text-muted">
            一切您需要的功能，帮助团队实现工作流程自动化
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="group relative rounded-xl border border-border bg-card p-6 hover:border-primary/50 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
