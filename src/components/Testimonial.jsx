import money from "../assets/money.png";

const Testimonial = () => {
  return (
    <section>
      <div className='flex md:flex-row flex-col items-center justify-center'>
        <div className='flex flex-col'>
          <h2 className='font-space text-[30px] font-bold mb-4'>Urgent Tukay- the Notes</h2>
          <p className='font-space font-normal text-[18px]'>No cash, No wahala get our application and deal with Sapa.</p>
        </div>
        <img src={money} />
      </div>
    </section>
  )
}

export default Testimonial
