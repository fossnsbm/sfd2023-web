import React from 'react'
import Image from 'next/image'
import Container from '@/components/Container'
import WhatIsContent from '@/components/WhatIsContent'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

type Props = {}

const WhatIsSFD = (props: Props) => {
  return (
    <>
      <Navbar />
      <WhatIsContent />
      <Footer />
    </>
  )
}

export default WhatIsSFD