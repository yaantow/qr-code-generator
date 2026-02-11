# 🎯 QR Code Generator - Free & No Watermark

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/yaantows-projects/v0-qr-code-generator)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/ncU3qyzQKLp)

A modern, free, and easy-to-use QR code generator with **no watermarks**. Create customizable QR codes for your URLs, websites, and links instantly.

## ✨ Features

- 🚫 **No Watermarks** - Clean QR codes without any branding or watermarks
- 🎨 **Full Customization** - Choose custom colors for foreground and background
- 📏 **Flexible Sizing** - Generate QR codes from 128px to 512px
- 🔧 **Error Correction Levels** - Adjust complexity for better scanning reliability
- 💾 **Multiple Export Options** - Download as PNG or copy to clipboard
- ⚡ **Instant Generation** - Real-time QR code preview as you customize
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 🌓 **Dark Mode Support** - Adaptive icons for light and dark themes

## 🚀 Live Demo

Try it now: **[https://qr-code-generator.vercel.app](https://qr-code-generator.vercel.app)**

## 🎯 How It Works

1. **Enter Your URL** - Paste any link you want to convert into a QR code
2. **Customize** - Choose colors, adjust size (128-512px), and set error correction level
3. **Generate** - Click "Generate QR Code" or press Enter
4. **Export** - Download as PNG or copy directly to your clipboard
5. **Use** - Share your watermark-free QR code anywhere!

### Error Correction Levels

The app offers four error correction levels:
- **Low (L)**: ~7% damage tolerance - Smallest QR code
- **Medium (M)**: ~15% damage tolerance - Balanced (recommended)
- **High (Q)**: ~25% damage tolerance - More reliable
- **Max (H)**: ~30% damage tolerance - Most reliable, larger size

Higher levels add more redundancy (more black squares) but make the QR code more resistant to damage and scanning issues.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **QR Generation**: [qrcode.react](https://github.com/zpao/qrcode.react)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ installed
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yaantow/qr-code-generator.git
cd qr-code-generator
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
# or
npm run build
```

Then start the production server:
```bash
pnpm start
# or
npm start
```

## 🚀 Deploy Your Own

### Deploy to Vercel (Recommended)

The easiest way to deploy this app is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yaantow/qr-code-generator)

1. Click the "Deploy with Vercel" button above
2. Follow the prompts to connect your GitHub account
3. Vercel will automatically build and deploy your app
4. Your QR code generator will be live in minutes!

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js:

- **Netlify**: Connect your repo and deploy with zero configuration
- **Railway**: `railway up` from your project directory
- **DigitalOcean App Platform**: Import from GitHub and deploy
- **AWS Amplify**: Connect your repository for automatic deployments
- **Self-hosted**: Build with `pnpm build` and run with `pnpm start`

### Environment Variables (Optional)

Create a `.env.local` file if you want to customize the base URL for SEO:

```env
NEXT_PUBLIC_BASE_URL=https://your-domain.com
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

### Reporting Issues

If you find a bug or have a feature request:
1. Check if the issue already exists in [GitHub Issues](https://github.com/yaantow/qr-code-generator/issues)
2. If not, create a new issue with a clear description
3. Include steps to reproduce for bugs
4. Add screenshots if applicable

### Contributing Code

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add amazing feature"
   ```
4. Push to your fork:
   ```bash
   git push origin feature/amazing-feature
   ```
5. Open a Pull Request with a clear description of your changes

### Development Guidelines

- Follow the existing code style
- Test your changes thoroughly
- Update documentation as needed
- Keep commits focused and atomic
- Write clear commit messages

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [v0.app](https://v0.app) - AI-powered UI generation
- QR code generation powered by [qrcode.react](https://github.com/zpao/qrcode.react)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📧 Contact & Support

- **Issues**: [GitHub Issues](https://github.com/yaantow/qr-code-generator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yaantow/qr-code-generator/discussions)

## 🌟 Star This Repo

If you find this project useful, please consider giving it a ⭐ on GitHub!

---

**Made with ❤️ for everyone who needs free QR codes without watermarks**