import React from 'react'
import Typewriter from 'typewriter-effect'

function Type () {
  return (
    <Typewriter
      options={{
        strings: [
          'Student Web Developer',
          'Student Mobile Developer',
          'Student Game Developer',
          'Open Source Contributor'
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50
      }}
    />
  )
}

export default Type
