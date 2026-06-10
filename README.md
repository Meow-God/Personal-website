# 奚雨虹 Portfolio Site

品牌 / 产品经理个人作品集网站，视觉关键词：淡紫色鸢尾花、黑胶唱片、奶油白、轻复古杂志感。

## Tech Stack

- React
- TypeScript
- Vite
- Framer Motion
- CSS

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Vite 会将部署产物输出到 `dist/`。

## Deploy

Vercel 推荐配置：

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

## Edit Content

主要内容集中在 `src/main.tsx` 顶部的 `profile` 数据结构中。生活照片放在 `public/images/life/`，代码中使用 `/images/...` 路径引用，部署到公网后也能正常访问。
