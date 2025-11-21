import skillsData from "./SkillsData";

const Skills = () => {
  return (
    <section className="bg-red-900 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif mb-4">Skills</h2>
          <p className="text-gray-400 text-sm max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-4 text-center border-l-2 border-gray-600 pl-6 my-auto">
            <h3 className="uppercase text-sm mb-6 text-gray-400">My Focus</h3>
            <p className="font-semibold">UI/UX Design</p>
            <p className="font-semibold">Web Development</p>
            <p className="font-semibold">Back End</p>
            <p className="font-semibold">Translation</p>
          </div>
          <div className="space-y-4">
            {skillsData.map((skill) => (
              <div key={skill.name} className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-200 text-gray-800">
                    {skill.name}
                  </span>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-600">
                  <div
                    className={`shadow-none flex flex-col text-center text-white justify-center bg-gray-300 ${skill.level}`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;