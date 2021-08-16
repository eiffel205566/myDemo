import { useCanvas } from 'src/pages/TestPage/useCanvas'

const Canvas = (props) => {
  // const [, , , , draw] = useContext(AppContext)
  const { draw } = props

  const canvasRef = useCanvas(draw)

  return <canvas ref={canvasRef} {...props} />
}

export default Canvas
