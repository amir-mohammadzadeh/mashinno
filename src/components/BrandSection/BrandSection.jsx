import './BrandSection.css' // Code =>  16
import BrandContent from './BrandContent'

const BrandSection = () => {
   
   return (
      <div className='brannd_section' id='Brands_Section'>
         <div className="container brand_container_16">
            <BrandContent limit={true} />
         </div>
      </div>
   )
}

export default BrandSection