"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "../ui/button"
import Image from "next/image"

export default function Component() {
  const [activeTab, setActiveTab] = useState("end-to-end")
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const endToEndSteps = [
    {
      title: "Digital Roadmap",
      description:
        "We help you create a clear digital roadmap that identifies where new systems are needed and where we can integrate existing solutions. The goal is to achieve a smooth and efficient digital transformation.",
    },
    {
      title: "Requirements Analysis",
      description:
        "We conduct a comprehensive requirements analysis where we map out both technical and business needs. This ensures that every detail is considered before we proceed to the development services.",
    },
    {
      title: "Testing & maintenance",
      description:
        "We conduct thorough testing to ensure the system functions flawlessly at launch. Through continuous maintenance, we ensure that your systems remain updated, stable, and optimized over time.",
    },
    {
      title: "Project Management",
      description:
        "Our experienced project managers lead the project from start to finish, ensuring everything is delivered on time, within budget, and to the highest quality standards. With our expertise in both technology and business development, we ensure an efficient and smooth process.",
    },
  ]

  const expandTeamSteps = [
    {
      title: "Comprehensive recruitment & onboarding",
      description:
        "We manage the entire recruitment and onboarding process to ensure a smooth start. It We identify and hire top-rated developers tailored to your needs. 2) We ensure that the right tools, technical equipment, and resources are in place. 3) Our developers quickly adapt to your workflows and processes.",
    },
    {
      title: "Effective communication channels",
      description:
        "We ensure clear, transparent, and GDPR-compliant communication. Through established processes, you gain seamless communication between teams, quick feedback, and full control over the project status.",
    },
    {
      title: "Scalability and flexibility",
      description:
        "Do you need to quickly adapt your team? With us by your side, you can easily scale resources up or down according to project needs.",
    },
    {
      title: "Overcome recruitment challenges",
      description:
        "Finding the right developer can be a challenge. With Strativ, you gain direct access to a large and dedicated team of highly skilled developers, ready to take on your projects and create real business value.",
    },
  ]

  const currentSteps = activeTab === "end-to-end" ? endToEndSteps : expandTeamSteps

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-step-index") || "0")
            setVisibleSteps((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index].sort((a, b) => a - b)
              }
              return prev
            })
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px",
      },
    )

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [activeTab])

  // Reset visible steps when tab changes
  useEffect(() => {
    setVisibleSteps([])
    stepRefs.current = []
  }, [activeTab])

  const getTabContent = () => {
    if (activeTab === "end-to-end") {
      return {
        title: "End-to-end development",
        description: (
          <>
            <p className="text-white mb-4">
              At Strativ, we offer end-to-end development of digital solutions. We always start by deeply understanding
              your business – your needs, goals, and challenges. Thereafter, we assist you in creating a digital
              roadmap, identifying where new systems are needed and how we can best integrate existing solutions.
            </p>
            <p className="text-white">
              Through our deep understanding of both the technical and business environment in Scandinavia, we ensure
              that your project is carried out efficiently, smoothly, and with the best possible results.
            </p>
          </>
        ),
        image: "/hero17.jpeg",
        initialText:
          "Our process begins with an in-depth analysis of your business, goals, and specific needs. We believe that a thorough understanding is crucial for creating solutions that truly align with your visions and objectives.",
      }
    } else {
      return {
        title: "CMS Platform",
        description: (
          <>
            <p className="text-white mb-4">
             At Najah, we offer end-to-end development of digital solutions. We always start by deeply understanding
              your business – your needs, goals, and challenges. Thereafter, we assist you in creating a digital
              roadmap, identifying where new systems are needed and how we can best integrate existing solutions.
            </p>
            <p className="text-white">
              Through our deep understanding of both the technical and business environment in Scandinavia, we ensure
              that your project is carried out efficiently, smoothly, and with the best possible results.
            </p>
          </>
        ),
        image: "/woman2.jpg",
        initialText:
          "Our process begins with an in-depth analysis of your business, goals, and specific needs. We believe that a thorough understanding is crucial for creating solutions that truly align with your visions and objectives.",
        
      }
    }
  }

  const tabContent = getTabContent()

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our working process</h1>
        

        <p className="text-white max-w-4xl mx-auto mt-4 text-sm leading-relaxed">
        At Najah, we offer end-to-end development of digital solutions. We always start by deeply understanding
              your business – your needs, goals, and challenges. Thereafter, we assist you in creating a digital
              roadmap, identifying where new systems are needed and how we can best integrate existing solutions.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
        <Button
          onClick={() => setActiveTab("end-to-end")}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
            activeTab === "end-to-end"
              ? "bg-[#271944] text-white hover:bg-[#271944]"
              : "bg-gray-100 text-white hover:bg-[#271944]"
          }`}
        >
          📱 End-to-end development
        </Button>
        <Button
          onClick={() => setActiveTab("expand-team")}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${
            activeTab === "expand-team"
              ? "bg-[#271944] text-white hover:bg-[#271944]"
              : "bg-gray-100 text-white hover:bg-[#271944]"
          }`}
        >
          📱 CMS Platform
        </Button>
      </div>

      {/* Content Section */}
      <div className="mb-16">
        <div className="border border-gray-200 rounded-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{tabContent.title}</h2>
              {tabContent.description}
            </div>
            <div className="relative">
              <Image
                src={tabContent.image || "/placeholder.svg"}
                alt={tabContent.title}
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Initial Process Description */}
        <div className="bg-[#250945] border-l-4 border-[#271944] p-6 mb-12">
          <p className="text-white">{tabContent.initialText}</p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8" ref={timelineRef}>
          {/* Dynamic Vertical Line */}
          <div
            className="absolute left-2 top-0 w-0.5 bg-[#ae2fbf] transition-all duration-1000 ease-out"
            style={{
              height: visibleSteps.length > 0 ? `${(visibleSteps.length / currentSteps.length) * 100}%` : "0%",
            }}
          ></div>

          <div className="space-y-12">
            {currentSteps.map((step, index) => {
              const isVisible = visibleSteps.includes(index)
              const showDot = visibleSteps.includes(index)

              return (
                <div
                  key={`${activeTab}-${index}`}
                  className="relative"
                  ref={(el) => (stepRefs.current[index] = el)}
                  data-step-index={index}
                >
                  {/* Timeline Dot - appears with content */}
                  <div
                    className={`absolute -left-6 top-1 w-4 h-4 bg-[#ae2fbf] rounded-full border-2 border-white shadow-sm transition-all duration-500 ${
                      showDot ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{
                      transitionDelay: showDot ? "200ms" : "0ms",
                    }}
                  ></div>

                  {/* Content */}
                  <div
                    className={`pl-2 transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: isVisible ? "100ms" : "0ms",
                    }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white leading-relaxed text-sm">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
