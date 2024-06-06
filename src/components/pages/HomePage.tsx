import  { useState } from "react";
import {
  BsFillPersonFill,
  BsGraphUp,
  BsInstagram,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { MdAccessTime, MdOutlineShoppingBasket } from "react-icons/md";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ProductViewsChart from "../utils/ProductViewsChart";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HomePage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const proTipsData = [
    {
      title: "Early access",
      icon: <MdAccessTime className="text-white" />,
      label: "New",
      readTime: "3 mins read",
      avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      title: "Asset use guidelines",
      icon: <MdAccessTime className="text-white" />,
      label: "Small label",
      readTime: "3 mins read",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      title: "Exclusive downloads",
      icon: <MdAccessTime className="text-white" />,
      label: "New",
      readTime: "2 mins read",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      title: "Behind the scenes",
      icon: <MdAccessTime className="text-white" />,
      label: "Hot",
      readTime: "3 mins read",
      avatar: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      title: "Asset use guidelines",
      icon: <MdAccessTime className="text-white" />,
      label: "Popular",
      readTime: "Time",
      avatar: "https://randomuser.me/api/portraits/men/8.jpg",
    },
    {
      title: "Life & work updates",
      icon: <MdAccessTime className="text-white" />,
      label: "New",
      readTime: "3 mins read",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];

  return (
    <div className="p-4 w-full h-full bg-black">
      {/* Dashboard Title */}
      <h1 className="text-3xl font-semibold mb-4 text-white">Dashboard</h1>

      <div className="flex flex-col md:flex-row homepage-content">
        <div className="flex flex-col w-full md:w-[100%] md:max-w-[50vw] mr-1">
          {/* Overview Section */}
          <div className="bg-zinc-900 p-6 rounded w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-white">Overview</h2>
              <select className="bg-zinc-800 border border-gray-600 text-gray-200 py-1 px-3 rounded">
                <option>All time</option>
                <option>Last 30 days</option>
                <option>Last 7 days</option>
              </select>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="bg-zinc-800 p-4 rounded-xl shadow-md w-full md:w-[48%] flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg">
                <div className="flex justify-between w-full mb-2">
                  <span className="text-gray-400 flex items-center">
                    <BsFillPersonFill className="mr-2" /> Customers
                  </span>
                  <span className="text-red-500 flex items-center bg-red-500 bg-opacity-15 p-1 rounded text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 rotate-[90deg]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                    37.8%
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">1024</div>
                <div className="text-blue-500">
                  <BsFillPersonFill className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-zinc-800 p-4 rounded-xl shadow-md w-full md:w-[48%] flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-lg mt-4 md:mt-0">
                <div className="flex justify-between w-full mb-2">
                  <span className="text-gray-400 flex items-center">
                    <BsGraphUp className="mr-2" /> Income
                  </span>
                  <span className="text-green-500 flex items-center bg-green-500 bg-opacity-15 p-1 rounded text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 rotate-[-90deg]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M12 5l7 7-7 7"
                      />
                    </svg>
                    37.8%
                  </span>
                </div>
                <div className="text-3xl font-bold text-white mb-2">256k</div>
                <div className="text-purple-500">
                  <BsGraphUp className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-gray-400">
              Welcome{" "}
              <span className="font-bold text-white">857 customers</span> with a
              personal message
              <span role="img" aria-label="smiley">
                😎
              </span>
            </div>
            <div className="flex items-center mt-4">
              <div className="flex -space-x-4">
                <img
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Avatar"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Avatar"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://randomuser.me/api/portraits/men/3.jpg"
                  alt="Avatar"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-black"
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  alt="Avatar"
                />
              </div>
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <button className="ml-4 bg-blue-500 text-sm text-white px-5 py-1 rounded-full shadow-md">
                    Send message
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Send a Message</DialogTitle>
                    <DialogDescription>
                      Enter your message below and click send.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded-md"
                      rows={4}
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => setIsDialogOpen(false)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                    >
                      Send
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Product Views */}
          <div className="bg-zinc-900 p-6 rounded shadow-md w-full mt-2">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Product views
            </h2>
            <div className="flex items-center justify-between mb-4">
              <select className="bg-zinc-800 border border-gray-600 text-gray-200 py-1 px-3 rounded">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>All time</option>
              </select>
              <button className="bg-zinc-800 text-gray-200 py-1 px-3 text-sm rounded-full">
                All products
              </button>
            </div>
            <ProductViewsChart />
          </div>

          {/* Pro Tips */}
          <div className="bg-zinc-900 p-6 rounded shadow-md w-full my-2">
            <h2 className="text-xl font-semibold mb-4 text-white">Pro tips</h2>
            <p className="text-gray-400 mb-4">
              Need some ideas for the next product?
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {proTipsData.map((tip, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-zinc-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <div className="flex items-center ">
                    <div className="text-white bg-blue-600 p-2 rounded-full mr-3">
                      {tip.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-200 text-sm">{tip.title}</span>
                      <span className="text-gray-400 text-xs">
                        {tip.readTime}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs bg-${
                        tip.label === "New"
                          ? "purple"
                          : tip.label === "Hot"
                          ? "red"
                          : "green"
                      }-500 text-white px-2 py-1 rounded`}
                    >
                      {tip.label}
                    </span>
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={tip.avatar} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-gray-400">
              <Button>See more tips</Button>
              <HiOutlineArrowCircleRight className="text-gray-400 h-5 w-5" />
            </div>
          </div>
        </div>

        {/* Popular products and Comments Section */}
        <div className="flex flex-col w-full md:w-[35vw] rounded">
          <div className="bg-zinc-900 p-6 rounded-lg shadow-md mb-2">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Popular products
            </h2>
            <ul className="flex flex-col gap-y-5">
              {[
                "Crypter - NFT UI kit",
                "Bento Matte 3D illustration 1.0",
                "Excellent material 3D chair",
                "Fleet - travel shopping kit",
              ].map((product, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between py-2 gap-3 border-b border-gray-700"
                >
                  <div className="flex items-center">
                    <img
                      src={`https://via.placeholder.com/50x50`}
                      alt="Product"
                      className="w-10 h-10 rounded mr-2"
                    />
                    <span className="text-gray-200 text-sm w-[8em]">
                      {product}
                    </span>
                  </div>
                  <span
                    className={`text-sm mx-auto ${
                      index % 2 === 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {index % 2 === 0 ? "Active" : "Deactive"}
                  </span>
                  <span className="text-gray-200 text-sm">
                    ${(Math.random() * 1000 + 100).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Comments</h2>
            <div className="flex flex-col gap-y-5">
              {[
                {
                  user: "Ethel",
                  avatar: "https://randomuser.me/api/portraits/men/5.jpg",
                  comment: "Great work 😎",
                  time: "1h",
                },
                {
                  user: "Jazmyn",
                  avatar: "https://randomuser.me/api/portraits/women/5.jpg",
                  comment: "I need react version asap!",
                  time: "8h",
                },
                {
                  user: "Ethel",
                  avatar: "https://randomuser.me/api/portraits/men/5.jpg",
                  comment: "Awesome!",
                  time: "1h",
                },
              ].map((comment, index) => (
                <div key={index} className="flex items-start gap-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-black"
                    src={comment.avatar}
                    alt="Avatar"
                  />
                  <div className="flex flex-col">
                    <span className="text-gray-200">
                      <strong>{comment.user}</strong>{" "}
                      <span className="text-gray-400">
                        @{comment.user.toLowerCase()}
                      </span>
                    </span>
                    <span className="text-gray-400">{comment.comment}</span>
                    <span className="text-gray-500 text-sm">
                      {comment.time}
                    </span>
                  </div>
                </div>
              ))}
              <div className="mt-4 flex items-center justify-between">
                <Button>See more comments</Button>
                <HiOutlineArrowCircleRight className="text-gray-400 h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Refund Requests Section */}
          <div className="bg-zinc-900 p-6 rounded-lg shadow-md mt-4">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Refund requests
            </h2>
            <div className="flex items-start gap-3">
              <MdOutlineShoppingBasket className="text-red-500 h-10 w-10" />
              <div>
                <p className="text-gray-400">
                  You have{" "}
                  <span className="text-white font-bold">
                    52 open refund requests
                  </span>{" "}
                  to action. This includes{" "}
                  <span className="text-white font-bold">8 new requests</span>.{" "}
                  <span role="img" aria-label="eyes">
                    👀
                  </span>
                </p>
                <Button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full transition-transform transform hover:scale-105 hover:shadow-lg">
                  Review refund requests
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get more customers! Section */}
      <div className="bg-zinc-900 p-6 rounded shadow-md w-full my-1 flex flex-col">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Get more customers!
        </h2>
        <p className="text-gray-400 mb-4">
          Share your link to grow your audience. Click below to share on your
          favorite platforms.
        </p>
        <div className="flex flex-wrap items-center">
          <Button className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md flex items-center mr-2 mb-2 transition-transform transform hover:scale-105 hover:shadow-lg">
            <BsFacebook className="mr-2" />
            Share on Facebook
          </Button>
          <Button className="bg-blue-400 text-white px-4 py-2 rounded-full shadow-md flex items-center mr-2 mb-2 transition-transform transform hover:scale-105 hover:shadow-lg">
            <BsTwitter className="mr-2" />
            Share on Twitter
          </Button>
          <Button className="bg-pink-600 text-white px-4 py-2 rounded-full shadow-md flex items-center mr-2 mb-2 transition-transform transform hover:scale-105 hover:shadow-lg">
            <BsInstagram className="mr-2" />
            Share on Instagram
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
