import Link from "next/Link";
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
    <div className="max-w-sm m-4 space-y-6">
      <div className="bg-neutral-dark_blue rounded-2xl">
        <div className="flex p-8 space-x-4 bg-primary-blue rounded-2xl">
          <div className="border-white border-4 rounded-full w-16 h-16">
            <Image
              className="border-4 rounded-xl"
              src="/images/image-jeremy.png"
              width="64px"
              height="64px"
              alt="xd"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-neutral-pale_blue text-sm">Report for</p>
            <p className="text-white text-2xl font-thin">Jeremy Robson</p>
          </div>
        </div>
        <nav className=" px-8 py-6 text-neutral-desatured_blue">
          <ul className="flex space-x-14 cursor-pointer">
            <li className="hover:text-neutral-pale_blue">
              <Link href="/">
                <a className={time[0].focus && `text-white`}>Daily</a>
              </Link>
            </li>
            <li className="hover:text-neutral-pale_blue">
              <Link href="/weekly">
                <a className={time[1].focus && `text-white`}>Weekly</a>
              </Link>
            </li>
            <li className="hover:text-neutral-pale_blue">
              <Link href="/monthly">
                <a className={time[2].focus && `text-white`}>Monthly</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {children}
    </div>
  );
};
Profile.defaultProps = {
  focus: "bg-white",
};
export default Profile;
