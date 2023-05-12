//Components
import { Matrix } from "@/components/Matrix/Matrix"
export default function Home() {
  return (
    <main>
      <Matrix rows={10} cols={10} mines={10}/>
    </main>
  )
}
