import "./Nav.css"
import { useEffect, useState } from "react"

function Nav() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setShow(true)
      }
      else {
        setShow(false)
      }
    })
  })

  return (
    <>
      <div className={`${show && 'nav-black'} nav`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" width="150px" alt="logo" />

      </div>
    </>
  )
}

export default Nav