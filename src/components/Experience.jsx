import React from "react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 bg-white/10 rounded-xl max-w-5xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Experience
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg md:text-xl font-semibold">
            Frontend Engineer @ TechNova (2022 - Present)
          </h3>
          <ul className="list-disc ml-6 mt-2 text-xs md:text-sm">
            <li>Built reusable UI components in React.</li>
            <li>Integrated APIs with Redux & optimized performance.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg md:text-xl font-semibold">
            Frontend Developer @ WebWorks (2020 - 2022)
          </h3>
          <ul className="list-disc ml-6 mt-2 text-xs md:text-sm">
            <li>Developed interactive dashboards & admin panels.</li>
            <li>Collaborated with designers to create responsive layouts.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
