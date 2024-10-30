"use client";

import React from "react";
import SectionHeading from "./section-heading";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import PandaInteractive from "@/public/panda_interactive.png";
import PandaStream from "@/public/panda_stream.png";
import PandaTwitter from "@/public/panda_twitter.png";
import PandaVS from "@/public/panda_vs.png";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-28">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline lineColor="#e0e0e0">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <a href={item.companyLink}><p className="font-normal !mt-0">{item.company}</p></a>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !mb-1 !font-normal text-gray-700">
                {item.description}
              </p>
              {item.company == "Panda Global (Contract)" && (
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                  <SwiperSlide>
                    <div className="flex flex-col justify-center">
                      <img className="h-[15rem] object-contain" src={PandaStream.src} alt="Screenshot of Panda web-based graphics I developed to show statistics during tournaments" />
                      <p className="text-gray-700 text-center font-small">Live tournament broadcast with web-based visualizations of player info</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center">
                      <img className="h-[15rem] object-contain" src={PandaInteractive.src} alt="Interactive on-stream visualization during Panda-hosted tournament" />
                      <p className="text-gray-700 text-center font-small">Interactive visualization showing player options and info about the game</p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center">
                      <img className="h-[15rem] object-contain" src={PandaTwitter.src} alt="Screenshot of a Panda Twitter post that displayed a visualization of tournament data using the web app I built" />
                      <p className="text-gray-700 text-center font-small">Company tweet using visualizations of tournament data generated by visualization web app </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex flex-col justify-center">
                      <img className="h-[15rem] object-contain" src={PandaVS.src} alt="On-stream visualization showcasing the results of matches between players" />
                      <p className="text-gray-700 text-center font-small">Visualization showing results of matches between players in the top 8 of a tournament</p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              )}
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}