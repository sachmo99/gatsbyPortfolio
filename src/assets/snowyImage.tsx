import SnowOverlay from "./snowOverlay";

interface SnowyImageProps {
  src: string
  alt: string
  width: number
  height: number
  windowDimensions: {
    width: number
    height: number
    top: number
    left: number
  }
}

const SnowyImage: React.FC<SnowyImageProps> = ({ src, alt, width, height, windowDimensions }) => {
  return (
    <div style={{ position: 'relative', width, height }}>
      <img src={src} alt={alt} width={width} height={height} />
      <SnowOverlay
        windowWidth={windowDimensions.width}
        windowHeight={windowDimensions.height}
        windowTop={windowDimensions.top}
        windowLeft={windowDimensions.left}
      />
    </div>
  )
}

export default SnowyImage