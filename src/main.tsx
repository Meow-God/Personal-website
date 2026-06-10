import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import "./index.css";

type SectionId = "about" | "experience" | "projects" | "life" | "contact";

const profile = {
  name: "奚雨虹",
  role: "品牌-产品经理",
  tagline: "把用户洞察，长成有商业结果的产品。",
  mood: "Bloom with Curiosity.",
  about:
    "我是一名面向产品经理方向发展的品牌/产品型候选人，经历覆盖宠物食品、消费品品牌、电商渠道、产品上新、达人媒介和数据复盘。我习惯从用户需求、渠道场景和商业化价值出发，把模糊问题拆成清晰动作，并用 Owner 的方式推动结果落地。",
  traits: ["自驱力", "Learning Agility", "Ownership", "开放心态", "持续迭代", "Vibe Coding 学习能力"],
  stats: [
    { value: "4倍", title: "品牌 GMV 年度增长", note: "酥醒从 2024 年约 2000 万增长至 2025 年 8000 万+" },
    { value: "8000万+", title: "全年 GMV 达成", note: "参与推动酥醒品牌完成年度增长结果" },
    { value: "11个 SKU", title: "产品全链路落地", note: "4 款产品从创意、协同到上市执行" },
    { value: "7+ 部门", title: "跨部门协作", note: "研发、品控、设计、供应链、媒介、渠道、销售等" },
    { value: "70%+", title: "效率提升", note: "自建投放/复盘数据模型，减少重复整理成本" }
  ],
  experience: [
    {
      company: "上海简谟生物技术有限公司",
      role: "助理品牌经理｜产品经理方向",
      period: "2025.02 - 2026.05",
      industry: "宠物食品 / 消费品品牌 / 电商渠道",
      summary:
        "围绕酥醒品牌承担产品经理与媒介 PR 双方向工作，负责产品创意、跨部门推进、上市节点协同、达人投放与数据复盘。",
      bullets: [
        "负责鸡肉派新规格、奶皮酥冻干、鱼子酱餐盒、奶酱等 4 款产品，共 11 个 SKU 的全链路落地。",
        "基于受众画像、渠道搭赠价值和品类心智缺口，参与推动产品商业化竞争力提升。",
        "在设计产能紧张、品牌优先级有限的情况下，协调 7+ 部门推进产品按期按质入仓上新。",
        "独立完成小红书/抖音达人媒介策略、产品 BF 提炼、执行验收与复盘，关注搜索价值和转化价值。",
        "自建媒介数据模型和复盘表，将分散数据转为可追踪判断依据，工作效率提升约 70%。"
      ],
      labels: ["产品定义", "SKU 上新", "渠道价值感", "媒介投放", "数据复盘"]
    },
    {
      company: "上海袋米健康科技 / 明臣广告 / 表情光明",
      role: "广告营销｜内容运营｜实习经历",
      period: "2022.06 - 2024.06",
      industry: "广告营销 / 内容运营 / 品牌 Campaign",
      summary:
        "参与品牌 Campaign Research、内容执行、达人沟通和项目复盘，建立了对品牌内容从策略到落地的基本理解。",
      bullets: [
        "参与竞品研究、用户观察、社媒内容和渠道洞察，沉淀可复用分析框架。",
        "协同执行内容排期、达人沟通、审核发布和数据整理，理解传播项目的节奏管理。",
        "积累客户沟通和跨角色协同经验，为后续产品与品牌工作打下基础。"
      ],
      labels: ["Campaign Research", "内容运营", "KOL 沟通", "品牌传播"]
    }
  ],
  projects: [
    {
      type: "Growth",
      icon: "✦",
      title: "4倍品牌 GMV 增长",
      text: "围绕产品价值感、渠道搭赠和种草效率，参与推动酥醒从 2000 万到 8000 万+ 的年度增长。",
      tags: ["GMV", "品牌增长", "商业化"]
    },
    {
      type: "Product",
      icon: "◐",
      title: "11个 SKU 上新落地",
      text: "从用户画像、规格策略、卖点提炼到研发品控、设计供应链和上市节点，推进产品完整闭环。",
      tags: ["SKU", "产品定义", "上市管理"]
    },
    {
      type: "Media",
      icon: "▶",
      title: "达人媒介与搜索转化",
      text: "跑通小红书与抖音双平台投放链路，不把种草停留在曝光层，而是深挖搜索和转化价值。",
      tags: ["达人投放", "PR", "复盘"]
    },
    {
      type: "Data",
      icon: "⌁",
      title: "自建数据模型",
      text: "搭建媒介投放与复盘数据模型，将分散信息转化为可追踪的判断依据，提升约 70% 工作效率。",
      tags: ["数据模型", "效率提升", "AI Workflow"]
    },
    {
      type: "Research",
      icon: "↗",
      title: "Campaign Research",
      text: "在广告营销与内容运营项目中积累竞品、用户、社媒内容和渠道研究经验。",
      tags: ["洞察", "内容运营", "品牌传播"]
    }
  ],
  skills: [
    { title: "产品能力", icon: "◎", items: ["用户洞察", "竞品分析", "产品定义", "SKU 策略", "卖点提炼", "上市节奏"] },
    { title: "品牌营销", icon: "✶", items: ["品牌 Campaign", "内容运营", "达人媒介", "小红书/抖音", "KOL 沟通", "PR 复盘"] },
    { title: "数据分析", icon: "⌁", items: ["GMV 追踪", "投放复盘", "数据看板", "Excel / PPT", "飞书多维表格", "渠道分析"] },
    { title: "AI 工作流", icon: "◌", items: ["Vibe Coding", "ChatGPT", "Claude Code", "AI 辅助分析", "AI 辅助网页搭建"] },
    { title: "设计工具", icon: "◇", items: ["Canva", "PS/AE", "SolidWorks", "Nomad", "审美判断", "视觉 Brief"] },
    { title: "语言证书", icon: "□", items: ["CET4", "CET6", "全国计算机二级", "韩语 TOPIK 4"] }
  ],
  life: [
    { mark: "花", title: "审美与观察", text: "喜欢花、摄影、旅行和有质感的视觉表达，关注颜色、材质与情绪。" },
    { mark: "黑胶", title: "音乐与黑胶", text: "喜欢轻复古杂志感和黑胶唱片，把克制但有记忆点的审美放进作品表达。" },
    { mark: "宠物", title: "宠物与消费品", text: "对宠物食品、产品包装、渠道场景和真实用户反馈保持长期兴趣。" },
    { mark: "Code", title: "Vibe Coding", text: "通过自主学习搭建个人网页，把 AI 当作新的思考伙伴和效率工具。" }
  ],
  contact: [
    { label: "邮箱 Email", value: "18501728357@163.com", href: "mailto:18501728357@163.com" },
    { label: "电话 Phone", value: "18501728357", href: "tel:18501728357" },
    { label: "GitHub", value: "github.com/yourname", href: "#" },
    { label: "作品链接 Portfolio", value: "coming soon", href: "#" }
  ]
};

const navItems: { id: SectionId; label: string }[] = [
  { id: "about", label: "关于我" },
  { id: "experience", label: "经历" },
  { id: "projects", label: "项目" },
  { id: "life", label: "生活" },
  { id: "contact", label: "联系我" }
];

const lifePhotoGroups = [
  { category: "宠物", title: "Pet Companions", start: 1, end: 9 },
  { category: "澳门", title: "Macao Notes", start: 10, end: 12 },
  { category: "澳洲", title: "Australia Field Record", start: 13, end: 18 },
  { category: "韩国", title: "Seoul Frames", start: 19, end: 25 },
  { category: "马来", title: "Malaysia Light", start: 26, end: 30 },
  { category: "青甘", title: "Northwest Road", start: 31, end: 33 },
  { category: "日本", title: "Japan Wandering", start: 34, end: 40 },
  { category: "三亚", title: "Sanya Blue", start: 41, end: 43 },
  { category: "演唱会", title: "Live Music", start: 44, end: 45 }
];

const lifePhotos = lifePhotoGroups.flatMap((group) =>
  Array.from({ length: group.end - group.start + 1 }, (_, offset) => {
    const index = group.start + offset;
    const displayIndex = String(index).padStart(2, "0");
    return {
      src: `/images/life/life-${displayIndex}-${group.category}.jpg`,
      title: `${group.title} ${offset + 1}`,
      category: group.category,
      note: `${group.category} · B-Side Track ${displayIndex}`
    };
  })
);

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ label, title, note }: { label: string; title: string; note?: string }) {
  return (
    <div className="section-title">
      <span>{label}</span>
      <div>
        <h2>{title}</h2>
        {note ? <p>{note}</p> : null}
      </div>
    </div>
  );
}

function Vinyl({ size = "large" }: { size?: "large" | "medium" | "small" }) {
  return (
    <motion.div
      className={`vinyl vinyl-${size}`}
      animate={{ rotate: 360 }}
      transition={{ duration: size === "large" ? 34 : 24, repeat: Infinity, ease: "linear" }}
      aria-hidden="true"
    >
      <span>BLOOM</span>
    </motion.div>
  );
}

function IrisLine({ className = "" }: { className?: string }) {
  return (
    <motion.svg className={className} viewBox="0 0 260 360" fill="none" aria-hidden="true">
      <motion.path
        d="M129 333C132 279 132 227 126 179M126 179C105 151 88 124 91 93C94 63 119 48 134 70C148 43 184 48 184 85C184 116 158 147 126 179ZM124 177C90 164 54 139 52 103C51 72 80 62 98 84M129 179C165 166 205 139 208 101C211 70 182 59 166 83M126 179C115 146 123 111 139 92C154 74 180 84 170 114C161 139 146 159 126 179ZM126 179C132 142 123 106 105 88C87 70 62 85 75 115C86 141 104 161 126 179Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.4, delay: 0.45, ease: "easeInOut" }}
      />
    </motion.svg>
  );
}

function IrisBloom({ className = "" }: { className?: string }) {
  return (
    <div className={`iris-print ${className}`} aria-hidden="true">
      <IrisLine />
      <span className="iris-haze" />
    </div>
  );
}

function Tape({ className = "" }: { className?: string }) {
  return <span className={`tape ${className}`} aria-hidden="true" />;
}

function WaveLine() {
  return (
    <svg className="wave-line" viewBox="0 0 520 42" fill="none" aria-hidden="true">
      <path d="M0 21H118C128 21 131 8 140 8C150 8 151 34 160 34C170 34 172 14 184 14C194 14 196 26 206 26H520" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function SoundWave() {
  return (
    <svg className="sound-wave" viewBox="0 0 260 40" fill="none" aria-hidden="true">
      {Array.from({ length: 34 }).map((_, index) => {
        const height = 6 + ((index * 13) % 24);
        const x = 8 + index * 7;
        return <path key={index} d={`M${x} ${20 - height / 2}V${20 + height / 2}`} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />;
      })}
    </svg>
  );
}

function PlayButton({ label = "播放我的故事" }: { label?: string }) {
  return (
    <a href="#about" className="play-button">
      <span>▶</span>
      {label}
    </a>
  );
}

function IntroOverlay() {
  const shouldShow =
    typeof window !== "undefined" &&
    (!window.location.hash || window.location.hash === "#hero") &&
    window.sessionStorage.getItem("bloom-intro-seen") !== "yes";
  const [visible, setVisible] = useState(shouldShow);

  useEffect(() => {
    if (!visible) return;
    window.sessionStorage.setItem("bloom-intro-seen", "yes");
    const timer = window.setTimeout(() => setVisible(false), 1800);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className="intro-record">
        <Vinyl size="medium" />
        <IrisLine className="intro-iris" />
      </div>
      <p>XI YUHONG / Side A</p>
    </div>
  );
}

function Decorations() {
  return (
    <>
      <div className="soft-orbit orbit-a" aria-hidden="true" />
      <div className="soft-orbit orbit-b" aria-hidden="true" />
      <div className="paper-grain" aria-hidden="true" />
    </>
  );
}

function Navbar() {
  const [active, setActive] = useState<SectionId>("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observers = navItems.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(id),
        { rootMargin: "-38% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <nav className="site-nav">
      <a href="#hero" className="nav-brand">
        <span>✶</span>
        奚雨虹
      </a>
      <button
        type="button"
        className={`nav-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="打开导航菜单"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
      </button>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.id} href={`#${item.id}`} className={active === item.id ? "active" : ""} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero bloom-record-hero">
      <Decorations />
      <div className="hero-watercolor hero-watercolor-left" aria-hidden="true" />
      <div className="hero-watercolor hero-watercolor-right" aria-hidden="true" />
      <div className="hero-brand-top">奚雨虹</div>
      <div className="hero-mini-record" aria-hidden="true"><Vinyl size="small" /></div>
      <div className="hero-stage">
        <motion.div
          className="hero-record-wrap"
          initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          <Vinyl />
          <div className="record-center-label">
            <small>XI</small>
            <strong>YUHONG</strong>
            <span>Side A</span>
          </div>
          <div className="record-copy">Bloom with Curiosity.</div>
          <IrisLine className="record-iris-line" />
          <Tape className="record-tape" />
          <div className="tonearm" />
        </motion.div>
        <div className="hero-flower-print" aria-hidden="true">
          <IrisLine />
          <span />
        </div>
        <div className="left-note" aria-hidden="true">
          <Tape />
          <span>Make<br />things<br />bloom.</span>
          <b>BLOOM</b>
        </div>
      </div>
      <div className="hero-content">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          Product / Brand / Growth
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}>
          {profile.name}
        </motion.h1>
        <motion.h2 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          {profile.role}
        </motion.h2>
        <motion.p className="hero-tagline" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.28 }}>
          用产品思维，<br />让品牌与用户共同成长。
        </motion.p>
        <motion.div className="hero-scribble" initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.8, delay: 0.42 }} />
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.36 }}>
          <PlayButton />
          <a href="#projects" className="outline-button">查看项目 →</a>
        </motion.div>
        <motion.span className="hand-note hero-hand-note" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
          {profile.mood}
        </motion.span>
      </div>
      <motion.div
        className="hero-polaroid"
        initial={{ opacity: 0, y: 24, rotate: 8 }}
        animate={{ opacity: 1, y: 0, rotate: 5 }}
        transition={{ duration: 0.8, delay: 0.55 }}
      >
        <Tape />
        <div className="photo-placeholder">生活照片 / 个人照片</div>
        <span>Daily<br />Moments</span>
      </motion.div>
      <div className="hero-note-card" aria-hidden="true">
        <span>Curiosity</span>
        <span>Insight</span>
        <span>Product</span>
        <span>Growth</span>
        <IrisLine />
      </div>
      <div className="hero-purple-card" aria-hidden="true">
        <span>生活切片</span>
        <span>审美灵感</span>
        <span>Vibe Coding</span>
        <b>✶</b>
        <b>✶</b>
      </div>
      <div className="postmark" aria-hidden="true">IRIS RECORD<br />2026 · XI YUHONG</div>
      <div className="hero-bottom-player" aria-hidden="true">
        <span className="bottom-play">▶</span>
        <b>Play My Story</b>
        <SoundWave />
      </div>
      <div className="hero-socials" aria-hidden="true">
        <span>☵</span>
        <span>✉</span>
        <span>in</span>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <b>↓</b>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-lilac">
      <Decorations />
      <Reveal>
        <SectionTitle label="01 / 关于我 About" title="自驱、敏捷学习，并愿意把事情推进到底。" note="中文为主，英文只保留为能力标签和氛围点缀。" />
      </Reveal>
      <div className="about-grid">
        <Reveal className="paper-card about-copy">
          <Tape />
          <p>{profile.about}</p>
          <div className="trait-list">
            {profile.traits.map((trait) => <span key={trait}>{trait}</span>)}
          </div>
        </Reveal>
        <Reveal className="collage-card dark-card">
          <div className="stamp">MAKE THINGS BLOOM</div>
          <Vinyl size="medium" />
          <IrisLine className="mini-line-flower" />
          <p>我喜欢把“好奇心”变成调研，把“责任感”变成推进，把“审美”变成更容易被用户记住的产品表达。</p>
        </Reveal>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="stats" className="section section-stats">
      <Reveal>
        <SectionTitle label="02 / 核心数据 Stats" title="把经历浓缩成可验证的结果。" note="每个数字背后都对应产品、协作、渠道或数据能力。" />
      </Reveal>
      <div className="stats-grid">
        {profile.stats.map((item, index) => (
          <Reveal key={item.title}>
            <motion.article whileHover={{ y: -7 }} className={`stat-card stat-card-${index + 1}`}>
              <span className="stat-index">0{index + 1}</span>
              <strong>{item.value}</strong>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section section-paper">
      <Decorations />
      <Reveal>
        <SectionTitle label="03 / 工作经历 Experience" title="从产品上新到增长复盘。" note="保留重点信息，减少堆叠文字，用杂志卡片呈现经历。" />
      </Reveal>
      <div className="experience-list">
        {profile.experience.map((job, index) => (
          <Reveal key={job.company}>
            <motion.article whileHover={{ y: -5 }} className={`experience-card ${index === 0 ? "featured" : ""}`}>
              <div className="experience-cover" aria-hidden="true">
                {index === 0 ? <IrisLine className="cover-iris-line" /> : <Vinyl size="small" />}
                <Tape />
              </div>
              <div className="experience-body">
                <div className="experience-head">
                  <div>
                    <span>{job.period}</span>
                    <h3>{job.company}</h3>
                    <p>{job.role}</p>
                  </div>
                  <em>{job.industry}</em>
                </div>
                <p className="job-summary">{job.summary}</p>
                <ul>
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                <div className="label-row">
                  {job.labels.map((label) => <span key={label}>{label}</span>)}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section section-black">
      <div className="record-field" aria-hidden="true" />
      <Reveal>
        <SectionTitle label="04 / 项目亮点 Projects" title="能被记住的，不只是经历，而是结果。" note="用拼贴卡片展示产品、媒介、数据与 Campaign Research。" />
      </Reveal>
      <div className="project-grid">
        {profile.projects.map((project, index) => (
          <Reveal key={project.title}>
            <motion.article whileHover={{ y: -8 }} className={`project-card project-card-${index + 1}`}>
              <span className="project-icon">{project.icon}</span>
              <small>{project.type}</small>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div>
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section-mist">
      <Reveal>
        <SectionTitle label="05 / 核心能力 Skills" title="产品、品牌、数据和 AI 工作流的组合能力。" note="以标签方式呈现，方便快速扫描。" />
      </Reveal>
      <div className="skills-grid">
        {profile.skills.map((group) => (
          <Reveal key={group.title}>
            <motion.div whileHover={{ y: -5 }} className="skill-card">
              <span>{group.icon}</span>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => <b key={item}>{item}</b>)}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function LifeGallery() {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const visiblePhotos = lifePhotos.slice(0, 10);
  const activePhoto = activePhotoIndex === null ? null : lifePhotos[activePhotoIndex];
  const closeGallery = () => {
    setActivePhotoIndex(null);
    setGalleryOpen(false);
  };
  const showPrevious = () => setActivePhotoIndex((current) => current === null ? null : (current - 1 + lifePhotos.length) % lifePhotos.length);
  const showNext = () => setActivePhotoIndex((current) => current === null ? null : (current + 1) % lifePhotos.length);

  useEffect(() => {
    if (activePhotoIndex === null && !galleryOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (activePhotoIndex !== null && event.key === "ArrowLeft") showPrevious();
      if (activePhotoIndex !== null && event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activePhotoIndex, galleryOpen]);

  return (
    <section id="life" className="section section-life bside-life">
      <Decorations />
      <div className="bside-bridge" aria-hidden="true">
        <IrisLine />
        <Vinyl size="small" />
      </div>
      <Reveal>
        <div className="bside-header">
          <div>
            <span className="bside-now">正在播放</span>
            <h2>B-Side · 生活切片</h2>
            <p>Side A 记录品牌、产品和增长；Side B 留给真实生活。旅行、宠物、音乐和那些让我保持好奇心的瞬间，组成这张唱片的另一面。</p>
          </div>
          <div className="bside-player" aria-hidden="true">
            <Vinyl size="medium" />
            <span>Life Moments</span>
            <b>{lifePhotos.length} Tracks</b>
          </div>
        </div>
      </Reveal>

      <div className="record-sleeve-wall">
        <div className="album-wall-vinyl" aria-hidden="true">
          <Vinyl size="large" />
        </div>
        {visiblePhotos.map((photo, index) => (
          <Reveal key={`featured-${photo.src}`} className={`sleeve-reveal sleeve-${index % 10}`}>
            <motion.button
              type="button"
              className={`record-sleeve sleeve-shape-${index % 5}`}
              onClick={() => setActivePhotoIndex(index)}
              whileHover={{ y: -8, scale: 1.02, rotate: index % 2 === 0 ? -0.8 : 0.8 }}
            >
              <span className="sleeve-vinyl" />
              <span className="sleeve-tape" />
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <span className="sleeve-caption">
                <b>{photo.category}</b>
                <small>{photo.title}</small>
              </span>
            </motion.button>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="life-explore">
          <button type="button" onClick={() => setGalleryOpen(true)}>
            查看更多生活切片 <span>Explore More / {lifePhotos.length} Tracks</span>
          </button>
        </div>
      </Reveal>

      {activePhoto ? (
        <div className="life-lightbox" role="dialog" aria-modal="true" aria-label={activePhoto.title}>
          <button type="button" className="lightbox-backdrop" onClick={() => setActivePhotoIndex(null)} aria-label="关闭大图" />
          <div className="lightbox-stage">
            <button type="button" className="lightbox-close" onClick={() => setActivePhotoIndex(null)} aria-label="关闭">×</button>
            <button type="button" className="lightbox-nav lightbox-prev" onClick={showPrevious} aria-label="上一张">←</button>
            <figure>
              <img src={activePhoto.src} alt={activePhoto.title} />
              <figcaption>
                <span>B-Side · Life Moments</span>
                <h3>{activePhoto.title}</h3>
                <p>{activePhoto.note}</p>
              </figcaption>
            </figure>
            <button type="button" className="lightbox-nav lightbox-next" onClick={showNext} aria-label="下一张">→</button>
          </div>
        </div>
      ) : null}

      {galleryOpen && activePhotoIndex === null ? (
        <div className="life-lightbox life-gallery-modal" role="dialog" aria-modal="true" aria-label="全部生活切片">
          <button type="button" className="lightbox-backdrop" onClick={() => setGalleryOpen(false)} aria-label="关闭相册" />
          <div className="gallery-stage">
            <button type="button" className="lightbox-close" onClick={() => setGalleryOpen(false)} aria-label="关闭">×</button>
            <div className="gallery-heading">
              <span>Now Playing</span>
              <h3>B-Side · Life Moments</h3>
              <p>全部生活切片收录在这里。点击任意封面可进入大图浏览，键盘左右键切换。</p>
            </div>
            <div className="gallery-grid">
              {lifePhotos.map((photo, index) => (
                <button
                  type="button"
                  key={`all-${photo.src}`}
                  className="gallery-thumb"
                  onClick={() => setActivePhotoIndex(index)}
                >
                  <img src={photo.src} alt={photo.title} loading="lazy" />
                  <span>{photo.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section section-contact">
      <div className="contact-record" aria-hidden="true"><Vinyl size="medium" /></div>
      <Reveal>
        <div className="contact-grid">
          <div>
            <span className="eyebrow">07 / 联系方式 Contact</span>
            <h2>欢迎聊聊产品、品牌增长和 Vibe Coding。</h2>
            <p>开放产品经理、品牌产品、消费品增长相关机会。也欢迎围绕 AI 工作流、品牌审美与个人网页交流。</p>
          </div>
          <div className="contact-card">
            {profile.contact.map((item) => (
              <a key={item.label} href={item.href}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      [120, 650, 1400].forEach((delay) => {
        window.setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: delay === 120 ? "smooth" : "auto", block: "start" });
        }, delay);
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <>
      <IntroOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Skills />
        <LifeGallery />
        <Contact />
      </main>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
