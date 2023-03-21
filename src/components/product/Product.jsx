import Details from "./Details"
import Images from "./Images"


function Product({order,  setOrder , setImagepreveiw , imagespreveiw }) {
  


  return (
    <div className="product  mt-5 flex gap-10 sm:flex-col sm:gap-0 sm:mt-0 sm:min-w-full">
        <Images setImagepreveiw={setImagepreveiw}  imagespreveiw = {imagespreveiw} />
        <Details order={order} setOrder={setOrder}/>
    </div>
  )
}

export default Product