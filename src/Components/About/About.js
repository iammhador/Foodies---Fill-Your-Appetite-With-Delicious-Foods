import React from "react";

const About = () => {
  return (
    <div>
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Trusted by Bangladesh Standards & Testing Institution
            </h2>

            <p class="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>

          <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Total Sales
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  $1.2k
                </dd>
              </div>

              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Online Sales
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  450
                </dd>
              </div>

              <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                <dt class="order-last text-lg font-medium text-gray-500">
                  Offline Sales
                </dt>

                <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  750
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
