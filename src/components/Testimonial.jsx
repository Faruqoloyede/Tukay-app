import money from "../assets/money.png";
import Button from "./Button";

const Testimonial = () => {
  return (
    <section>
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <div className='flex flex-col items-start'>
          <h2 className='font-space text-[30px] font-bold mb-4 md:mt-0 mt-8'>Urgent Tukay- the Notes</h2>
          <p className='font-space font-normal text-[18px] my-3'>No cash, No wahala get our application and deal with Sapa.</p>
          <Button styles="bg-primary" color= "white" />
        </div>
        <img src={money} />
      </div>
    </section>
  )
}

export default Testimonial
