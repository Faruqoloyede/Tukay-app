import banner from "../assets/banner.png";
import greet from "../assets/greet.png";
const Getstarted = () => {
  return (
    <section className='bg-primary w-full'>
      <div className='flex items-center justify-between'>
        <div>
          <img src={greet} />
        </div>
        <div>
          <img src={banner} />
        </div>
      </div>
    </section>
  )
}

export default Getstarted
