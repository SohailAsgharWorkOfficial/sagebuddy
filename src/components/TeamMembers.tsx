import React from "react";

// Replace with your real images
import fbIcon from "../assets/facebook.png";
import twitterIcon from "../assets/twitter.png";
import linkedinIcon from "../assets/linkedin.png";

// Replace with your real team images
import member1 from "../assets/member1.png";
import member2 from "../assets/member2.png";
import member3 from "../assets/member3.png";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role }) => {
  return (
    <div className="relative group">
      {/* Card Image */}
      <div className="overflow-hidden rounded-xl shadow-md bg-white">
        <img src={image} alt={name} className="w-full h-80 object-cover" />
      </div>

      {/* Right Side Icons (using SVG images) */}
      <div className="absolute top-26 -right-7 flex flex-col gap-3 bg-white p-3 rounded-xl">
        <button className="w-10 h-10 bg-orange-300  hover:bg-orange-500 rounded-lg flex items-center justify-center  transition">
          <img src={fbIcon} alt="facebook" className="w-5 h-5" />
        </button>

        <button className="w-10 h-10 bg-white hover:bg-orange-500 shadow rounded-lg flex items-center justify-center transition">
          <img src={twitterIcon} alt="twitter" className="w-5 h-5" />
        </button>

        <button className="w-10 h-10 bg-white  hover:bg-orange-500 shadow rounded-lg flex items-center justify-center transition">
          <img src={linkedinIcon} alt="linkedin" className="w-5 h-5" />
        </button>
      </div>

      {/* Name + Role */}
      <div className="text-center mt-4">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const TeamMembers: React.FC = () => {
  const teamData = [
    { image: member1, name: "Iftikhar Ali", role: "Full Stack Developer" },
    { image: member2, name: "Ammar Hanif", role: "UI/UX Designer" },
    { image: member3, name: "Muhammad Qasim", role: "Front End Developer" },

    // second row — repeat for demo
    { image: member1, name: "Iftikhar Ali", role: "Full Stack Developer" },
    { image: member2, name: "Ammar Hanif", role: "UI/UX Designer" },
    { image: member3, name: "Muhammad Qasim", role: "Front End Developer" },
  ];

  return (
    <section className="w-full py-16 bg-gray-50 -mt-10">
      {/* Header */}
      <div className="text-center mb-12 bg-[#f8f8f8] p-15">
        <h2 className="text-2xl font-semibold  text-gray-900">Team Members</h2>
        <div className="mt-2 text-sm text-gray-500">
          <span className="text-green-500">Home</span> / Team Members
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
        {teamData.map((member, i) => (
          <TeamCard
            key={i}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
