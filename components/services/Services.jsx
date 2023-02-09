import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from "./services.module.css"

const Services = () => {
    const [services, setServices] = useState([])

    const getData = async () => {
        const data = await fetch("http://localhost:3000/api/allservices", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const res = await data.json()
        if (data.status === 200) {

            setServices(res.services)
        } else {
            alert("server error")
        }
    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={styles.fluidcontainer}>

            <div className={styles.head1}>
                <div className={styles.sectiontitle}>
                    <span>// Service</span>
                    <h2>What we do here</h2>
                </div>
            </div>

            <div className={styles.container}>

                {
                    services.map((x) => {
                        return <div className={styles.serviceitem} key={x._id}>
                            <div className={styles.itemWrapper} >
                                <div className={styles.serviceImg}>
                                    <img src={x.image} alt="icon not found" />
                                </div>
                                <div className={styles.itemContent}>
                                    <h3>
                                        <a href="/">{x.title}</a>
                                    </h3>
                                    <p>{x.description.substring(0, 70)}....</p>
                                </div>
                                <div className={styles.readmore}>
                                    <Link className="service__btn" href={`/services/${x._id}`}> <span>// Read More</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    })
                }

            </div>
        </div>
    )
}

// export async function getStaticProps(context) {

//     const data = await fetch("http://localhost:3000/api/getservices")
//     const res = await data.json()
//     return {
//         props: { services: res.services }, // will be passed to the page component as props
//     }
// }

export default Services