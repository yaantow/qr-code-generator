"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { QrCode, Download, Copy, Check } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H"

export default function QRCodeGenerator() {
  const [url, setUrl] = useState("")
  const [qrValue, setQrValue] = useState("")
  const [fgColor, setFgColor] = useState("#000000")
  const [bgColor, setBgColor] = useState("#ffffff")
  const [size, setSize] = useState(256)
  const [copied, setCopied] = useState(false)
  const [complexity, setComplexity] = useState<ErrorCorrectionLevel>("M")
  const qrRef = useRef<SVGSVGElement>(null)

  const handleGenerate = () => {
    if (url.trim()) {
      setQrValue(url)
    }
  }

  const handleDownload = () => {
    const svg = document.getElementById("qr-code-display")
    if (!svg) return

    const svgData = new XMLSerializer().serializeToString(svg)
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    const img = new Image()

    canvas.width = size
    canvas.height = size

    img.onload = () => {
      ctx?.drawImage(img, 0, 0)
      const pngFile = canvas.toDataURL("image/png")
      const downloadLink = document.createElement("a")
      downloadLink.download = "qr-code.png"
      downloadLink.href = pngFile
      downloadLink.click()
    }

    img.src = "data:image/svg+xml;base64," + btoa(svgData)
  }

  const handleCopy = async () => {
    const svg = document.getElementById("qr-code-display")
    if (!svg) return

    try {
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement("canvas")
      const ctx = canvas.getContext("2d")
      const img = new Image()

      canvas.width = size
      canvas.height = size

      img.onload = async () => {
        ctx?.drawImage(img, 0, 0)
        canvas.toBlob(async (blob) => {
          if (blob) {
            await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })])
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
          }
        })
      }

      img.src = "data:image/svg+xml;base64," + btoa(svgData)
    } catch (err) {
      console.error("Failed to copy QR code:", err)
    }
  }

  const getComplexityLabel = (level: ErrorCorrectionLevel) => {
    const labels = { L: "Low", M: "Medium", Q: "High", H: "Max" }
    return labels[level]
  }

  return (
    <main className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-3 rounded-none border-4 border-foreground bg-primary p-4 shadow-2xs">
            <QrCode className="h-8 w-8 text-primary-foreground" />
            <h1 className="font-mono text-3xl font-bold uppercase text-primary-foreground md:text-4xl">QR Generator</h1>
          </div>
          <p className="font-mono text-lg text-foreground">Paste your link, customize, and generate!</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Input & Controls */}
          <Card className="space-y-6 border-4 border-foreground bg-card p-6 shadow-md">
            <div className="space-y-2">
              <Label htmlFor="url" className="font-mono text-lg font-bold uppercase">
                Your Link
              </Label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="border-4 border-foreground font-mono text-base"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleGenerate()
                  }
                }}
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-lg font-bold uppercase">Customize</h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fg-color" className="font-mono text-sm font-bold uppercase">
                    QR Color
                  </Label>
                  <div className="flex gap-2">
                    <input
                      id="fg-color"
                      type="color"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="h-12 w-12 cursor-pointer border-4 border-foreground shadow-2xs"
                    />
                    <Input
                      type="text"
                      value={fgColor}
                      onChange={(e) => setFgColor(e.target.value)}
                      className="border-4 border-foreground font-mono text-xs uppercase"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bg-color" className="font-mono text-sm font-bold uppercase">
                    Background
                  </Label>
                  <div className="flex gap-2">
                    <input
                      id="bg-color"
                      type="color"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="h-12 w-12 cursor-pointer border-4 border-foreground shadow-2xs"
                    />
                    <Input
                      type="text"
                      value={bgColor}
                      onChange={(e) => setBgColor(e.target.value)}
                      className="border-4 border-foreground font-mono text-xs uppercase"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="size" className="font-mono text-sm font-bold uppercase">
                    Size
                  </Label>
                  <span className="font-mono text-sm font-bold text-muted-foreground">{size}px</span>
                </div>
                <input
                  id="size"
                  type="range"
                  min="128"
                  max="512"
                  step="32"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                  className="w-full accent-primary"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="complexity" className="font-mono text-sm font-bold uppercase">
                    Complexity
                  </Label>
                  <span className="font-mono text-sm font-bold text-muted-foreground">
                    {getComplexityLabel(complexity)}
                  </span>
                </div>
                <input
                  id="complexity"
                  type="range"
                  min="0"
                  max="3"
                  step="1"
                  value={["L", "M", "Q", "H"].indexOf(complexity)}
                  onChange={(e) => {
                    const levels: ErrorCorrectionLevel[] = ["L", "M", "Q", "H"]
                    setComplexity(levels[Number(e.target.value)])
                  }}
                  className="w-full accent-primary"
                />
                <p className="text-xs font-mono text-muted-foreground">
                  Higher complexity adds more data redundancy (more black squares)
                </p>
              </div>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={!url.trim()}
              className="w-full border-4 border-foreground font-mono text-lg font-bold uppercase shadow-md hover:translate-x-1 hover:translate-y-1 hover:shadow-2xs"
              size="lg"
            >
              Generate QR Code
            </Button>
          </Card>

          {/* QR Code Display */}
          <Card className="flex flex-col items-center justify-center space-y-6 border-4 border-foreground bg-card p-6 shadow-md">
            <div
              className={`border-4 border-foreground shadow-md ${!qrValue ? "opacity-30 grayscale" : ""}`}
              style={{ backgroundColor: bgColor }}
            >
              <QRCodeSVG
                id="qr-code-display"
                value={qrValue || "https://example.com"}
                size={size}
                fgColor={fgColor}
                bgColor={bgColor}
                level={complexity}
                includeMargin={true}
                ref={qrRef}
              />
            </div>

            {!qrValue && (
              <p className="font-mono text-sm font-bold uppercase text-muted-foreground text-center">
                Sample Preview - Enter URL and click Generate
              </p>
            )}

            {qrValue && (
              <div className="flex w-full gap-3">
                <Button
                  onClick={handleDownload}
                  variant="secondary"
                  className="flex-1 border-4 border-foreground font-mono font-bold uppercase shadow-md hover:translate-x-1 hover:translate-y-1 hover:shadow-2xs"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download
                </Button>
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  className="flex-1 border-4 border-foreground font-mono font-bold uppercase shadow-md hover:translate-x-1 hover:translate-y-1 hover:shadow-2xs bg-transparent"
                >
                  {copied ? (
                    <>
                      <Check className="mr-2 h-5 w-5" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-5 w-5" />
                      Copy
                    </>
                  )}
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </main>
  )
}
