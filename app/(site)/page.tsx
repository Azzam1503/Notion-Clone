import React from "react";
import TitleSection from "@/components/landing-page/title-section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "../../public/appBanner.png";
import Diamond from "../../public/icons/diamond.svg";
import CheckIcon from "../../public/icons/check.svg";
import Calender from "../../public/cal.png";
import { CLIENTS, PRICING_CARDS, PRICING_PLANS, USERS } from "@/lib/constants";
import { randomUUID } from "crypto";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import CustomCard from "@/components/landing-page/customCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <>
      <section
        className="overflow-hidden
        px-4
        sm:px-6
        mt-10
        sm:flex
        sm:flex-col
        gap-4
        md:justify-center
        md:items-center
      "
      >
        <TitleSection
          pill="✨ Your workspace, Perfected"
          title="All-In-One Collabration and Productivity Platform"
        />
        <div className="bg-white p-[2px] mt-6 rounded-xl bg-gradient-to-r from-primary to-brand-primaryBlue sm:w-[3oopx]">
          <Button
            variant="secondary"
            className="w-full rounded-[10px] p-6 text-2xl bg-background"
          >
            Get Cypress Free
          </Button>
        </div>
        <div className="md:mt-[-90px] sm:w-full w-[750px] flex justify-center mt-[-40px] relative sm:ml-0 ml-[-50px]">
          <Image src={Banner} alt="Applicatin Banner" />
          <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 absolute z-10"></div>
        </div>
      </section>
      <section className="relative">
        <div
          className="overflow-hidden 
          flex 
          after:content[''] 
          after:dark:from-brand-dark 
          after:to-transparent 
          after:from-background 
          after:bg-gradient-to-l 
          after:right-0 
          after:bottom-0
          after: top-0
          after:w-20 
          after:absolute 
          after:z-10
          
          before:content[''] 
          before:dark:from-brand-dark 
          before:to-transparent 
          before:from-background 
          before:bg-gradient-to-r
          before:right-0 
          before:bottom-0 
          before:top-0 
          before:w-20 
          before:absolute 
          before:z-10"
        >
          {[...Array(2)].map((arr) => (
            <div key={arr} className="flex flex-nowrap animate-slide">
              {CLIENTS.map((client) => (
                <div
                  key={client.alt}
                  className="relative w-[200px] m-20 shrink-0 flex item-center"
                >
                  <Image
                    src={client.logo}
                    alt={client.alt}
                    width={200}
                    className="object-contain max-w-none"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="px-4 sm:px-6 flex justify-center items-center flex-col relative">
        <div className="w-[30%] blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-10 top-22" />
        <TitleSection
          title="Keep track of your meetings all in one place"
          subheading="Caputre your ideas, thoughts, and meeting notes in a strong way"
          pill="Features"
        />
        <div className="mt-10 max-w-[450px] flex justify-center relative sm:ml-0 rounded-2xl border-8 border-washed-purple-300  border-opacity-10">
          <Image src={Calender} alt="Banner" className="rounded-2xl" />
        </div>
      </section>
      <section className="relative">
        <div className="w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/50 -z-100 top-56" />
        <div className="mt-20 px-4 sm:px-6 flex flex-col overflow-x-hidden overflow-visible">
          <TitleSection
            title="Trusted by all"
            pill="Testimonials"
            subheading="Join thousands of satisfied users who rely on our platform for their 
            personal and professional productivity needs."
          />
          {[...Array(2)].map((arr, ind) => (
            <div
              key={randomUUID()}
              className={twMerge(
                clsx("mt-10 flex flex-nowrap gap-6 self-start", {
                  "flex-row-reverse": ind === 1,
                  "animate-[slide_250s_linear_infinite]": true,
                  "animate-[slide_250s_linear_infinite_reverse]": ind === 1,
                  "ml-[100vw]": ind === 1,
                }),
                "hover:paused"
              )}
            >
              {USERS.map((user, ind) => (
                <CustomCard
                  key={user.name}
                  className="w-[500px] shrink-0 rounded-xl dark:bg-gradient-to-t dark:from-border dark:to-background"
                  cardHeader={
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={`/avatars/${ind + 1}.png`} />
                        <AvatarFallback>AV</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-foreground">
                          {user.name}
                        </CardTitle>
                        <CardDescription className="dark:text-washed-purple-800">
                          {user.name.toLowerCase()}
                        </CardDescription>
                      </div>
                    </div>
                  }
                  cardContent={
                    <p className="dark:text-washed-purple-800">
                      {user.message}
                    </p>
                  }
                ></CustomCard>
              ))}
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20 px-4 sm:px-6">
        <TitleSection
          title="The Perfect Plan For You"
          subheading="Experience all the benefits of our platform. Select a plan that suits your needs and take your productivity to new heights."
          pill="Pricing"
        />
        <div className="flex flex-col-reverse sm:flex-row gap-4 justify-center sm:items-stretch items-center mt-10">
          {PRICING_CARDS.map((card) => (
            <CustomCard
              key={card.planType}
              className={clsx(
                "w-[300px] rounded-2xl dark:bg-black/40 background-blur-3xl relative",
                {
                  "border-brand-primaryPurple/70":
                    card.planType === PRICING_PLANS.proplan,
                }
              )}
              cardHeader={
                <CardTitle>
                  {card.planType === PRICING_PLANS.proplan && (
                    <>
                      <div className="hidden dark:block w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple/80 -z-10 top-0">
                        <Image
                          src={Diamond}
                          alt="Pro Plan Icon"
                          className="absolute top-6 right-6"
                        />
                      </div>
                    </>
                  )}
                  {card.planType}
                </CardTitle>
              }
              cardContent={
                <CardContent className="p-0">
                  <span className="font-normal text-2xl">${card.price}</span>
                  {+card.price > 0 ? (
                    <span className="dark:text-washed-purple-800 ml-1">
                      /mo
                    </span>
                  ) : (
                    ""
                  )}
                  <p className="dark:text-washed-purple-800">
                    {card.description}
                  </p>
                  <Button className="whitespace-nowrap w-full mt-4">
                    {card.planType === PRICING_PLANS.proplan
                      ? "Go Pro"
                      : "Get Started"}
                  </Button>
                </CardContent>
              }
              cardFooter={
                <ul className="font-normal flex mb-2 flex-col gap-4">
                  <small>{card.highlightFeature}</small>
                  {card.freatures.map((featrue) => (
                    <li key={featrue} className="flex item-center gap-2">
                      <Image src={CheckIcon} alt="CheckIcon" />
                      {featrue}
                    </li>
                  ))}
                </ul>
              }
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
