import React from "react";

const About = () => {
  return (
    <div className="m-20 ">
      <section className=" max-w-xl space-y-4">
        <h6 className=" text-nav-color">About</h6>
        <p className=" font-semibold text-4xl space-y-4 text-white">
          <span className="block">The best you can find in the</span>{" "}
          <span className="block">security management industry</span>
        </p>
      </section>
      <section className="mt-10 font-normal space-y-6 text-nav-color text-base max-w-5xl leading-8">
        <p>
          The security industry in Australia has been doing its work manually
          for years. It is time they automate all their tasks and get the job
          done with the click of a button. Enter Ultimate Patrolman! We are
          inspired and motivated by our genuine desire to make challenging tasks
          easy and manageable.
        </p>
        <p>
          We offer easy-to-deal-with solutions to automate the guards' control
          process, making it much easier and hassle-free! You can use our
          product without being technology savvy. With just a few clicks, you
          will be able to: Monitor your guards, send out schedules, distribute
          roasters, download reports, and send emergency-related notifications.
          No more time wasted before attending an emergency; with the features
          embedded in our system, security providers will be able to direct
          guards to important locations easily and rapidly. Moreover, the last
          thing you need is to save guards' time with tedious paperwork. Your
          guards can do most of their tasks by asking them to download our app
          through their phones.
        </p>
      </section>
      <section className="mt-24 space-y-6 max-w-5xl ">
        <h6 className=" font-semibold text-3xl text-white">Monitor Guards</h6>
        <p className="text-nav-color">
          We enable you to stay on top of your guards' movements and shifts.
          Keep a record of guards' sign-ins and outs and ensure they arrive at
          their assigned locations on time.
        </p>
      </section>
      <section className="mt-24 space-y-6 max-w-5xl">
        <h6 className=" font-semibold text-3xl text-white">
          Manage emergencies rapidly and efficiently.
        </h6>
        <p className="text-nav-color">
          Dealing with emergencies cannot, by definition, be time-consuming. Our
          system helps you send an emergency notification to your guards so they
          can head directly to the location needing protection. Guards will
          receive the notification immediately and move towards the site/s in
          need.
        </p>
      </section>
    </div>
  );
};

export default About;
