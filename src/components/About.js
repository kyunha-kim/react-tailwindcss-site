import React from "react";

const About = () => {
  return (
    <section name="about" className="w-full h-screen">
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">About this company</h2>
          <p className="py-6 text-3xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <p className="mt-20 text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p className="mt-20 text-xl">
          Fusce nec fermentum diam. In lacinia sollicitudin tellus vitae dictum.
          Pellentesque tempor tincidunt lectus. Praesent a placerat velit. Etiam
          finibus leo a venenatis euismod. Quisque ac cursus nibh. Vestibulum
          facilisis orci ut ipsum blandit cursus.
        </p>
      </div>
    </section>
  );
};

export default About;
