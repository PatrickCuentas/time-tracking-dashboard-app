import Link from "next/link";
import Image from "next/image";
import "tailwindcss/tailwind.css";
const Profile = ({ children, focus }) => {
  const time = [
    {
      name: "daily",
      focus: false,
    },
    {
      name: "weekly",
      focus: false,
    },
    {
      name: "monthly",
      focus: false,
    },
  ];

  time.forEach((t) => {
    if (t.name === focus) {
      t.focus = true;
    }
  });

  return (
    <>
      <div className="grid max-w-sm 2xl:max-w-none 2xl:grid-cols-4 2xl:grid-rows-2 2xl:gap-8 2xl:mx-6 ">
        <div className="2xl:row-start-1 2xl:row-end-3  2xl:m-0 bg-neutral-dark_blue rounded-2xl m-4 ">
          <div className="2xl:flex-col 2xl:space-y-8 2xl:space-x-0 h-67 flex p-8 space-x-4 bg-primary-blue rounded-2xl">
            <div className="border-white border-4 rounded-full 2xl:w-20 w-16 2xl:h-20 h-16">
              <Image
                className="border-4 rounded-xl"
                src="/images/image-jeremy.png"
                layout="responsive"
                sizes="100vw"
                quality="100"
                width="64px"
                height="64px"
                alt="xd"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-neutral-pale_blue text-sm">Report for</p>
              <p className="2xl:text-4xl text-white text-2xl font-thin">
                Jeremy Robson
              </p>
            </div>
          </div>
          <nav className="2xl:py-5 px-8 py-6 text-neutral-desatured_blue">
            <ul className="flex 2xl:flex-col 2xl:space-x-0 2xl:space-y-2 space-x-14 cursor-pointer">
              <li className="hover:text-neutral-pale_blue">
                <Link href="/">
                  <a className={time[0].focus ? `text-white` : null}>Daily</a>
                </Link>
              </li>
              <li className="hover:text-neutral-pale_blue">
                <Link href="/weekly">
                  <a className={time[1].focus ? `text-white` : null}>Weekly</a>
                </Link>
              </li>
              <li className="hover:text-neutral-pale_blue">
                <Link href="/monthly">
                  <a className={time[2].focus ? `text-white` : null}>Monthly</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {children}
      </div>
      <style jsx>
        {`
          @media screen and (min-width: 1440px) {
            .h-67 {
              height: 67%;
            }
          }
        `}
      </style>
    </>
  );
};
Profile.defaultProps = {
  focus: "bg-white",
};
export default Profile;
