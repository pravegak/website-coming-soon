import Image from 'next/image';

export const Landing = () => {
  return (
    <div className="grid w-full bg-white place-items-center">
      <div className="grid w-full h-full text-4xl font-bold shadow-2xl lg:grid-cols-2 ">
        <div className="grid bg-white rounded-l-lg place-items-center ">
          <div>
            <header className="font-medium leading-tight text-center lg:text-5xl font-Monoton">
              <h4>Website Under Maintenance</h4>
            </header>

            <h4 className="mt-12 text-2xl font-semibold text-center font-Nunito">
              Follow us for updates!
            </h4>

            <form className="grid px-8 text-lg gap-x-4 gap-y-2">
              <label className="flex flex-col gap-2 mt-4">
                <input
                  className="px-4 py-2 border border-zinc-600"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </label>

              <button className="px-8 py-3 mt-4 text-white bg-teal-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="relative flex-1 ">
          <Image
            src={require('@/images/hero.jpg')}
            alt="hero"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};
