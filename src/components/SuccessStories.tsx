import React from "react";
// Use your uploaded image
const profileImg = "../src/assets/man.png";

interface TestimonialProps {
  image: string;
  description: string;
  name: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  image,
  description,
  name,
  role,
}) => {
  return (
    <div className="py-16 flex flex-col  items-center text-center max-w-3xl mx-auto">
      {/* Profile Image */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-6 border border-gray-300"
      />

      {/* Description */}
      <p className="text-gray-600 max-w-2xl leading-relaxed px-4">
        {description}
      </p>

      {/* User Info */}
      <div className="mt-6">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const SuccessStories: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 pb-20">
      {/* Header */}
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">Success Stories</h2>

        <div className="mt-2 text-sm text-gray-500">
          <span className="text-green-500">Home</span> / Success Stories
        </div>
      </div>

      {/* Testimonials */}
      <div className="space-y-24">
        <TestimonialCard
          image={profileImg}
          description="Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. 
          Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, 
          nisi tellus iaculis quam, eget egestas mi felis eu urna. 
          Quisque id nisl commodo, egestas eros ac, cursus odio."
          name="Iftikhar Ali"
          role="Full Stack Developer"
        />

        <TestimonialCard
          image={profileImg}
          description="Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. 
          Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, 
          nisi tellus iaculis quam, eget egestas mi felis eu urna. 
          Quisque id nisl commodo, egestas eros ac, cursus odio."
          name="Iftikhar Ali"
          role="Full Stack Developer"
        />
         <TestimonialCard
          image={profileImg}
          description="Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. 
          Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, 
          nisi tellus iaculis quam, eget egestas mi felis eu urna. 
          Quisque id nisl commodo, egestas eros ac, cursus odio."
          name="Iftikhar Ali"
          role="Full Stack Developer"
        />
         <TestimonialCard
          image={profileImg}
          description="Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. 
          Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, 
          nisi tellus iaculis quam, eget egestas mi felis eu urna. 
          Quisque id nisl commodo, egestas eros ac, cursus odio."
          name="Iftikhar Ali"
          role="Full Stack Developer"
        />
         <TestimonialCard
          image={profileImg}
          description="Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. 
          Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, 
          nisi tellus iaculis quam, eget egestas mi felis eu urna. 
          Quisque id nisl commodo, egestas eros ac, cursus odio."
          name="Iftikhar Ali"
          role="Full Stack Developer"
        />
         <TestimonialCard
          image={profileImg}
          description="Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. 
          Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, 
          nisi tellus iaculis quam, eget egestas mi felis eu urna. 
          Quisque id nisl commodo, egestas eros ac, cursus odio."
          name="Iftikhar Ali"
          role="Full Stack Developer"
        />
         <TestimonialCard
          image={profileImg}
          description="Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. 
          Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, 
          nisi tellus iaculis quam, eget egestas mi felis eu urna. 
          Quisque id nisl commodo, egestas eros ac, cursus odio."
          name="Iftikhar Ali"
          role="Full Stack Developer"
        />
         <TestimonialCard
          image={profileImg}
          description="Duis sapien velit, rutrum ac rutrum dapibus, auctor ut lacus. 
          Aenean sit amet erat augue. Aenean finibus, nibh sed malesuada maximus, 
          nisi tellus iaculis quam, eget egestas mi felis eu urna. 
          Quisque id nisl commodo, egestas eros ac, cursus odio."
          name="Iftikhar Ali"
          role="Full Stack Developer"
        />
      </div>
    </section>
  );
};

export default SuccessStories;
