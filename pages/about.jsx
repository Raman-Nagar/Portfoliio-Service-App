import About from 'components/about/About'
import Image from 'next/image'

const about = () => {
  return (
    <>
      <div className="imgOverLay">
        <Image src="/about-us-03.jpg" alt="my works" width="1500" height="500"></Image>
        <div className="overLay">
          <div className="itemContent">
            <h3> About </h3>
          </div>
        </div>
      </div>
      <About />
    </>
  )
}

export default about