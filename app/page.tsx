"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import CookieConsentBanner from "@/components/cookie-consent-banner"

export default function HomePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    products: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-sans font-bold text-primary">Axonode Solution</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </a>
                <a
                  href="#products"
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Products
                </a>
                <a
                  href="#compatibility"
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Compatibility
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </a>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">Get Quote</Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #0A192F 0%, #112240 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(58, 134, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(58, 134, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "20px 20px",
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Enterprise-Grade <span className="text-[#3A86FF]">Optical Transceivers</span>
              </h1>
              <p className="text-xl text-[#CCD6F6] leading-relaxed">
                Carrier-grade optical transceivers with 100% compatibility guarantee. Trusted by network engineers
                worldwide for mission-critical infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white font-semibold">
                  Browse Products <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#CCD6F6] text-[#CCD6F6] hover:bg-[#CCD6F6] hover:text-[#0A192F] bg-transparent font-semibold"
                >
                  Check Compatibility
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Brands Logo Wall */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-muted-foreground mb-8">
              100% Compatible with Leading Network Equipment
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-slate-600">CISCO</div>
              <div className="text-2xl font-bold text-slate-600">JUNIPER</div>
              <div className="text-2xl font-bold text-slate-600">ARUBA</div>
              <div className="text-2xl font-bold text-slate-600">HUAWEI</div>
              <div className="text-2xl font-bold text-slate-600">DELL</div>
              <div className="text-2xl font-bold text-slate-600">HPE</div>
              <div className="text-2xl font-bold text-slate-600">EXTREME</div>
              <div className="text-2xl font-bold text-slate-600">MELLANOX</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">About Axonode Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a leading provider of high-performance optical transceivers, we are strategically positioned to serve a
              global clientele of network engineers, data center operators, and IT professionals. We have extensive
              experience in optical technology and global logistics, offering{" "}
              <strong>carrier-grade, pre-validated, and reliable</strong> hardware for the world's most demanding
              networks.
            </p>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Product Catalog</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional-grade optical transceivers engineered for reliability and performance.
            </p>
          </div>

          <Tabs defaultValue="10g-sfp" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="10g-sfp" className="text-sm font-medium">
                10G SFP+
              </TabsTrigger>
              <TabsTrigger value="1g-sfp" className="text-sm font-medium">
                1G SFP
              </TabsTrigger>
              <TabsTrigger value="100g-qsfp28" className="text-sm font-medium">
                100G QSFP28
              </TabsTrigger>
              <TabsTrigger value="copper" className="text-sm font-medium">
                Copper SFP/SFP+
              </TabsTrigger>
            </TabsList>

            {/* 10G SFP+ Products */}
            <TabsContent value="10g-sfp">
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* 10G SR SFP+ */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src="https://raw.githubusercontent.com/jennyflying-25/axonode-solution-1-landing-page/main/img/1755675943713.jpg"
                        alt="10G SR SFP+ Transceiver"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">10G SR SFP+</h3>
                        <p className="text-sm text-muted-foreground mb-3">High-density data center connectivity</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Wavelength:</span>
                          <span className="font-semibold">850nm VCSEL</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Distance:</span>
                          <span className="font-semibold">Up to 300m</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Connector:</span>
                          <span className="font-semibold">LC Duplex</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Power:</span>
                          <span className="font-semibold">&lt;1.5W</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                          A-SFP-10G-SR-C
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          SFP-10G-SR
                        </Badge>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* 10G LR SFP+ */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src="https://raw.githubusercontent.com/jennyflying-25/axonode-solution-1-landing-page/main/img/1755675943715.jpg"
                        alt="10G LR SFP+ Transceiver"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">10G LR SFP+</h3>
                        <p className="text-sm text-muted-foreground mb-3">Campus backbone and metro links</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Wavelength:</span>
                          <span className="font-semibold">1310nm DFB</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Distance:</span>
                          <span className="font-semibold">Up to 10km</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Connector:</span>
                          <span className="font-semibold">LC Duplex</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Power:</span>
                          <span className="font-semibold">&lt;1.5W</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                          A-SFP-10G-LR-C
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          SFP-10G-LR
                        </Badge>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 1G SFP Products */}
            <TabsContent value="1g-sfp">
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* 1G SX SFP */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src="https://raw.githubusercontent.com/jennyflying-25/axonode-solution-1-landing-page/main/img/1755675943712.jpg"
                        alt="1G SX SFP Transceiver"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">1G SX SFP</h3>
                        <p className="text-sm text-muted-foreground mb-3">Short-range multi-mode fiber connectivity</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Wavelength:</span>
                          <span className="font-semibold">850nm VCSEL</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Distance:</span>
                          <span className="font-semibold">Up to 550m</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Connector:</span>
                          <span className="font-semibold">LC Duplex</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Power:</span>
                          <span className="font-semibold">&lt;1W</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                          A-SFP-1G-SX-C
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          GLC-SX-MMD
                        </Badge>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* 1G LX SFP */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src="https://raw.githubusercontent.com/jennyflying-25/axonode-solution-1-landing-page/main/img/1755675944898.jpg"
                        alt="1G LX SFP Transceiver"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">1G LX SFP</h3>
                        <p className="text-sm text-muted-foreground mb-3">Long-range single-mode fiber connectivity</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Wavelength:</span>
                          <span className="font-semibold">1310nm DFB</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Distance:</span>
                          <span className="font-semibold">Up to 10km</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Connector:</span>
                          <span className="font-semibold">LC Duplex</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Power:</span>
                          <span className="font-semibold">&lt;1W</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                          A-SFP-1G-LX-C
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          GLC-LH-SMD
                        </Badge>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* 100G QSFP28 Products */}
            <TabsContent value="100g-qsfp28">
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* 100G SR4 QSFP28 */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src="https://raw.githubusercontent.com/jennyflying-25/axonode-solution-1-landing-page/main/img/1755675943788.jpg"
                        alt="100G SR4 QSFP28 Transceiver"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">100G SR4 QSFP28</h3>
                        <p className="text-sm text-muted-foreground mb-3">High-speed data center interconnects</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Wavelength:</span>
                          <span className="font-semibold">850nm (4 lanes)</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Distance:</span>
                          <span className="font-semibold">Up to 100m</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Connector:</span>
                          <span className="font-semibold">MPO/MTP-12</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Power:</span>
                          <span className="font-semibold">&lt;3.5W</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                          A-QSFP-100G-SR4-C
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          QSFP-100G-SR4-S
                        </Badge>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* 100G LR4 QSFP28 */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src="https://raw.githubusercontent.com/jennyflying-25/axonode-solution-1-landing-page/main/img/1755675943792.jpg"
                        alt="100G LR4 QSFP28 Transceiver"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">100G LR4 QSFP28</h3>
                        <p className="text-sm text-muted-foreground mb-3">Long-reach 100G connectivity</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Wavelength:</span>
                          <span className="font-semibold">CWDM4</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Distance:</span>
                          <span className="font-semibold">Up to 10km</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Connector:</span>
                          <span className="font-semibold">LC Duplex</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Power:</span>
                          <span className="font-semibold">&lt;3.5W</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                          A-QSFP-100G-LR4-C
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          QSFP-100G-LR4-S
                        </Badge>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Copper SFP/SFP+ Products */}
            <TabsContent value="copper">
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* 1G Copper SFP */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src="https://raw.githubusercontent.com/jennyflying-25/axonode-solution-1-landing-page/main/img/1755675943795.jpg"
                        alt="1G Copper SFP Transceiver"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">1G Copper SFP (1000BASE-T)</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Delivers 1Gbps connectivity over standard Cat5e/6 copper cable up to 100m
                        </p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Interface:</span>
                          <span className="font-semibold">1000BASE-T</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Distance:</span>
                          <span className="font-semibold">Up to 100m</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Connector:</span>
                          <span className="font-semibold">RJ45</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Power:</span>
                          <span className="font-semibold">&lt;1W</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                          A-SFP-1G-T-C
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          GLC-T
                        </Badge>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* 10G Copper SFP+ */}
                <Card className="group hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <Image
                        src="https://raw.githubusercontent.com/jennyflying-25/axonode-solution-1-landing-page/main/img/1755675943824.jpg"
                        alt="10G Copper SFP+ Transceiver"
                        width={300}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">10G Copper SFP+ (10GBASE-T)</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          Provides 10Gbps connectivity over Cat6a/7 copper cable up to 30m
                        </p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Interface:</span>
                          <span className="font-semibold">10GBASE-T</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Distance:</span>
                          <span className="font-semibold">Up to 30m</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Connector:</span>
                          <span className="font-semibold">RJ45</span>
                        </div>
                        <div className="flex">
                          <span className="text-muted-foreground w-24">Power:</span>
                          <span className="font-semibold">&lt;2.5W</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-800">
                          A-SFP-10G-T-C
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          SFP-10G-T-X
                        </Badge>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90" size="sm">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Compatibility Section */}
      <section id="compatibility" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Compatibility Verification</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our engineering team provides comprehensive compatibility testing and verification tools.
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
              Cisco 9200L vs. 9300 Technical Comparison
            </Button>
            <p className="text-muted-foreground">
              <strong>Coming Soon:</strong> Interactive Compatibility Matrix Tool
            </p>
          </div>
        </div>
      </section>

      {/* Contact/Inquiry Form Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">Technical Support</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with our team for technical specifications, compatibility verification, and custom solutions.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-muted-foreground">#66 Beijing Road, Longquanyi District, Chengdu, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-muted-foreground">+86 134 8078 2233</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">info@axonodesolution.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Technical Inquiry</CardTitle>
                <CardDescription>
                  Submit your requirements and our team will respond within one business day.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-6">
                    <div className="space-y-3">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-green-600">Inquiry Submitted Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for your inquiry. Our team will respond within one business day.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                      <h4 className="font-semibold text-foreground">Get Instant Support</h4>
                      <p className="text-sm text-muted-foreground">
                        For immediate assistance, scan the QR code below to connect with us on WhatsApp
                      </p>
                      <Image
                        src={`https://pixeltrack-worker.laifa.xin/track/rdqEUBQo.jpg?e=${encodeURIComponent(formData.email)}&p=${encodeURIComponent(formData.phone)}&n=${encodeURIComponent(formData.fullName)}&m=${encodeURIComponent(formData.message)}&c1=${encodeURIComponent(formData.company)}&c2=${encodeURIComponent(formData.products)}`}
                        alt="WhatsApp QR Code"
                        width={200}
                        height={200}
                        className="mx-auto rounded-lg border-2 border-gray-200"
                      />
                      <p className="text-xs text-muted-foreground">Scan with your phone camera to add us on WhatsApp</p>
                    </div>

                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-6">
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          placeholder="Enter your full name"
                          required
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Enter your company name"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="products">Products of Interest</Label>
                      <Select onValueChange={(value) => handleInputChange("products", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select products you're interested in" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1g-sfp">1G SFP Transceivers</SelectItem>
                          <SelectItem value="10g-sfp">10G SFP+ Transceivers</SelectItem>
                          <SelectItem value="100g-qsfp28">100G QSFP28 Transceivers</SelectItem>
                          <SelectItem value="copper">Copper Transceivers</SelectItem>
                          <SelectItem value="custom">Custom Solution</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Technical Requirements *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your technical requirements, compatibility needs, or project specifications..."
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                    >
                      Send Inquiry
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-white"
        style={{
          background: `linear-gradient(135deg, #0A192F 0%, #112240 100%)`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Brand Column */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-sans font-bold mb-3 text-white">Axonode Solution</h3>
              <p className="text-[#CCD6F6] mb-2 font-sans text-sm leading-relaxed">
                Engineering Excellence in Optical Connectivity
              </p>
              <p className="text-[#CCD6F6]/80 font-sans text-xs leading-relaxed">
                Carrier-grade, pre-validated, and reliable hardware for mission-critical network infrastructure
                worldwide.
              </p>
            </div>

            {/* Products Column */}
            <div className="text-center md:text-left">
              <h4 className="font-sans font-bold mb-4 text-base text-white">Products</h4>
              <ul className="space-y-2 text-[#CCD6F6] font-sans">
                <li>
                  <a href="#products" className="hover:text-[#3A86FF] transition-colors text-sm">
                    1G SFP Transceivers
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#3A86FF] transition-colors text-sm">
                    10G SFP+ Transceivers
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#3A86FF] transition-colors text-sm">
                    100G QSFP28 Transceivers
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-[#3A86FF] transition-colors text-sm">
                    Copper Transceivers
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#3A86FF] transition-colors text-sm">
                    Custom Solutions
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="text-center md:text-left">
              <h4 className="font-sans font-bold mb-4 text-base text-white">Resources</h4>
              <ul className="space-y-2 text-[#CCD6F6] font-sans">
                <li>
                  <a href="#about" className="hover:text-[#3A86FF] transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#3A86FF] transition-colors text-sm">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-[#3A86FF] transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-6 text-center text-[#CCD6F6]/60 text-xs font-sans">
            <p>&copy; 2024 Axonode Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <CookieConsentBanner />

      <script type="text/plain" data-cookie-category="analytics">
        {`
          // Google Analytics placeholder
          // This script will only be loaded if user consents to analytics cookies
          console.log('Analytics script would be loaded here');
        `}
      </script>

      <script type="text/plain" data-cookie-category="marketing">
        {`
          // Facebook Pixel or other marketing scripts placeholder
          // This script will only be loaded if user consents to marketing cookies
          console.log('Marketing script would be loaded here');
        `}
      </script>
    </div>
  )
}
