# Christine 简历网站

单页个人简历站点，基于 React + Vite + TypeScript，内容集中在 `src/data/resume.ts`，改数据即可更新整站。

## 快速开始

```bash
npm install
npm run dev
```

浏览器打开终端里显示的本地地址（通常是 http://localhost:5173）。

## 自定义内容

编辑 **`src/data/resume.ts`**：

| 字段 | 说明 |
|------|------|
| `profile` | 姓名、职位、简介、邮箱、社交链接 |
| `about` | 关于我段落 |
| `experience` | 工作经历列表 |
| `education` | 教育背景 |
| `skills` | 技能标签 |
| `projects` | 项目卡片 |

头像：在 `profile.avatar` 填入图片 URL，或将图片放到 `public/` 后写 `/your-photo.jpg`。

## 构建与部署

```bash
npm run build
```

产物在 `dist/` 目录，可部署到：

- [Vercel](https://vercel.com) / [Netlify](https://netlify.com)（拖放或连 Git）
- [GitHub Pages](https://pages.github.com)（需配置 `base` 路径）
- 任意静态托管

本地预览构建结果：`npm run preview`

## 项目结构

```
src/
  data/resume.ts    # 所有简历文案
  components/       # 侧边栏与主内容
  App.tsx
  index.css         # 样式与主题色
```

## 技术栈

- React 19
- Vite 6
- TypeScript
