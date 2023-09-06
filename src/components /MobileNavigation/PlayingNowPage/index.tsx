import { motion } from "framer-motion";

const PlayingNowPage = ({
  isPageVisible,
  setIsPageVisible,
}: {
  isPageVisible: boolean;
  setIsPageVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const hide = {
    top: "100dvh",
  };

  const show = {
    top: "0",
  };

  console.log(isPageVisible);

  return (
    <motion.div
      className="bg-cover bg-center absolute p-5 h-screen right-0 left-0 bg-[url(https://res.cloudinary.com/devbqyiud/image/upload/v1693966806/cld-sample-3.jpg)]"
      initial={hide}
      animate={isPageVisible ? show : hide}
      transition={{ type: "spring", damping: 16 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        onClick={() => setIsPageVisible(false)}
      >
        <path
          fillRule="evenodd"
          d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
          clipRule="evenodd"
        />
      </svg>
    </motion.div>
  );
};
export default PlayingNowPage;
