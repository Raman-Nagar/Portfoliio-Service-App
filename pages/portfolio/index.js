import CountAchivement from 'components/incCounter/CountAchivement'
import Project from 'components/projects/project'
import Image from 'next/image'
const home = () => {
    return (
        <>
            <div className="imgOverLay">
                <Image src="/portfolio-03.png" alt="my works" width="2000" height="1000"></Image>
                <div className="overLay">
                    <div className="itemContent">
                        <h3>
                            Portfolio
                        </h3>
                    </div>
                </div>
            </div>
            <Project />
            {/* <CountAchivement /> */}
        </>
    )
}

export default home