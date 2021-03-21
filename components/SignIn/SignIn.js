import { useSession, signIn, signOut } from "next-auth/client"
import React, { useState } from "react"
import Image from "next/image"
import { Modal } from "react-bootstrap"

const SignIn = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => {
    setShow(true)
  }

  const [session, loading] = useSession()

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      {!session ? (
        <button
          className="bg-[#e50914] text-white px-4 py-2 text-sm rounded flex items-center"
          // onClick={() => signIn()}
          onClick={handleShow}>
          Sign In
        </button>
      ) : (
        <button
          className="bg-[#e50914] text-white px-4 py-2 text-sm rounded flex items-center"
          onClick={() => signOut()}>
          Sign Out
        </button>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-full items-center justify-center m-auto h-auto py-4">
            <div className="w-10/12 flex m-auto justify-center">
              <button
                className="w-auto border-2 border-black rounded-md p-1"
                onClick={() => signIn("google")}>
                <div className="flex items-center">
                  <Image src="/google.svg.webp" layout="fixed" width="30" height="30" />
                  <span className="mx-2">Sign in with Google</span>
                </div>
              </button>
            </div>

            <div className="w-10/12 flex m-auto justify-center py-4">
              <button
                className="w-auto border-2 border-black rounded-md p-1"
                onClick={() => signIn("github")}>
                <div className="flex items-center">
                  <Image src="/github-icon.svg" layout="fixed" width="30" height="30" />
                  <span className="mx-2">Sign in with Github</span>
                </div>
              </button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  )
}

export default SignIn
