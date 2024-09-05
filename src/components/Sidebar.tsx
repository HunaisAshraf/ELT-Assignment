import React from "react";
import { FiGrid, FiLogOut, FiFileText } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { BiRupee } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { VscGraph } from "react-icons/vsc";

const Sidebar = () => {
  const sidebarLink = [
    { title: "Dashboard", icon: <FiGrid /> },
    { title: "All classes", icon: <TbUsers /> },
    { title: "Assignments", icon: <FiFileText /> },
    { title: "Performance", icon: <VscGraph /> },
    { title: "Fee Details", icon: <BiRupee /> },
    { title: "Settings", icon: <CiSettings /> },
  ];

  return (
    <div className="hidden lg:block w-56 h-screen border-r-2 px-5 pt-5  fixed">
      <div>
        <h1 className="text-[18px] font-semibold ms-6">Logo</h1>
      </div>
      <div className="p-5 my-6 border-b-2">
        <img
          src="https://s3-alpha-sig.figma.com/img/c620/90c1/0348e55cb7230a23b65bb5c91a5c76ad?Expires=1726444800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j0OgjnYZPFZKuT62v~S98lUsGsHK2xBL8gmFQwXJ8y7-o1ccouusInAD0SZqZa4OWqWwa0j2WKbd2Q70t6BQrOj5iT1MBV5fNoEJd0aQ1YlDVxLB4kHLjBHbRYTnvZgzBABJyA9xyzzm6Z9hwyRXWGyaadVxQSQr~XOMG3nSKN9a75T8c~b15oJDNYcGBIvpLhcqjer~4w-jb--8uzni1yX6y3kYAmrUk~zPG2A2QlJQJHQ62n6klA54J7k9-ORMVlFGXTX0iJwnkTmqQblHyQUTBrpJ7kAUAJJnAB4g~8xpck4h9fdjhxLwr5II7jyBVhhmSvxsSaS~dkKvwBIXFg__"
          alt="profile"
          className="h-12 w-12 rounded-full"
        />
        <p className="mt-2">John Doe</p>
        <p className="text-sm text-[#5F5F61]">Intermediate</p>
      </div>
      <div className="px-5 flex flex-col ">
        <ul>
          {sidebarLink.map((link) => (
            <li
              key={link.title}
              className="flex items-center gap-3 mt-4 text-[#404040] text-sm"
            >
              <span className="bg-[#EFEDEA] p-2 rounded-full text-lg text-black">
                {link.icon}
              </span>
              {link.title}
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-3 mt-24 text-[#404040] text-sm ">
          <span className="bg-[#EFEDEA] p-2 rounded-full text-lg text-black">
            <FiLogOut />
          </span>
          Logout
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
