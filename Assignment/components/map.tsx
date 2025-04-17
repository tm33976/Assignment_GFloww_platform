"use client"

import { useEffect, useRef } from "react"

interface MapProps {
  address: string
  zoom?: number
  height?: string
}

export default function Map({ address, zoom = 15, height = "400px" }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This function would normally load a map using a service like Google Maps or Leaflet
    // For this example, we'll create a simulated map with some basic interactivity
    if (mapRef.current) {
      const mapContainer = mapRef.current

      // Create a simulated map with CSS
      mapContainer.style.position = "relative"
      mapContainer.style.overflow = "hidden"
      mapContainer.style.backgroundColor = "#e5f7f3"

      // Add some map-like elements
      const mapContent = document.createElement("div")
      mapContent.style.position = "absolute"
      mapContent.style.top = "0"
      mapContent.style.left = "0"
      mapContent.style.width = "100%"
      mapContent.style.height = "100%"

      // Add grid lines to simulate a map
      for (let i = 0; i < 10; i++) {
        const horizontalLine = document.createElement("div")
        horizontalLine.style.position = "absolute"
        horizontalLine.style.left = "0"
        horizontalLine.style.right = "0"
        horizontalLine.style.top = `${i * 10}%`
        horizontalLine.style.height = "1px"
        horizontalLine.style.backgroundColor = "rgba(0, 128, 128, 0.2)"
        mapContent.appendChild(horizontalLine)

        const verticalLine = document.createElement("div")
        verticalLine.style.position = "absolute"
        verticalLine.style.top = "0"
        verticalLine.style.bottom = "0"
        verticalLine.style.left = `${i * 10}%`
        verticalLine.style.width = "1px"
        verticalLine.style.backgroundColor = "rgba(0, 128, 128, 0.2)"
        mapContent.appendChild(verticalLine)
      }

      // Add a marker for the location
      const marker = document.createElement("div")
      marker.style.position = "absolute"
      marker.style.top = "50%"
      marker.style.left = "50%"
      marker.style.transform = "translate(-50%, -50%)"
      marker.style.width = "20px"
      marker.style.height = "20px"
      marker.style.backgroundColor = "#059669"
      marker.style.borderRadius = "50%"
      marker.style.boxShadow = "0 0 0 5px rgba(5, 150, 105, 0.3)"

      // Add a pulse animation to the marker
      marker.style.animation = "pulse 1.5s infinite"
      const style = document.createElement("style")
      style.innerHTML = `
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(5, 150, 105, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(5, 150, 105, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(5, 150, 105, 0);
          }
        }
      `
      document.head.appendChild(style)

      // Add address label
      const addressLabel = document.createElement("div")
      addressLabel.style.position = "absolute"
      addressLabel.style.bottom = "20px"
      addressLabel.style.left = "20px"
      addressLabel.style.backgroundColor = "white"
      addressLabel.style.padding = "8px 12px"
      addressLabel.style.borderRadius = "4px"
      addressLabel.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
      addressLabel.style.fontSize = "14px"
      addressLabel.style.fontWeight = "500"
      addressLabel.style.color = "#333"
      addressLabel.textContent = address

      // Add zoom controls
      const zoomControls = document.createElement("div")
      zoomControls.style.position = "absolute"
      zoomControls.style.top = "20px"
      zoomControls.style.right = "20px"
      zoomControls.style.display = "flex"
      zoomControls.style.flexDirection = "column"
      zoomControls.style.gap = "5px"

      const zoomIn = document.createElement("button")
      zoomIn.style.width = "30px"
      zoomIn.style.height = "30px"
      zoomIn.style.backgroundColor = "white"
      zoomIn.style.border = "none"
      zoomIn.style.borderRadius = "4px"
      zoomIn.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
      zoomIn.style.fontSize = "18px"
      zoomIn.style.fontWeight = "bold"
      zoomIn.style.cursor = "pointer"
      zoomIn.textContent = "+"

      const zoomOut = document.createElement("button")
      zoomOut.style.width = "30px"
      zoomOut.style.height = "30px"
      zoomOut.style.backgroundColor = "white"
      zoomOut.style.border = "none"
      zoomOut.style.borderRadius = "4px"
      zoomOut.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)"
      zoomOut.style.fontSize = "18px"
      zoomOut.style.fontWeight = "bold"
      zoomOut.style.cursor = "pointer"
      zoomOut.textContent = "-"

      zoomControls.appendChild(zoomIn)
      zoomControls.appendChild(zoomOut)

      // Add interactivity
      let currentZoom = zoom
      let isDragging = false
      let startX = 0
      let startY = 0
      let offsetX = 0
      let offsetY = 0

      zoomIn.addEventListener("click", () => {
        currentZoom = Math.min(currentZoom + 1, 20)
        marker.style.transform = `translate(-50%, -50%) scale(${currentZoom / 15})`
      })

      zoomOut.addEventListener("click", () => {
        currentZoom = Math.max(currentZoom - 1, 5)
        marker.style.transform = `translate(-50%, -50%) scale(${currentZoom / 15})`
      })

      mapContent.addEventListener("mousedown", (e) => {
        isDragging = true
        startX = e.clientX - offsetX
        startY = e.clientY - offsetY
        mapContent.style.cursor = "grabbing"
      })

      document.addEventListener("mousemove", (e) => {
        if (!isDragging) return
        offsetX = e.clientX - startX
        offsetY = e.clientY - startY
        mapContent.style.transform = `translate(${offsetX}px, ${offsetY}px)`
      })

      document.addEventListener("mouseup", () => {
        isDragging = false
        mapContent.style.cursor = "grab"
      })

      mapContent.style.cursor = "grab"

      // Append all elements
      mapContent.appendChild(marker)
      mapContent.appendChild(addressLabel)
      mapContent.appendChild(zoomControls)
      mapContainer.appendChild(mapContent)
    }
  }, [address, zoom])

  return <div ref={mapRef} style={{ height, width: "100%", borderRadius: "0.5rem" }} />
}
