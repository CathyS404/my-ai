import { Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    name: "免费版",
    price: "¥0",
    period: "/月",
    description: "适合个人用户探索和体验",
    features: [
      "每月 100 次自动化执行",
      "5 个工作流模板",
      "基础数据分析",
      "社区支持",
    ],
    cta: "免费开始",
    highlighted: false,
  },
  {
    name: "专业版",
    price: "¥99",
    period: "/月",
    description: "适合小型团队和高级用户",
    features: [
      "每月 1,000 次自动化执行",
      "无限工作流模板",
      "高级数据分析",
      "优先邮件支持",
      "API 访问权限",
      "自定义集成",
    ],
    cta: "升级专业版",
    highlighted: true,
  },
  {
    name: "团队版",
    price: "¥299",
    period: "/用户/月",
    description: "适合快速发展的团队协作",
    features: [
      "每月无限自动化执行",
      "团队协作功能",
      "高级权限管理",
      "专属客户经理",
      "SLA 保障",
      "私有化部署选项",
    ],
    cta: "联系销售",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
              新
            </span>
            <span>全新按量计费模式上线</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            选择适合您的方案
          </h2>
          <p className="mt-4 text-lg text-muted">
            立即免费开始，随时升级获取更多功能
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl border p-6 ${
                tier.highlighted
                  ? "border-primary bg-card"
                  : "border-border bg-card"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    推荐
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">{tier.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                  <span className="ml-1 text-sm text-muted">{tier.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{tier.description}</p>
              </div>
              
              <ul className="mb-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`h-5 w-5 flex-shrink-0 ${tier.highlighted ? "text-primary" : "text-muted"}`} />
                    <span className="text-sm text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                href="#"
                className={`block w-full rounded-lg py-3 text-center text-sm font-medium transition-colors ${
                  tier.highlighted
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "border border-border bg-transparent text-foreground hover:bg-secondary"
                }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mx-auto mt-12 max-w-5xl rounded-xl border border-border bg-card p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">企业版</h3>
              <p className="mt-1 text-sm text-muted">
                为大型企业提供定制化解决方案，满足更高的安全和合规要求
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {["SAML SSO 单点登录", "专属技术支持", "自定义 SLA", "培训服务"].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="#"
              className="flex-shrink-0 rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors text-center"
            >
              联系我们
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
