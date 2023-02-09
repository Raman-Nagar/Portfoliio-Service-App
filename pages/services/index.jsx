import Services from 'components/services/Services'

const services = () => {
    return (
        <>
            <div className="imgOverLay">
                <img src="/portfolio-03.png" alt="my works" />
                <div className="overLay">
                    <div className="itemContent">
                        <h3>
                            Services
                        </h3>
                    </div>
                </div>
            </div>
            <Services />
        </>
    )
}

export default services