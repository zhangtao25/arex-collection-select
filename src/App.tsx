// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import SelectModal from "./libs/SelectModal.tsx";

import SelectModal from "./libs/SelectModal.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div>
          <SelectModal open={true}></SelectModal>
      </div>
  )
}

export default App
