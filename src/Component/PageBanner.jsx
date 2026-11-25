import React from 'react'
import { CardSubtitle, Container } from 'react-bootstrap'

const PageBanner = ({title,subtitle,backgroundImage}) => {
  return (
    <section className='page-banner' style={{ backgroundImage: 
        `linear-gradient(to right, #000000f5, #f4a91d56),url(${backgroundImage}`}}>
    
        <Container>
        <div>

            <p>Lupin Cinema</p>


            <h1>{title}</h1>
            <h5>{subtitle}</h5>


            <aside>
                Home/ {title}
            </aside>
        </div>

        </Container>
    
    </section>
  )
}

export default PageBanner