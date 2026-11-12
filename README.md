# 个人博客

基于 GitHub Pages + Jekyll + Decap CMS 的个人博客。

## 网站结构
- 首页：白底、极简编辑型排版
- 创作：影视阅读、社会观察
- 研究与实践：社会学研究、政策与公共议题研究、市场研究
- 文章：每篇文章自动生成独立页面
- 归档：按年份自动归档
- 管理后台：/admin/

## 部署
仓库使用 GitHub Actions 构建并部署 Jekyll。请在仓库 Settings → Pages → Build and deployment 中，将 Source 设为 GitHub Actions。

## CMS 登录配置
管理后台采用 Decap CMS + Decap Turbo 的 GitHub 后端。站点 ID 配置在 admin/config.yml 的 turbo_site_id。

## 发布文章
进入网站 /admin/ 登录后，新建文章，填写标题、日期、一级分类、具体栏目、摘要、封面和正文。发布后会提交 Markdown 文件到 _posts/，GitHub Actions 自动重新构建网站。

## 内容分类
一级分类：
- 创作
- 研究与实践

创作下设：
- 影视阅读
- 社会观察

研究与实践下设：
- 社会学研究
- 政策与公共议题研究
- 市场研究

请勿将密码、访问令牌、私人草稿或未经授权公开的研究材料提交到公开仓库。
