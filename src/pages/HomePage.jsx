import React from 'react'
import Header from '../components/Header'
import Illustration from '../assets/Illustration.png'
import amazon from '../assets/amazon.png'
import dribble from '../assets/dribble.png'
import hubspot from '../assets/hubspot.png'
import netflix from '../assets/netflix.png'
import notion from '../assets/notion.png'
import zoom from '../assets/zoom.png'
import searchEngine from "../assets/search-engine.png"
import payPerClick from "../assets/pay-per-click.png"
import socialMedia from "../assets/social-media.png"
import emailMarketing from "../assets/email-marketing.png"
import contentCreation from "../assets/content-creation.png"
import analyticsAndTracking from "../assets/analytics-and-tracking.png"
import arrowLight from '../assets/arrow-light.svg'
import arrowDark from '../assets/arrow-dark.svg'
import thingsHappen from '../assets/things-happen.png'
import member1 from "../assets/member1.png"
import member2 from "../assets/member2.png"
import member3 from "../assets/member3.png"
import member4 from "../assets/member4.png"
import member5 from "../assets/member5.png"
import member6 from "../assets/member6.png"
import linkedin from '../assets/linkedin.png'
import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import sliderStar from '../assets/slider-star.svg'
import contactImg from '../assets/contact-image.png'

const brands = [amazon, dribble, hubspot, netflix, notion, zoom];
const services = [
  {
    title: "Search engine optimization",
    image: searchEngine,
    bgColor: "#F3F3F3"
  },
  {
    title: "Pay-per-click advertising",
    image: payPerClick,
    bgColor: "#B9FF66"
  },
  {
    title: "Social Media Marketing",
    image: socialMedia,
    bgColor: "#191A23"
  },
  {
    title: "Email Marketing",
    image: emailMarketing,
    bgColor: "#F3F3F3"
  },
  {
    title: "Content Creation",
    image: contentCreation,
    bgColor: "#B9FF66"
  },
  {
    title: "Analytics and Tracking",
    image: analyticsAndTracking,
    bgColor: "#191A23"
  }
]

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    isOpen: true
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description: "",
    isOpen: false
  },
  {
    number: "03",
    title: "Implementation",
    description: "",
    isOpen: false
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description: "",
    isOpen: false
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description: "",
    isOpen: false
  },
  {
    number: "06",
    title: "Continual Improvement",
    description: "",
    isOpen: false
  }
]

const teamMembers = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    image: member1,
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    image: member2,
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills"
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    image: member3,
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    image: member4,
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    image: member5,
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    image: member6,
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
  }
]

const testimonials = [
  {
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    comment:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    comment:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    comment:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    comment:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
  {
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    comment:
      "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
  },
];


const HomePage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    dragFree: false,
  })

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()

    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className='w-full'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>


        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="lg:order-1 order-1 py-4">
            <h1 className="text-4xl lg:text-6xl font-semibold mb-6 leading-tight">
              Navigating the <br /> digital landscape <br /> for success
            </h1>

            <div className="lg:hidden block mb-6">
              <img src={Illustration} alt="Illustration" />
            </div>

            <p className="w-full lg:w-2/3 leading-7 text-[20px] mb-6">
              Our digital marketing agency helps businesses grow and succeed online
              through a range of services including SEO, PPC, social media marketing,
              and content creation.
            </p>

            <button className="bg-[#191A23] text-white py-4 px-8 rounded-xl text-[20px]">
              Book a consultation
            </button>
          </div>

          <div className="hidden lg:block lg:order-2">
            <img src={Illustration} alt="Illustration" />
          </div>
        </section>

        <section className="grayscale mt-16 mb-36">
          <div className="hidden md:flex justify-between">
            {brands.map((item, index) => (
              <div key={index}>
                <img src={item} alt="" className="max-h-10 sm:max-h-12 object-contain" />
              </div>
            ))}
          </div>

          <div className="md:hidden overflow-hidden">
            <div className="flex w-[115%] ml-[2%] mb-8">
              {brands.slice(0, 3).map((item, index) => (
                <div key={index} className="w-1/3 flex justify-center">
                  <img src={item} alt="" className="max-h-10 sm:max-h-12 object-contain" />
                </div>
              ))}
            </div>

            <div className="flex w-[115%] -ml-[20%]">
              {brands.slice(3, 6).map((item, index) => (
                <div key={index} className="w-1/3 flex justify-center">
                  <img src={item} alt="" className="max-h-10 sm:max-h-12 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>


        <section className='mb-32'>
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-10 text-center sm:text-left">
            <h2 className="bg-[#B9FF66] text-3xl sm:text-[40px] font-semibold rounded-xl px-2">
              Services
            </h2>
            <p className="text-base sm:text-[18px] w-full sm:w-1/2">
              At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 my-12 sm:my-20">
            {services.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-between items-center px-6 sm:px-8 py-10 sm:py-16 border rounded-3xl gap-6"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <div>
                    <div className="mb-10 sm:mb-16">
                      <h2
                        className="text-2xl sm:text-4xl font-semibold inline rounded-xl"
                        style={{
                          background:
                            item.bgColor === "#191A23" || item.bgColor === "#B9FF66"
                              ? "white"
                              : "#B9FF66",
                        }}
                      >
                        {item.title}
                      </h2>
                    </div>

                    <button
                      className="text-xl flex gap-4 items-center"
                      style={{ color: item.bgColor === "#191A23" ? "white" : "#191A23" }}
                    >
                      <img
                        src={item.bgColor === "#191A23" ? arrowDark : arrowLight}
                        alt=""
                      />
                      <span className="hidden sm:inline">Learn more</span>
                    </button>
                  </div>

                  <img
                    src={item.image}
                    alt=""
                    className="w-28 sm:w-auto max-w-[45%] object-contain"
                  />
                </div>
              )
            })}
          </div>
        </section>


        <section className="bg-[#F3F3F3] grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-20 px-6 sm:px-16 rounded-4xl sm:rounded-4xl my-16 sm:my-32">
          <div className="py-10 sm:py-16 text-base">
            <h2 className="font-semibold text-3xl sm:text-4xl">
              Let’s make things happen
            </h2>

            <p className="text-base sm:text-[20px] my-6 sm:my-8">
              Contact us today to learn more about how our digital marketing services
              can help your business grow and succeed online.
            </p>

            <button className="bg-[#191A23] text-white px-8 sm:px-12 py-4 sm:py-8 rounded-xl sm:rounded-2xl">
              Get your free proposal
            </button>
          </div>

          <img src={thingsHappen} alt="" className="hidden sm:block" />
        </section>



        <section>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
            <h2 className="bg-[#B9FF66] text-3xl sm:text-[40px] font-semibold rounded-xl px-2">
              Case Studies
            </h2>
            <p className="text-base sm:text-[18px] w-full sm:w-1/2">
              Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </p>
          </div>

          <div className="mt-16 mb-20 sm:mt-24 sm:mb-32 overflow-x-auto sm:overflow-visible">
            <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-0 sm:min-w-0 md:bg-[#191A23] md:p-12 rounded-4xl">
              <div className="bg-[#191A23] rounded-4xl sm:rounded-none text-white p-8 min-w-[320px] max-w-[320px] sm:min-w-0 sm:max-w-none">
                <p>
                  For a local restaurant, we implemented a targeted PPC campaign that
                  resulted in a 50% increase in website traffic and a 25% increase in
                  sales.
                </p>
                <button className="text-[#B9FF66] flex mt-6 items-center gap-2">
                  Learn more <img src={arrowLight} alt="" />
                </button>
              </div>

              <div className="bg-[#191A23] sm:border-l sm:border-r sm:border-white rounded-4xl sm:rounded-none text-white p-8 min-w-[320px] max-w-[320px] sm:min-w-0 sm:max-w-none">
                <p>
                  For a B2B software company, we developed an SEO strategy that resulted
                  in a first page ranking for key keywords and a 200% increase in organic
                  traffic.
                </p>
                <button className="text-[#B9FF66] flex mt-6 items-center gap-2">
                  Learn more <img src={arrowLight} alt="" />
                </button>
              </div>

              <div className="bg-[#191A23] rounded-4xl sm:rounded-none text-white p-8 min-w-[320px] max-w-[320px] sm:min-w-0 sm:max-w-none">
                <p>
                  For a national retail chain, we created a social media marketing
                  campaign that increased followers by 25% and generated a 20% increase
                  in online sales.
                </p>
                <button className="text-[#B9FF66] flex mt-6 items-center gap-2">
                  Learn more <img src={arrowLight} alt="" />
                </button>
              </div>
            </div>
          </div>

        </section>

        <section>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
            <h2 className="bg-[#B9FF66] text-3xl sm:text-[40px] font-semibold rounded-xl px-2">
              Our Working Process
            </h2>
            <p className="text-base sm:text-[18px] w-full sm:w-1/2">
              Step-by-Step Guide to Achieving <br className="hidden sm:block" /> Your Business Goals
            </p>
          </div>

          <div className="my-10 sm:my-16 flex flex-col gap-4 sm:gap-6">
            {processSteps.map((item, index) => {
              return (
                <div
                  key={index}
                  className="rounded-3xl py-5 sm:py-8 px-4 sm:px-6 border shadow-[0_6px_0_0_#191A23]"
                  style={{ background: item.isOpen ? "#B9FF66" : "#F3F3F3" }}
                >
                  <div className="flex justify-between items-center gap-4">
                    <div className="flex items-center gap-3 sm:gap-4 py-2 sm:py-4">
                      <p className="text-2xl sm:text-4xl font-bold">{item.number}</p>
                      <p className="text-lg sm:text-2xl font-semibold">{item.title}</p>
                    </div>

                    <button className="text-2xl sm:text-4xl font-bold bg-white border rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0">
                      {item.isOpen ? "-" : "+"}
                    </button>
                  </div>

                  {item.isOpen ? <hr className="my-3 sm:my-4" /> : ""}

                  {item.isOpen ? (
                    <p className="py-2 sm:py-4 text-sm sm:text-base leading-6">
                      {item.description}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              )
            })}
          </div>
        </section>


        <section>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
            <h2 className="bg-[#B9FF66] text-3xl sm:text-[40px] font-semibold rounded-xl px-2">
              Team
            </h2>
            <p className="text-base sm:text-[18px] line-clamp-2 w-full sm:w-1/2">
              Meet the skilled and experienced team behind our{" "}
              <br className="hidden sm:block" />
              successful digital marketing strategies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-10 sm:mt-16">
            {teamMembers.map((item, index) => {
              return (
                <div
                  key={index}
                  className="border shadow-[0_6px_0_0_#191A23] rounded-3xl sm:rounded-4xl xl:rounded-[45px] p-6 sm:p-8 xl:p-12"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-end gap-3 sm:gap-4 min-w-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 sm:w-24 xl:w-auto object-contain shrink-0"
                      />

                      <div className="min-w-0">
                        <h4 className="font-semibold text-base sm:text-lg leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-sm sm:text-base leading-5 mt-1">
                          {item.position}
                        </p>
                      </div>
                    </div>

                    <img
                      src={linkedin}
                      className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
                      alt="LinkedIn"
                    />
                  </div>

                  <hr />

                  <p className="mt-4 text-sm sm:text-base leading-6">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
          <div className='flex justify-end mt-10 mb-25'>
            <div></div>
            <div>
              <button className='bg-[#191A23] text-white px-16 py-4 rounded-xl'>See all team</button>
            </div>
          </div>
        </section>


        <section>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
            <h2 className="bg-[#B9FF66] text-3xl sm:text-[40px] font-semibold rounded-xl px-2">
              Testimonials
            </h2>
            <p className="text-base sm:text-[18px] line-clamp-2 w-full sm:w-1/2">
              Hear from Our Satisfied Clients: Read Our Testimonials{" "}
              <br className="hidden sm:block" />
              to Learn More about Our Digital Marketing Services
            </p>
          </div>
          <div className="bg-[#191A23] rounded-[60px] py-15 overflow-hidden mt-16">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="min-w-0 flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_70%] px-4 py-8"
                  >
                    <div className="text-white">
                      <div className="border border-[#B9FF66] rounded-[45px] p-8 md:p-10 relative">
                        <p className="text-[16px] leading-6 md:text-[18px] md:leading-7">
                          "{item.comment}"
                        </p>

                        <div className="absolute left-10 -bottom-2.75 w-5.5 h-5.5 bg-[#191A23] border-r border-b border-[#B9FF66] rotate-45"></div>
                      </div>

                      <div className="mt-8 pl-6 md:pl-10">
                        <h3 className="text-[#B9FF66] text-[20px] font-medium">
                          {item.name}
                        </h3>
                        <p className="text-white text-[18px]">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-24 flex items-center justify-center gap-8">
              <button
                onClick={scrollPrev}
                className="text-white/50 hover:text-white transition"
              >
                <FaArrowLeft size={22} />
              </button>

              <div className="flex items-center gap-3">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`text-[18px] transition ${index === selectedIndex ? "text-[#B9FF66]" : "text-white"
                      }`}
                  >
                    <img src={sliderStar} alt="" />
                  </button>
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="text-white hover:text-[#B9FF66] transition"
              >
                <FaArrowRight size={22} />
              </button>
            </div>
          </div>
        </section>

        <section>
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 mt-16 sm:mt-32 mb-10 sm:mb-16 text-center sm:text-left">
            <h2 className="bg-[#B9FF66] text-3xl sm:text-[40px] font-semibold rounded-xl px-2">
              Contact Us
            </h2>
            <p className="text-base sm:text-[18px] line-clamp-2 w-full sm:w-1/2">
              Connect with Us: Let's Discuss Your{" "}
              <br className="hidden sm:block" />
              Digital Marketing Needs
            </p>
          </div>
          <div
            className="bg-[#F3F3F3] rounded-4xl sm:rounded-[45px] py-8 sm:py-12 px-4 sm:px-8 lg:px-12 overflow-hidden bg-no-repeat bg-contain"
            style={{
              backgroundImage: window.innerWidth >= 1020 ? `url(${contactImg})` : "none",
              backgroundPosition: "right -300px center",
            }}
          >
            <form className="w-full max-w-full sm:max-w-2xl">
              <div className="flex mb-6 sm:mb-8 gap-6 sm:gap-4 flex-col sm:flex-row">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactType"
                    className="appearance-none w-5 h-5 rounded-full border border-black checked:bg-[#B9FF66] checked:border-black"
                  />
                  Say hi
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactType"
                    className="appearance-none w-5 h-5 rounded-full border border-black checked:bg-[#B9FF66] checked:border-black"
                  />
                  Get a Quote
                </label>
              </div>

              <div className="mb-6 sm:mb-8">
                <p>Name</p>
                <input
                  className="border rounded-xl sm:rounded-2xl py-3 px-4 sm:px-6 mt-2 w-full bg-white"
                  type="text"
                  placeholder="Name"
                />
              </div>

              <div className="mb-6 sm:mb-8">
                <p>Email*</p>
                <input
                  className="border rounded-xl sm:rounded-2xl py-3 px-4 sm:px-6 mt-2 w-full bg-white"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="mb-6 sm:mb-8">
                <p>Message*</p>
                <textarea
                  className="border rounded-xl sm:rounded-2xl py-3 px-4 sm:px-6 mt-2 h-36 sm:h-40 w-full bg-white resize-none"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="bg-[#191A23] text-white px-8 sm:px-16 py-4 rounded-xl w-full">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
