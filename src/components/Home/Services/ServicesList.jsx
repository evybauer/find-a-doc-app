import { services } from '../../../data'
import ServiceCard from './ServiceCard'

const ServicesList = () => (
  <div className='flex justify-center'>
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
      {services.map((service) => (
        <ServiceCard key={service.id} {...service} />
      ))}
    </div>
  </div>
)

export default ServicesList
