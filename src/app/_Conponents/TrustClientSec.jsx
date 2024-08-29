
import ResUseHeaing from './reUseComponents/ReUseHeading'
import ClientsLogo from './ClientsLogo'
import Container from './Container'
import Blackline from './Blackline'

const TrustClientSec = () => {

  let clientLogo = [
    {
      title : "Amy Smith",
      logo: '/cl1.png'
    },
    {
      title : "Amy Smith",
      logo: '/cl2.png'
    },
    {
      title : "Amy Smith",
      logo: '/cl3.png'
    },
    {
      title : "Amy Smith",
      logo: '/cl4.png'
    },
    {
      title : "Amy Smith",
      logo: '/cl4.png'
    },
    {
      title : "Amy Smith",
      logo: '/cl1.png'
    },
  ]

  return (
    <div>
        <Container className="flex-col flex gap-6">
          <div className=" text-center">
          <ResUseHeaing topPara={"Visit my Client"} mainTitle={"My Trusted Client"} />
          </div>
          <div className=" flex w-full justify-center flex-wrap gap-8 ">
            {
              clientLogo.map((item,ind)=>(
                <ClientsLogo key={ind} ClientName={item.title} logo={item.logo}/>
              ))
            }
          </div>
          
        </Container>
       
          <Blackline/>  
    </div>
  )
}

export default TrustClientSec