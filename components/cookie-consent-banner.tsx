"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { X } from "lucide-react"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = localStorage.getItem("cookie_consent_status")
    if (!consentStatus) {
      setShowBanner(true)
    } else {
      // Load scripts based on existing consent
      loadScriptsBasedOnConsent(consentStatus)
    }
  }, [])

  const setCookieConsent = (status: string, preferences?: CookiePreferences) => {
    const expiryDate = new Date()
    expiryDate.setDate(expiryDate.getDate() + 180) // 180 days

    if (preferences) {
      localStorage.setItem("cookie_consent_status", JSON.stringify(preferences))
    } else {
      localStorage.setItem("cookie_consent_status", status)
    }

    localStorage.setItem("cookie_consent_expiry", expiryDate.toISOString())

    // Load scripts based on consent
    loadScriptsBasedOnConsent(preferences ? JSON.stringify(preferences) : status)

    setShowBanner(false)
    setShowModal(false)
  }

  const loadScriptsBasedOnConsent = (consentData: string) => {
    try {
      if (consentData === "accepted") {
        // Load all scripts
        enableScripts(["analytics", "marketing"])
      } else if (consentData === "rejected") {
        // Don't load any non-essential scripts
        return
      } else {
        // Parse custom preferences
        const prefs = JSON.parse(consentData) as CookiePreferences
        const enabledCategories: string[] = []

        if (prefs.analytics) enabledCategories.push("analytics")
        if (prefs.marketing) enabledCategories.push("marketing")

        enableScripts(enabledCategories)
      }
    } catch (error) {
      console.error("Error parsing cookie consent:", error)
    }
  }

  const enableScripts = (categories: string[]) => {
    categories.forEach((category) => {
      const scripts = document.querySelectorAll(`script[data-cookie-category="${category}"]`)
      scripts.forEach((script) => {
        const newScript = document.createElement("script")
        newScript.innerHTML = script.innerHTML

        // Copy attributes
        Array.from(script.attributes).forEach((attr) => {
          if (attr.name !== "type" && attr.name !== "data-cookie-category") {
            newScript.setAttribute(attr.name, attr.value)
          }
        })

        document.head.appendChild(newScript)
      })
    })
  }

  const handleAcceptAll = () => {
    setCookieConsent("accepted")
  }

  const handleDeclineAll = () => {
    setCookieConsent("rejected")
  }

  const handleCustomSettings = () => {
    setShowModal(true)
  }

  const handleSavePreferences = () => {
    setCookieConsent("", preferences)
  }

  const handlePreferenceChange = (category: keyof CookiePreferences, checked: boolean) => {
    setPreferences((prev) => ({
      ...prev,
      [category]: checked,
    }))
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0A192F] to-[#112240] border-t border-white/20 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex-1 text-white">
              <h3 className="text-lg font-semibold mb-2 font-sans">We use cookies to improve your experience</h3>
              <p className="text-sm text-[#CCD6F6] leading-relaxed font-sans">
                We use cookies to provide you with the best website experience, analyze site traffic, and deliver
                personalized content. You can accept all cookies or manage your preferences through 'Cookie Settings'.
                For more information, please read our{" "}
                <a href="/privacy-policy" className="text-[#3A86FF] hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                onClick={handleAcceptAll}
                className="bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white font-semibold px-6 py-2 text-sm"
              >
                Accept All
              </Button>
              <Button
                onClick={handleDeclineAll}
                variant="outline"
                className="border-[#CCD6F6] text-[#CCD6F6] hover:bg-[#CCD6F6] hover:text-[#0A192F] bg-transparent font-semibold px-6 py-2 text-sm"
              >
                Decline All
              </Button>
              <Button
                onClick={handleCustomSettings}
                variant="outline"
                className="border-[#CCD6F6] text-[#CCD6F6] hover:bg-[#CCD6F6] hover:text-[#0A192F] bg-transparent font-semibold px-6 py-2 text-sm"
              >
                Cookie Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] bg-black/50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="text-xl font-sans">Cookie Settings</CardTitle>
                <CardDescription className="font-sans">
                  Manage your cookie preferences. You can enable or disable different types of cookies below.
                </CardDescription>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setShowModal(false)} className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Strictly Necessary Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-semibold font-sans">Strictly Necessary Cookies</h4>
                    <p className="text-sm text-muted-foreground font-sans">
                      These cookies are essential for the website to function properly. They cannot be disabled.
                    </p>
                  </div>
                  <Checkbox checked={true} disabled className="ml-4" />
                </div>
              </div>

              {/* Analytics & Performance Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-semibold font-sans">Analytics & Performance Cookies</h4>
                    <p className="text-sm text-muted-foreground font-sans">
                      These cookies help us understand how visitors interact with our website by collecting and
                      reporting information anonymously.
                    </p>
                  </div>
                  <Checkbox
                    checked={preferences.analytics}
                    onCheckedChange={(checked) => handlePreferenceChange("analytics", checked as boolean)}
                    className="ml-4"
                  />
                </div>
              </div>

              {/* Advertising & Marketing Cookies */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="font-semibold font-sans">Advertising & Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground font-sans">
                      These cookies are used to deliver advertisements more relevant to you and your interests.
                    </p>
                  </div>
                  <Checkbox
                    checked={preferences.marketing}
                    onCheckedChange={(checked) => handlePreferenceChange("marketing", checked as boolean)}
                    className="ml-4"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  onClick={handleSavePreferences}
                  className="bg-[#3A86FF] hover:bg-[#3A86FF]/90 text-white font-semibold flex-1"
                >
                  Save Preferences
                </Button>
                <Button onClick={() => setShowModal(false)} variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
