//Components
import { Matrix } from "@/components/Matrix/Matrix"
import {io} from 'socket.io-client';
const socket = io('http://localhost:3000');
export default function Home() {
  return (
    <main>
      <Matrix socket={socket}/>
    </main>
  )
}
